import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  HttpLink,
  InMemoryCache,
  Observable,
  from,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createClient } from "graphql-ws";

import { API_CONFIG, STORAGE_KEYS } from "../config/api";

let refreshInFlight: Promise<string | null> | null = null;

const LEGACY_ACCESS_TOKEN_KEYS = ["access_token", "accessToken"] as const;
const LEGACY_REFRESH_TOKEN_KEYS = ["refresh_token", "refreshToken"] as const;

async function getTokenWithFallback(
  primaryKey: string,
  legacyKeys: readonly string[],
): Promise<string | null> {
  const direct = await AsyncStorage.getItem(primaryKey);
  if (direct) return direct;

  for (const key of legacyKeys) {
    if (key === primaryKey) continue;
    const value = await AsyncStorage.getItem(key);
    if (value) {
      // Migrate to primary key for consistency.
      await AsyncStorage.setItem(primaryKey, value);
      return value;
    }
  }

  return null;
}

async function clearAuthAndRedirect(reason: string) {
  console.log(`[auth] Clearing tokens (${reason})`);
  await AsyncStorage.multiRemove([
    STORAGE_KEYS.ACCESS_TOKEN,
    STORAGE_KEYS.REFRESH_TOKEN,
    STORAGE_KEYS.USER,
    ...LEGACY_ACCESS_TOKEN_KEYS,
    ...LEGACY_REFRESH_TOKEN_KEYS,
  ]);
  router.replace("/auth/login");
}

