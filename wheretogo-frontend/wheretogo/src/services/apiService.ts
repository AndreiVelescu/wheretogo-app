import { gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../config/api";
import { apolloClient } from "../lib/apolloClient";
import {
  ApiResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RegisterRequest,
  RegisterResponse,
  User,
} from "../types/auth";

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginUserInput!) {
    login(input: $input) {
      access_token
      user {
        id
        name
        email
        role
        avatar
      }
    }
  }
`;

const REGISTER_MUTATION = gql`
  mutation Register($input: CreateUserInput!) {
    register(input: $input) {
      access_token
      user {
        id
        name
        email
        role
        avatar
      }
    }
  }
`;

const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      email
      avatar
      role
    }
  }
`;

const GENERATE_TRIP_MUTATION = gql`
  mutation GenerateTrip($input: GenerateTripInput!) {
    generateTrip(input: $input) {
      id
      ownerId
      title
      description
      status
      startDate
      endDate
      city
      country
      isPublic
      totalBudget
      currency
      createdAt
      updatedAt
      _count {
        days
        collaborators
      }
      owner {
        id
        name
        email
        password
        role
        provider
        avatar
        createdAt
      }
      days {
        id
        dayNumber
        date
        notes
        stops {
          id
          order
          customName
          address
          lat
          lng
          arrivalTime
          departureTime
          transportMode
          estimatedCost
          notes
          location {
            id
            name
            type
            rating
            photos
            googleUrl
            address
            lat
            lng
          }
        }
      }
    }
  }
`;

class ApiService {
  private derivePreferredTypes(preferences: any): string[] {
    const explicitTypes = Array.isArray(preferences?.types)
      ? preferences.types
      : [];
    const inferredByInterest: Record<string, string[]> = {
      culture: ["tourist_attraction", "park"],
      food: ["restaurant", "cafe"],
      nature: ["park"],
      nightlife: ["bar"],
      relaxation: ["cafe", "park"],
      work: ["cafe"],
      date: ["restaurant", "cafe"],
      social: ["bar", "cafe"],
    };

    const inferred = Array.isArray(preferences?.interests)
      ? preferences.interests.flatMap(
          (interest: string) => inferredByInterest[interest] || [],
        )
      : [];

    return Array.from(new Set([...explicitTypes, ...inferred].filter(Boolean)));
  }

