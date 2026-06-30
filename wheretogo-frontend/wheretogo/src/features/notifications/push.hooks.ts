import { useMutation } from "@apollo/client/react";
import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import {
  REGISTER_DEVICE_TOKEN,
  UNREGISTER_DEVICE_TOKEN,
} from "./notifications.api";

// Configure how notifications are displayed when app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

interface PushNotificationState {
  expoPushToken: string | null;
  notification: Notifications.Notification | null;
  error: string | null;
}

export function usePushNotifications() {
  const [state, setState] = useState<PushNotificationState>({
    expoPushToken: null,
    notification: null,
    error: null,
  });

  const notificationListener = useRef<Notifications.EventSubscription | null>(
    null
  );
  const responseListener = useRef<Notifications.EventSubscription | null>(null);

  const [registerToken] = useMutation(REGISTER_DEVICE_TOKEN);
  const [unregisterToken] = useMutation(UNREGISTER_DEVICE_TOKEN);

  // Register for push notifications
  const registerForPushNotifications = useCallback(async () => {
    // Must be a physical device
    if (!Device.isDevice) {
      console.log("[Push] Must use physical device for push notifications");
      setState((prev) => ({
        ...prev,
        error: "Push notifications require a physical device",
      }));
      return null;
    }

    try {
      // Check existing permissions
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      // Request permission if not granted
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        console.log("[Push] Permission not granted");
        setState((prev) => ({
          ...prev,
          error: "Permission not granted for push notifications",
        }));
        return null;
      }

      // Get the Expo push token
      const projectId = Constants.expoConfig?.extra?.eas?.projectId;
      if (!projectId) {
        console.warn(
          "[Push] No projectId found in app.json. Push notifications disabled."
        );
        console.warn(
          "[Push] Run 'eas init' or add 'extra.eas.projectId' to app.json"
        );
        setState((prev) => ({
          ...prev,
          error: "No projectId configured. Push notifications disabled.",
        }));
        return null;
      }

      const tokenData = await Notifications.getExpoPushTokenAsync({
        projectId,
      });

      const token = tokenData.data;
      console.log("[Push] Token:", token);

      // Register token with backend
      const platform = Platform.OS === "ios" ? "IOS" : "ANDROID";

      try {
        await registerToken({
          variables: { token, platform },
        });
        console.log("[Push] ✅ Token registered successfully");
      } catch (error: any) {
        // If JWT expired, silently fail - Apollo will refresh token and
        // NotificationsContext will retry registration when auth state updates
        if (error?.message?.includes("jwt expired")) {
          console.log("[Push] ⏳ JWT expired, waiting for auto-refresh...");
          // Don't throw - let it fail silently and retry later
          return token; // Return token anyway for state
        }
        throw error; // Throw other errors
      }

      setState((prev) => ({ ...prev, expoPushToken: token, error: null }));

      // Android-specific notification channel
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#E53935",
        });
      }

      return token;
    } catch (error) {
      console.error("[Push] Registration error:", error);
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Registration failed",
      }));
      return null;
    }
  }, [registerToken]);

  // Unregister push notifications
  const unregisterPushNotifications = useCallback(async () => {
    if (state.expoPushToken) {
      try {
        await unregisterToken({
          variables: { token: state.expoPushToken },
        });
        setState((prev) => ({ ...prev, expoPushToken: null }));
      } catch (error) {
        console.error("[Push] Unregister error:", error);
      }
    }
  }, [state.expoPushToken, unregisterToken]);

  // Handle notification navigation
  const handleNotificationResponse = useCallback(
    (response: Notifications.NotificationResponse) => {
      const data = response.notification.request.content.data as {
        screen?: string;
        tripId?: number;
        locationId?: number;
        userId?: number;
      };

      console.log("[Push] Notification tapped, data:", data);

      // Navigate based on notification data
      if (data.screen) {
        switch (data.screen) {
          case "TripItinerary":
            if (data.tripId) {
              router.push({
                pathname: "/trip/itinerary",
                params: { id: String(data.tripId) },
              });
            }
            break;
          case "Location":
            if (data.locationId) {
              router.push({
                pathname: "/destination/[id]",
                params: { id: String(data.locationId) },
              });
            }
            break;
          case "Profile":
            if (data.userId) {
              router.push({
                pathname: "/(tabs)/profile",
                params: { userId: String(data.userId) },
              });
            }
            break;
          case "Notifications":
            router.push("/notifications");
            break;
          default:
            // Default to notifications screen
            router.push("/notifications");
        }
      } else {
        // If no screen specified, go to notifications
        router.push("/notifications");
      }
    },
    []
  );

  // Setup listeners on mount
  useEffect(() => {
    // Listener for notifications received while app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("[Push] Notification received:", notification);
        setState((prev) => ({ ...prev, notification }));
      });

    // Listener for when user taps on notification
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(
        handleNotificationResponse
      );

    return () => {
      if (notificationListener.current) {
        notificationListener.current.remove();
      }
      if (responseListener.current) {
        responseListener.current.remove();
      }
    };
  }, [handleNotificationResponse]);

  return {
    expoPushToken: state.expoPushToken,
    notification: state.notification,
    error: state.error,
    registerForPushNotifications,
    unregisterPushNotifications,
  };
}

// Helper to schedule a local notification (for testing)
export async function scheduleLocalNotification(
  title: string,
  body: string,
  data?: Record<string, any>,
  seconds = 1
) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data,
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds,
    },
  });
}

// Get badge count
export async function getBadgeCount(): Promise<number> {
  return await Notifications.getBadgeCountAsync();
}

// Set badge count
export async function setBadgeCount(count: number): Promise<void> {
  await Notifications.setBadgeCountAsync(count);
}

// Clear all notifications
export async function clearAllNotifications(): Promise<void> {
  await Notifications.dismissAllNotificationsAsync();
}
