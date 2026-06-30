import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { STORAGE_KEYS } from "../config/api";
import {
  AuthContextType,
  LoginRequest,
  RegisterRequest,
  useGoogleLogin,
  useLogin,
  User,
  useRegister,
} from "../features/auth";
import { useCurrentUser } from "../features/user";
import { apolloClient } from "../lib/apolloClient";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { login: loginMutate } = useLogin();
  const { register: registerMutate } = useRegister();
  const { googleLogin: googleLoginMutate } = useGoogleLogin();

  const {
    refetch: refetchUser,
    data: currentUserData,
    error: currentUserError,
  } = useCurrentUser({
    enabled: !!accessToken, // Doar dacă avem token
  });

  // Effect pentru handling current user data
  useEffect(() => {
    console.log("👤 currentUserData changed:", {
      success: currentUserData?.success,
      hasData: !!currentUserData?.data,
      userId: currentUserData?.data?.id,
    });

    if (currentUserData?.success && currentUserData.data) {
      console.log("👤 Setting user from currentUserData");
      setUser(currentUserData.data);
      saveUserToStorage(currentUserData.data);
    }
  }, [currentUserData]);

  // Effect pentru handling current user errors
  useEffect(() => {
    console.log("⚠️ currentUserError changed:", {
      hasError: !!currentUserError,
      error: currentUserError,
      hasAccessToken: !!accessToken,
    });

    // Nu mai facem logout automat aici - lăsăm Apollo Client să gestioneze refresh-ul
    // Doar logăm eroarea pentru debugging
    if (currentUserError && accessToken) {
      console.warn(
        "⚠️ Current user query error (Apollo will handle refresh):",
        currentUserError.message
      );
    }
  }, [currentUserError, accessToken]);

  // Debug effect pentru a monitoriza state changes
  useEffect(() => {
    console.log("🔍 AuthContext state changed:", {
      hasUser: !!user,
      hasAccessToken: !!accessToken,
      hasRefreshToken: !!refreshToken, // Assuming refresh token is stored similarly
      isAuthenticated: !!user && !!accessToken,
      userId: user?.id,
      isLoading,
    });
  }, [user, accessToken, refreshToken, isLoading]);

  // Initialize auth state la startup
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      setIsLoading(true);

      const [
        storedToken,
        storedUser,
        storedRefreshToken,
        legacyAccess,
        legacyRefresh,
      ] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN),
        AsyncStorage.getItem(STORAGE_KEYS.USER),
        AsyncStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN),
        AsyncStorage.getItem("access_token"),
        AsyncStorage.getItem("refresh_token"),
      ]);

      const resolvedToken = storedToken ?? legacyAccess;
      const refreshToken = storedRefreshToken ?? legacyRefresh;

      if (!storedToken && legacyAccess) {
        await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, legacyAccess);
      }
      if (!storedRefreshToken && legacyRefresh) {
        await AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, legacyRefresh);
      }

      if (resolvedToken && storedUser && refreshToken) {
        setAccessToken(resolvedToken);
        setRefreshToken(refreshToken); 
        setUser(JSON.parse(storedUser));

        refetchUser();
      }
    } catch (error) {
      console.error("Error initializing auth:", error);
     
      if (error instanceof SyntaxError) {
        await clearAuthData();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const saveTokenToStorage = async (token: string) => {
    await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  };

  const saveRefreshTokenToStorage = async (refreshToken: string) => {
    await AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  };

  const saveUserToStorage = async (userData: User) => {
    await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
  };

  const clearAuthData = async () => {
    console.log("⚠️ AuthContext: clearAuthData called!");
    console.trace("Clear auth data stack trace");

    await Promise.all([
      AsyncStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN),
      AsyncStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN),
      AsyncStorage.removeItem(STORAGE_KEYS.USER),
    ]);

    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);

    await apolloClient.clearStore();
  };

  const login = async (credentials: LoginRequest): Promise<void> => {
    try {
      console.log("🔐 AuthContext: Starting login...");
      const response = await loginMutate(credentials);

      console.log("🔐 AuthContext: Login response:", {
        success: response.success,
        hasData: !!response.data,
      });

      if (response.success && response.data) {
        const {
          user: userData,
          accessToken: token,
          refreshToken,
        } = response.data;

        console.log("🔐 AuthContext: Extracted data:", {
          hasUser: !!userData,
          hasToken: !!token,
          hasRefreshToken: !!refreshToken,
          refreshTokenLength: refreshToken?.length,
          userId: userData?.id,
          userEmail: userData?.email,
        });

        setUser(userData);
        setAccessToken(token);
        setRefreshToken(refreshToken);

        console.log("🔐 AuthContext: State updated, saving to storage...");

        if (refreshToken) {
          await Promise.all([
            saveTokenToStorage(token),
            saveRefreshTokenToStorage(refreshToken),
            saveUserToStorage(userData),
          ]);
        } else {
          console.warn(
            "⚠️ No refresh token in response, only saving access token"
          );
          await Promise.all([
            saveTokenToStorage(token),
            saveUserToStorage(userData),
          ]);
        }

        console.log("✅ AuthContext: Login complete!");
      } else {
        console.error(
          "❌ AuthContext: Login response not successful:",
          response.message
        );
        throw new Error(response.message || "Login failed");
      }
    } catch (error: any) {
      console.error("❌ AuthContext: Login error:", error);
      throw new Error(error.message || "Login failed");
    }
  };

  const register = async (userData: RegisterRequest): Promise<void> => {
    try {
      if (userData.password !== userData.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const response = await registerMutate(userData);

      if (response.success && response.data) {
        const {
          user: newUser,
          accessToken: token,
          refreshToken,
        } = response.data;

        setUser(newUser);
        setAccessToken(token);
        setRefreshToken(refreshToken);

        // Save to storage
        await Promise.all([
          saveTokenToStorage(token),
          saveRefreshTokenToStorage(refreshToken),
          saveUserToStorage(newUser),
        ]);
      } else {
        throw new Error(response.message || "Registration failed");
      }
    } catch (error: any) {
      throw new Error(error.message || "Registration failed");
    }
  };

  const googleLogin = async (accessToken: string): Promise<void> => {
    try {
      const response = await googleLoginMutate(accessToken);

      if (response.success && response.data) {
        const {
          user: userData,
          accessToken: token,
          refreshToken,
        } = response.data;

        setUser(userData);
        setAccessToken(token);

        await Promise.all([
          saveTokenToStorage(token),
          saveRefreshTokenToStorage(refreshToken),
          saveUserToStorage(userData),
        ]);
      } else {
        throw new Error(response.message || "Google login failed");
      }
    } catch (error: any) {
      throw new Error(error.message || "Google login failed");
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await clearAuthData();
    } catch (error) {
      throw new Error("Logout failed");
    }
  };

  const refreshAuth = async (): Promise<void> => {
    try {
      const refreshToken = await AsyncStorage.getItem(
        STORAGE_KEYS.REFRESH_TOKEN
      );

      if (!refreshToken) {
        throw new Error("No refresh token found");
      }

      // const response = await apiService.refreshToken({ refreshToken });
      // only refetch user data
      await refetchUser();
    } catch (error) {
      console.error("Refresh auth failed:", error);
      await clearAuthData();
    }
  };

  const contextValue: AuthContextType = {
    user,
    accessToken,
    isAuthenticated: !!user && !!accessToken,
    isLoading,
    login,
    register,
    googleLogin,
    logout,
    refreshAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
