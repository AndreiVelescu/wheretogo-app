/**
 * 🔐 Auth API Layer
 * Toate request-urile legate de autentificare
 */

import { apolloClient } from "@/src/lib/apolloClient";
import { gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../../config/api";
import {
  ApiResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  User,
} from "./auth.types";

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

export const authApi = {
  /**
   * Login cu email & password
   */
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
  },

  /**
   * Register utilizator nou
   */
  async register(
    userData: RegisterRequest
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
  },

  /**
   * Google Login
   */
  async googleLogin(accessToken: string): Promise<ApiResponse<LoginResponse>> {
    try {
      return {
        success: false,
        message: "Google login not implemented in GraphQL",
        statusCode: 0,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Google login failed",
        statusCode: 0,
      };
    }
  },

  /**
   * Forgot password
   */
  async forgotPassword(
    email: ForgotPasswordRequest
  ): Promise<ApiResponse<ForgotPasswordResponse>> {
    try {
      return {
        success: false,
        message: "Forgot password not implemented in GraphQL",
        statusCode: 0,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Failed to send reset email",
        statusCode: 0,
      };
    }
  },

  /**
   * Logout
   */
  async logout(): Promise<ApiResponse<any>> {
    try {
      // Clear local tokens
      await Promise.all([
        AsyncStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN),
        AsyncStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN),
        AsyncStorage.removeItem(STORAGE_KEYS.USER),
      ]);

      return {
        success: true,
        message: "Logged out successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Logout failed",
        statusCode: 0,
      };
    }
  },

  /**
   * Get current user
   */
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
        message: "User fetched successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Failed to fetch user",
        statusCode: 0,
      };
    }
  },
};
