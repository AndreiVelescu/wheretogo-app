import * as Network from "expo-network";
import { Platform } from "react-native";

const isDev = __DEV__;

const getLocalIPAddress = async (): Promise<string> => {
  try {
    const ip = await Network.getIpAddressAsync();
    console.log("📱 Device IP detected:", ip);
    return ip || "172.20.10.2";
  } catch (error) {
    console.warn("Nu s-a putut obține IP-ul automat:", error);
    return "172.20.10.2";
  }
};

const getBaseURL = async (): Promise<string> => {
  if (isDev) {
    const port = process.env.EXPO_PUBLIC_API_PORT || "8080";
    const envBaseUrl =
      Platform.OS === "ios"
        ? process.env.EXPO_PUBLIC_API_BASE_URL_IOS
        : process.env.EXPO_PUBLIC_API_BASE_URL_ANDROID;

    if (envBaseUrl) {
      return envBaseUrl;
    }

    const localIP = await getLocalIPAddress();
    return `http://${localIP}:${port}`;
  }
  return (
    process.env.EXPO_PUBLIC_API_BASE_URL_PRODUCTION ||
    "https://your-production-api.com"
  );
};
const getBaseURLWS = async (): Promise<string> => {
  if (isDev) {
    const port = process.env.EXPO_PUBLIC_API_PORT || "8080";
    const envBaseUrl =
      Platform.OS === "ios"
        ? process.env.WS_EXPO_PUBLIC_API_BASE_URL_IOS
        : process.env.WS_EXPO_PUBLIC_API_BASE_URL_ANDROID;

    if (envBaseUrl) {
      return envBaseUrl;
    }

    const localIP = await getLocalIPAddress();
    return `ws://${localIP}:${port}`;
  }
  return (
    process.env.EXPO_PUBLIC_API_BASE_URL_PRODUCTION ||
    "https://your-production-api.com"
  );
};

const API_VERSION = process.env.EXPO_PUBLIC_API_VERSION || "v1";
const getInitialBaseUrl = (): string => {
  if (isDev) {
    return Platform.OS === "ios"
      ? process.env.EXPO_PUBLIC_API_BASE_URL_IOS || ""
      : process.env.EXPO_PUBLIC_API_BASE_URL_ANDROID || "";
  }
  return process.env.EXPO_PUBLIC_API_BASE_URL_PRODUCTION || "";
};

let BASE_URL = getInitialBaseUrl();
let WS_BASE_URL = getInitialBaseUrl();

export const initializeAPI = async () => {
  BASE_URL = await getBaseURL();
  console.log("🌐 API initialized with BASE_URL:", BASE_URL);
  return BASE_URL;
};

initializeAPI();

export const API_CONFIG = {
  get BASE_URL() {
    return BASE_URL; // Getter care returnează valoarea curentă
  },
  async getBaseUrl() {
    return await getBaseURL();
  },
  get WS_BASE_URL() {
    return WS_BASE_URL; // Getter care returnează valoarea curentă pentru WS
  },
  async getBaseUrlWS() {
    return await getBaseURLWS();
  },
  ENDPOINTS: {
    AUTH: {
      LOGIN: `/api/${API_VERSION}/users/login`,
      REGISTER: `/api/${API_VERSION}/users/register`,
      GOOGLE_LOGIN: `/api/${API_VERSION}/users/auth/google`,
      FORGOT_PASSWORD: `/api/${API_VERSION}/auth/forgot-password`,
      REFRESH_TOKEN: `/api/${API_VERSION}/auth/refresh`,
      LOGOUT: `/api/${API_VERSION}/auth/logout`,
      ME: `/api/${API_VERSION}/users/profile/me`,
    },
    USERS: {
      PROFILE: `/api/${API_VERSION}/users/profile/me`,
      UPDATE_PROFILE: `/api/${API_VERSION}/users/profile`,
      FAVORITES: `/api/${API_VERSION}/users/favorites/me`,
      ADD_FAVORITE: `/api/${API_VERSION}/users/favorites`,
      REMOVE_FAVORITE: `/api/${API_VERSION}/users/favorites`,
      BOOKINGS: `/api/${API_VERSION}/users/bookings`,
    },
    LOCATIONS: {
      BASE: `/api/${API_VERSION}/locations`,
      SEARCH: `/api/${API_VERSION}/locations/search`,
      FAVORITES: `/api/${API_VERSION}/locations/favorites`,
    },
    BOOKINGS: {
      BASE: `/api/${API_VERSION}/bookings`,
      BY_USER: `/api/${API_VERSION}/bookings/my-bookings`,
    },
    TRIPS: {
      GENERATE: `/api/${API_VERSION}/trip`,
    },
  },
  TIMEOUT: parseInt(process.env.EXPO_PUBLIC_API_TIMEOUT || "10000"),
};

export const API_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
export const STORAGE_KEYS = {
  ACCESS_TOKEN: process.env.EXPO_PUBLIC_ACCESS_TOKEN_KEY || "accessToken",
  REFRESH_TOKEN: process.env.EXPO_PUBLIC_REFRESH_TOKEN_KEY || "refreshToken",
  USER: process.env.EXPO_PUBLIC_USER_KEY || "user",
};
