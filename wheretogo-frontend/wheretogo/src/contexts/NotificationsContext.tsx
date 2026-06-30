import { useAuth } from "@/src/contexts/AuthContext";
import {
  setBadgeCount,
  usePushNotifications,
} from "@/src/features/notifications";
import React, { createContext, ReactNode, useContext, useEffect } from "react";

interface NotificationsContextType {
  expoPushToken: string | null;
  registerForPushNotifications: () => Promise<string | null>;
  unregisterPushNotifications: () => Promise<void>;
}

const NotificationsContext = createContext<NotificationsContextType | null>(
  null
);

export function useNotificationsContext() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotificationsContext must be used within NotificationsProvider"
    );
  }
  return context;
}

interface Props {
  children: ReactNode;
}

export function NotificationsProvider({ children }: Props) {
  const { isAuthenticated } = useAuth();
  const {
    expoPushToken,
    registerForPushNotifications,
    unregisterPushNotifications,
  } = usePushNotifications();

  // Auto-register for push notifications when user logs in
  useEffect(() => {
    if (isAuthenticated && !expoPushToken) {
      registerForPushNotifications();
    }
  }, [isAuthenticated, expoPushToken, registerForPushNotifications]);

  // Unregister when user logs out
  useEffect(() => {
    if (!isAuthenticated && expoPushToken) {
      unregisterPushNotifications();
      // Clear badge
      setBadgeCount(0);
    }
  }, [isAuthenticated, expoPushToken, unregisterPushNotifications]);

  return (
    <NotificationsContext.Provider
      value={{
        expoPushToken,
        registerForPushNotifications,
        unregisterPushNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}