  private async clearTokens(): Promise<void> {
    await Promise.all([
      AsyncStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN),
      AsyncStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN),
      AsyncStorage.removeItem(STORAGE_KEYS.USER),
    ]);
  }

  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    try {
      const result = await apolloClient.mutate<{
        login: { access_token: string; user: User };
      }>({
        mutation: LOGIN_MUTATION,
        variables: { input: credentials },
      });

      if (!result.data?.login) {
        throw new Error("Login failed");
      }

      return {
        success: true,
        data: {
          user: result.data.login.user,
          accessToken: result.data.login.access_token,
          refreshToken: "",
        },
        message: "Login successful",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Login failed",
        statusCode: 0,
      };
    }
  }

  async register(
    userData: RegisterRequest,
  ): Promise<ApiResponse<RegisterResponse>> {
    try {
      const { confirmPassword, ...body } = userData;
      const result = await apolloClient.mutate<{
        register: { access_token: string; user: User };
      }>({
        mutation: REGISTER_MUTATION,
        variables: { input: body },
      });

      if (!result.data?.register) {
        throw new Error("Registration failed");
      }

      return {
        success: true,
        data: {
          user: result.data.register.user,
          accessToken: result.data.register.access_token,
          refreshToken: "",
        },
        message: "Registration successful",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Registration failed",
        statusCode: 0,
      };
    }
  }

  async googleLogin(idToken: string): Promise<ApiResponse<LoginResponse>> {
    return {
      success: false,
      message: "Google login not implemented in GraphQL",
      statusCode: 0,
    };
  }

  async forgotPassword(
    email: ForgotPasswordRequest,
  ): Promise<ApiResponse<ForgotPasswordResponse>> {
    return {
      success: false,
      message: "Forgot password not implemented in GraphQL",
      statusCode: 0,
    };
  }

  async refreshToken(
    refreshToken: RefreshTokenRequest,
  ): Promise<ApiResponse<RefreshTokenResponse>> {
    return {
      success: false,
      message: "Refresh token not implemented in GraphQL",
      statusCode: 0,
    };
  }

  async logout(): Promise<ApiResponse<null>> {
    await this.clearTokens();
    return {
      success: true,
      data: null,
      message: "Logout successful",
      statusCode: 200,
    };
  }

  async getCurrentUser(): Promise<ApiResponse<User>> {
    try {
      const result = await apolloClient.query<{ me: User }>({
        query: ME_QUERY,
        fetchPolicy: "network-only",
      });
      if (!result.data?.me) {
        throw new Error("Failed to fetch user");
      }
      return {
        success: true,
        data: result.data.me,
        message: "User loaded",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Failed to fetch user",
        statusCode: 0,
      };
    }
  }

  async generateTrip(preferences: any): Promise<ApiResponse<any>> {
    try {
      const destinationMap: Record<
        string,
        { city: string; displayCity: string; country: string; currency: string }
      > = {
        chisinau: {
          city: "Chisinau",
          displayCity: "Chișinău",
          country: "Moldova",
          currency: "MDL",
        },
        bucharest: {
          city: "Bucharest",
          displayCity: "București",
          country: "România",
          currency: "RON",
        },
        kiev: {
          city: "Kiev",
          displayCity: "Kiev",
          country: "Ucraina",
          currency: "UAH",
        },
        sofia: {
          city: "Sofia",
          displayCity: "Sofia",
          country: "Bulgaria",
          currency: "BGN",
        },
        budapest: {
          city: "Budapest",
          displayCity: "Budapesta",
          country: "Ungaria",
          currency: "HUF",
        },
        prague: {
          city: "Prague",
          displayCity: "Praga",
          country: "Cehia",
          currency: "CZK",
        },
      };

      const destination = destinationMap[preferences?.destination] || {
        city: preferences?.destination || "",
        displayCity: preferences?.destination || "",
        country: "",
        currency: "MDL",
      };

      const startDate = preferences?.startDate || null;
      const endDate = preferences?.endDate || null;
      const daysCount =
        startDate && endDate
          ? Math.max(
              1,
              Math.ceil(
                (new Date(endDate).getTime() - new Date(startDate).getTime()) /
                  (1000 * 60 * 60 * 24),
              ) + 1,
            )
          : null;

      const maxStopsPerDay =
        preferences?.maxStopsPerDay ??
        (preferences?.transportPreference === "walking"
          ? 3
          : preferences?.transportPreference === "public"
            ? 4
            : preferences?.transportPreference === "car"
              ? 5
              : 4);

      const budgetMap: Record<string, number> = {
        low: 40,
        medium: 80,
        high: 150,
      };

      const totalBudget = preferences?.totalBudget
        ? Number(preferences.totalBudget)
        : daysCount
          ? (budgetMap[preferences?.budget] || 80) *
            daysCount *
            (preferences?.groupSize || 1)
          : null;

      const input: Record<string, any> = {
        city: destination.city || null,
        currency: destination.currency || null,
        daysCount,
        maxStopsPerDay,
        startDate,
        title:
          preferences?.title ||
          (destination.displayCity
            ? `Trip în ${destination.displayCity}`
            : null),
        totalBudget,
      };

      const derivedTypes = this.derivePreferredTypes(preferences);

      if (derivedTypes.length) {
        input.types = derivedTypes;
      }

      if (preferences?.vibes?.length) {
        input.vibes = preferences.vibes;
      }

      if (preferences?.priceRanges?.length) {
        input.priceRanges = preferences.priceRanges;
      }

      if (typeof preferences?.minRating === "number") {
        input.minRating = preferences.minRating;
      }

      if (!input.city || !input.startDate || !input.daysCount) {
        return {
          success: false,
          message: "Trip input invalid: city/startDate/daysCount are required",
          statusCode: 0,
        };
      }

      const cityCandidates = Array.from(
        new Set(
          [
            destination.city,
            destination.displayCity,
            preferences?.destination,
            destination.city?.toLowerCase?.(),
            destination.displayCity?.toLowerCase?.(),
          ].filter(Boolean),
        ),
      ) as string[];

      let lastError: string | null = null;

      for (const city of cityCandidates) {
        try {
          const result = await apolloClient.mutate<{ generateTrip: any }>({
            mutation: GENERATE_TRIP_MUTATION,
            variables: { input: { ...input, city } },
          });

          if (result.error) {
            const msg = result.error.message || "Trip generation failed";
            if (msg.includes("No locations found for this city")) {
              lastError = msg;
              continue;
            }
            return {
              success: false,
              message: msg,
              statusCode: 0,
            };
          }

          if (result.data?.generateTrip) {
            return {
              success: true,
              data: result.data.generateTrip,
              message: "Trip generated successfully",
              statusCode: 200,
            };
          }

          lastError = "Trip generation failed";
        } catch (err: any) {
          const gqlMessage = Array.isArray(err?.graphQLErrors)
            ? err.graphQLErrors
                .map((e: any) => e?.message)
                .filter(Boolean)
                .join(" | ")
            : "";
          if (gqlMessage.includes("No locations found for this city")) {
            lastError = gqlMessage;
            continue;
          }
          throw err;
        }
      }

      return {
        success: false,
        message: lastError || "Trip generation failed",
        statusCode: 0,
      };
    } catch (error: any) {
      const gqlMessages = Array.isArray(error?.graphQLErrors)
        ? error.graphQLErrors
            .map((err: any) => err?.message)
            .filter(Boolean)
            .join(" | ")
        : "";

      return {
        success: false,
        message:
          gqlMessages ||
          error?.networkError?.message ||
          error?.message ||
          "Trip generation failed",
        statusCode: 0,
      };
    }
  }
}

export const apiService = new ApiService();