async function refreshAccessToken(reason: string): Promise<string | null> {
  if (refreshInFlight) {
    return refreshInFlight;
  }

  refreshInFlight = (async () => {
    try {
      const refreshToken = await AsyncStorage.getItem(
        STORAGE_KEYS.REFRESH_TOKEN,
      );

      const resolvedRefreshToken =
        refreshToken ??
        (await getTokenWithFallback(
          STORAGE_KEYS.REFRESH_TOKEN,
          LEGACY_REFRESH_TOKEN_KEYS,
        ));

      if (!resolvedRefreshToken) {
        await clearAuthAndRedirect(`${reason}:missing-refresh-token`);
        return null;
      }

      console.log(`[Refresh] Attempting token refresh (${reason})...`);

      const response = await fetch(`${API_CONFIG.BASE_URL}/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query:
            "mutation RefreshToken($refreshToken: String!) { refreshToken(refreshToken: $refreshToken) { access_token refresh_token } }",
          variables: { refreshToken: resolvedRefreshToken },
        }),
      });

      const result = await response.json();

      if (result.errors) {
        const errorMessage =
          result.errors[0]?.message ?? JSON.stringify(result.errors);
        console.error(`[Refresh] Failed (${reason}):`, errorMessage);
        throw new Error(errorMessage);
      }

      const refreshed = result?.data?.refreshToken;

      if (!refreshed?.access_token) {
        throw new Error("Refresh response missing access_token");
      }

      console.log(`[Refresh] Token refreshed successfully (${reason})`);

      await AsyncStorage.multiSet([
        [STORAGE_KEYS.ACCESS_TOKEN, refreshed.access_token],
        [STORAGE_KEYS.REFRESH_TOKEN, refreshed.refresh_token],
      ]);

      // Force a reconnect so subscriptions pick up the new token.
      try {
        wsClient.terminate();
      } catch {
        // no-op
      }

      return refreshed.access_token as string;
    } catch (error) {
      console.error(`❌ Refresh token failed (${reason}):`, error);
      await clearAuthAndRedirect(`${reason}:refresh-failed`);
      return null;
    } finally {
      refreshInFlight = null;
    }
  })();

  return refreshInFlight;
}

// ─── HTTP Link ────────────────────────────────────────
const httpLink = new HttpLink({
  uri: `${API_CONFIG.BASE_URL}/graphql`,
});

// ─── Auth Link (pentru HTTP + WS) ─────────────────────
const authLink = setContext(async (_, { headers = {} }) => {
  try {
    const token = await getTokenWithFallback(
      STORAGE_KEYS.ACCESS_TOKEN,
      LEGACY_ACCESS_TOKEN_KEYS,
    );

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  } catch (err) {
    console.warn("[authLink] Cannot read token", err);
    return { headers };
  }
});

// ─── WebSocket Link ───────────────────────────────────
const wsClient = createClient({
  url: `ws://10.22.240.56:8080/graphql`,
  connectionParams: async () => {
    const token = await getTokenWithFallback(
      STORAGE_KEYS.ACCESS_TOKEN,
      LEGACY_ACCESS_TOKEN_KEYS,
    );
    console.log(
      "[WS connectionParams] Using token:",
      token ? "present" : "missing",
    );
    return {
      authorization: token ? `Bearer ${token}` : "",
    };
  },
  on: {
    error: (error) => {
      console.log("[WS error]:", error);
      // Don't logout on WebSocket errors - let it retry with new token
    },
    closed: (event) => {
      // Event 4500 is "jwt expired" from server
      if (event && typeof event === "object" && "code" in event) {
        const closeEvent = event as { code: number; reason?: string };
        if (closeEvent.code === 4500 || closeEvent.code === 4401) {
          console.log(
            "[WS] 🔄 Connection closed due to expired token (code: " +
              closeEvent.code +
              "), refreshing...",
          );
          // Refresh token, then the WS client will retry with the new access token
          void refreshAccessToken("ws-close-" + closeEvent.code).then(
            (newToken) => {
              if (newToken) {
                console.log("[WS] ✅ Token refreshed, reconnecting...");
                // WS client will auto-reconnect with new token
              } else {
                console.log("[WS] ❌ Token refresh failed");
              }
            },
          );
          return;
        }
      }
      console.log("[WS] Connection closed:", event);
    },
  },
  shouldRetry: () => true,
  retryAttempts: Infinity,
  retryWait: (retries) => {
    const delay = Math.min(100 + 2 ** retries * 1000, 10000);
    console.log(`[WS retry] #${retries + 1} waiting ${delay}ms`);
    return new Promise((r) => setTimeout(r, delay));
  },
});

const wsLink = new GraphQLWsLink(wsClient);

// ─── Preemptive Token Refresh ─────────────────────────
// Reîmprospătează token-ul înainte să expire (2 min before expiry)
let preemptiveRefreshTimeout: NodeJS.Timeout | null = null;

export async function schedulePreemptiveRefresh() {
  if (preemptiveRefreshTimeout) {
    clearTimeout(preemptiveRefreshTimeout);
    preemptiveRefreshTimeout = null;
  }

  try {
    const token = await getTokenWithFallback(
      STORAGE_KEYS.ACCESS_TOKEN,
      LEGACY_ACCESS_TOKEN_KEYS,
    );

    if (!token) {
      console.log("[Preemptive] No token found, skipping schedule");
      return;
    }

    // Decode JWT pentru a obține expiration time
    const parts = token.split(".");
    if (parts.length !== 3) {
      console.warn("[Preemptive] Invalid token format");
      return;
    }

    const payload = JSON.parse(atob(parts[1]));
    const expiresAt = payload.exp * 1000; // Convert to milliseconds
    const now = Date.now();
    const timeUntilExpiry = expiresAt - now;

    if (timeUntilExpiry <= 0) {
      console.log("[Preemptive] Token already expired, refreshing now...");
      await refreshAccessToken("preemptive-expired");
      // Schedule next refresh after successful refresh
      schedulePreemptiveRefresh();
      return;
    }

    // Refresh cu 2 minute înainte să expire (sau 80% din durata de viață)
    const refreshOffset = Math.min(2 * 60 * 1000, timeUntilExpiry * 0.8);
    const refreshAt = timeUntilExpiry - refreshOffset;

    if (refreshAt > 0) {
      console.log(
        `[Preemptive] Scheduling refresh in ${Math.round(
          refreshAt / 1000,
        )}s (${Math.round(timeUntilExpiry / 1000)}s until expiry)`,
      );

      preemptiveRefreshTimeout = setTimeout(async () => {
        console.log("[Preemptive] 🔄 Refreshing token before expiry...");
        const newToken = await refreshAccessToken("preemptive");

        if (newToken) {
          console.log("[Preemptive] ✅ Token refreshed successfully");
          // Schedule next refresh
          schedulePreemptiveRefresh();
        } else {
          console.log("[Preemptive] ❌ Refresh failed");
        }
      }, refreshAt);
    } else {
      console.log(
        "[Preemptive] Token expires too soon, refreshing immediately...",
      );
      await refreshAccessToken("preemptive-soon");
      schedulePreemptiveRefresh();
    }
  } catch (error) {
    console.warn("[Preemptive] Failed to schedule refresh:", error);
  }
}

export function cancelPreemptiveRefresh() {
  if (preemptiveRefreshTimeout) {
    clearTimeout(preemptiveRefreshTimeout);
    preemptiveRefreshTimeout = null;
    console.log("[Preemptive] Cancelled scheduled refresh");
  }
}

// ─── JWT Error Detection Helpers ──────────────────────
const JWT_ERROR_PATTERNS = [
  "jwt expired",
  "token expired",
  "jwt malformed",
  "invalid token",
  "invalid signature",
] as const;

const AUTH_ERROR_CODES = [
  "UNAUTHENTICATED",
  "JWT_EXPIRED",
  "UNAUTHORIZED",
] as const;

function isJwtError(errors: ReadonlyArray<any>): boolean {
  return errors.some((err) => {
    const msg = (err?.message || "").toLowerCase();
    const code = err?.extensions?.code;
    return (
      JWT_ERROR_PATTERNS.some((p) => msg.includes(p)) ||
      AUTH_ERROR_CODES.some((c) => c === code) ||
      err?.extensions?.statusCode === 401
    );
  });
}

function isNetworkAuthError(error: any): boolean {
  if (!error) return false;
  if (error.statusCode === 401) return true;
  const msg = (error.message || "").toLowerCase();
  if (JWT_ERROR_PATTERNS.some((p) => msg.includes(p))) return true;
  if (error.result?.errors?.length && isJwtError(error.result.errors))
    return true;
  return false;
}

// ─── Auth Refresh Link (intercept at Observable level) ─
// Replaces onError — checks BOTH next() and error() callbacks
// so it catches JWT errors regardless of how Apollo delivers them.
const authRefreshLink = new ApolloLink((operation, forward) => {
  // Never intercept the refresh mutation itself → infinite loop guard
  if (operation.operationName === "RefreshToken") {
    return forward(operation);
  }

  return new Observable<FetchResult>((observer) => {
    let intercepted = false;

    async function handleAuthRefresh(
      originalError: any,
      isNetworkErr: boolean,
    ) {
      intercepted = true;
      try {
        console.log(
          `[AuthRefresh] 🔄 JWT expired for ${operation.operationName}, refreshing...`,
        );
        const newToken = await refreshAccessToken(
          `http:${operation.operationName ?? "unknown"}`,
        );

        if (!newToken) {
          console.log(
            `[AuthRefresh] ❌ Refresh failed for ${operation.operationName}`,
          );
          if (isNetworkErr) {
            observer.error(originalError);
          } else {
            // Pass through original result with errors
            observer.error(originalError);
          }
          return;
        }

        console.log(
          `[AuthRefresh] ✅ Retrying ${operation.operationName} with new token`,
        );

        // Update operation headers with new token
        operation.setContext(({ headers = {} }: Record<string, any>) => ({
          headers: {
            ...headers,
            authorization: `Bearer ${newToken}`,
          },
        }));

        // Retry the operation
        forward(operation).subscribe({
          next: (result: FetchResult) => observer.next(result),
          error: (err: any) => observer.error(err),
          complete: () => observer.complete(),
        });
      } catch (err) {
        console.error(`[AuthRefresh] ❌ Exception during retry:`, err);
        observer.error(originalError ?? err);
      }
    }

    const subscription = forward(operation).subscribe({
      // ── Path 1: Server returned HTTP 200 with { data, errors } ──
      next: (result: FetchResult) => {
        if (
          !intercepted &&
          result.errors?.length &&
          isJwtError(result.errors as any[])
        ) {
          handleAuthRefresh(result.errors, false);
          return;
        }
        if (!intercepted) {
          observer.next(result);
        }
      },

      // ── Path 2: Network error OR Apollo's CombinedGraphQLErrors ──
      error: (error: any) => {
        if (intercepted) return;

        // Apollo wraps GraphQL errors with errorPolicy:"none" into
        // a CombinedGraphQLErrors object that has .graphQLErrors
        const combinedGqlErrors = error?.graphQLErrors;
        if (combinedGqlErrors?.length && isJwtError(combinedGqlErrors)) {
          handleAuthRefresh(error, true);
          return;
        }

        // Standard network error (401, etc.)
        if (isNetworkAuthError(error)) {
          handleAuthRefresh(error, true);
          return;
        }

        observer.error(error);
      },

      complete: () => {
        if (!intercepted) {
          observer.complete();
        }
      },
    });

    // Cleanup
    return () => subscription.unsubscribe();
  });
});

// ─── Split traffic ─────────────────────────────────────
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  from([authRefreshLink, authLink, httpLink]),
);

// ─── Cache cu type policies decente ───────────────────
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        chatMessages: {
          keyArgs: ["roomId"],
          // Simplu: înlocuiește tot la fetch nou (ca în codul tău actual)
          merge(existing = [], incoming) {
            return incoming;
          },
          // Varianta paginată (dacă vrei să o extinzi mai târziu):
          // merge(existing = [], incoming, { args }) {
          //   if (args?.before) return [...incoming, ...existing]; // prepend load-more
          //   return [...(existing || []), ...incoming];           // append new
          // },
        },
      },
    },
    ChatMessage: {
      keyFields: ["id"],
    },
    ChatRoom: {
      keyFields: ["id"],
    },
  },
});

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "none", // ✅ Let ErrorLink handle errors (default)
    },
    query: {
      fetchPolicy: "cache-first",
      errorPolicy: "none", // ✅ Let ErrorLink handle errors (default)
    },
    mutate: {
      errorPolicy: "none", // ✅ Let ErrorLink handle errors (default)
    },
  },
});

// Helper functions are exported inline above:
// schedulePreemptiveRefresh, cancelPreemptiveRefresh
// For non-exported ones, re-export here:
export { clearAuthAndRedirect, refreshAccessToken };
