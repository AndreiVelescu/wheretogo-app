import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError, AxiosInstance } from "axios";
import { API_CONFIG, API_HEADERS, STORAGE_KEYS } from "../config/api";
import { ApiResponse } from "../types/auth";

// Creăm apiClient cu baseURL gol inițial, va fi setat după initializeAPI
const apiClient: AxiosInstance = axios.create({
  timeout: API_CONFIG.TIMEOUT,
  headers: API_HEADERS,
});

// Setăm baseURL după ce API_CONFIG.BASE_URL este inițializat
setTimeout(() => {
  apiClient.defaults.baseURL = API_CONFIG.BASE_URL;
  console.log("🔗 apiClient baseURL set to:", API_CONFIG.BASE_URL);
}, 100);

apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const handleTokenRefresh = async (): Promise<void> => {
  const refreshToken = await AsyncStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  if (!refreshToken) throw new Error("No refresh token available");

  console.log("🔄 Token refresh placeholder — implement when backend ready");
  // Exemplu (de activat când backendul e gata):
  // const { data } = await apiClient.post('/auth/refresh', { refreshToken });
  // await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
};

const clearTokens = async (): Promise<void> => {
  await Promise.all([
    AsyncStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN),
    AsyncStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN),
    AsyncStorage.removeItem(STORAGE_KEYS.USER),
  ]);
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      const url = error.config?.url || "";
      const isAuthEndpoint =
        url.includes("/login") ||
        url.includes("/register") ||
        url.includes("/forgot-password");

      if (!isAuthEndpoint) {
        try {
          await handleTokenRefresh();
          if (error.config) {
            // retry request cu noul token
            return apiClient.request(error.config);
          }
        } catch {
          await clearTokens();
          throw formatError(error);
        }
      }
    }

    throw formatError(error);
  }
);

const formatError = (error: AxiosError): ApiResponse<never> => {
  const response = error.response;
  return {
    success: false,
    message:
      (response?.data as any)?.message ||
      error.message ||
      "A apărut o eroare de rețea.",
    statusCode: response?.status || 0,
  };
};

export default apiClient;
