import { useMutation, useSubscription } from "@apollo/client/react";
import { useCallback, useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";
import { SET_USER_STATUS, USER_STATUS_SUBSCRIPTION } from "../graphql/chat";

export enum UserStatusEnum {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  AWAY = "AWAY",
}

export interface UserStatus {
  userId: number;
  status: UserStatusEnum;
  lastSeen?: string;
}

// Hook pentru a seta status-ul curent
export function useSetUserStatus() {
  const [setStatus] = useMutation(SET_USER_STATUS);

  const setOnline = useCallback(() => {
    console.log("👤 Setting user status: ONLINE");
    return setStatus({ variables: { status: UserStatusEnum.ONLINE } });
  }, [setStatus]);

  const setAway = useCallback(() => {
    console.log("👤 Setting user status: AWAY");
    return setStatus({ variables: { status: UserStatusEnum.AWAY } });
  }, [setStatus]);

  const setOffline = useCallback(() => {
    console.log("👤 Setting user status: OFFLINE");
    return setStatus({ variables: { status: UserStatusEnum.OFFLINE } });
  }, [setStatus]);

  return { setOnline, setAway, setOffline };
}

// Hook pentru a asculta status-ul unui user specific
export function useUserStatus(userId: number) {
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);

  const { data, error } = useSubscription(USER_STATUS_SUBSCRIPTION, {
    variables: { userId },
    onData: ({ data }) => {
      const status = data.data?.onUserStatusChange;
      if (status) {
        console.log(`👤 User ${userId} status changed:`, status);
        setUserStatus(status);
      }
    },
    onError: (error) => {
      console.error(`❌ Error subscribing to user ${userId} status:`, error);
    },
  });

  useEffect(() => {
    if (data?.onUserStatusChange) {
      setUserStatus(data.onUserStatusChange);
    }
  }, [data]);

  const isOnline = userStatus?.status === UserStatusEnum.ONLINE;
  const isAway = userStatus?.status === UserStatusEnum.AWAY;
  const isOffline = userStatus?.status === UserStatusEnum.OFFLINE;

  return {
    status: userStatus?.status,
    lastSeen: userStatus?.lastSeen,
    isOnline,
    isAway,
    isOffline,
    error,
  };
}

export function useAutoUserStatus(enabled = true) {
  const { setOnline, setAway, setOffline } = useSetUserStatus();

  useEffect(() => {
    if (!enabled) {
      return;
    }
    // onMount set online
    setOnline();

    // Subscribe la schimbările de AppState
    const subscription = AppState.addEventListener(
      "change",
      (nextAppState: AppStateStatus) => {
        if (nextAppState === "active") {
          setOnline();
        } else if (nextAppState === "background") {
          setOnline();
        } else if (nextAppState === "inactive") {
          setOffline();
        }
      }
    );

    // Set offline la unmount
    return () => {
      setOffline();
      subscription.remove();
    };
  }, [enabled, setOnline, setAway, setOffline]);
}
