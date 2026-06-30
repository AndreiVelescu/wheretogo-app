/**
 * 🪝 Auth Hooks (Apollo)
 */

import { gql } from "@apollo/client";
import { useLazyQuery, useMutation } from "@apollo/client/react";
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

type LoginMutationData = {
  login: { access_token: string; refresh_token: string; user: User };
};

type RegisterMutationData = {
  register: { access_token: string; refresh_token: string; user: User };
};

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginUserInput!) {
    login(input: $input) {
      access_token
      refresh_token
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
      refresh_token
      user {
        id
        name
        nickname
        email
        role
        avatar
      }
    }
  }
`;

const CHECK_NICKNAME_QUERY = gql`
  query CheckNickname($nickname: String!) {
    checkNicknameAvailable(nickname: $nickname)
  }
`;

export const useCheckNickname = () => {
  const [check, { data, loading }] = useLazyQuery<
    { checkNicknameAvailable: boolean },
    { nickname: string }
  >(CHECK_NICKNAME_QUERY, { fetchPolicy: "network-only" });

  return {
    checkNickname: (nickname: string) => check({ variables: { nickname } }),
    isAvailable: data?.checkNicknameAvailable ?? null,
    isChecking: loading,
  };
};

export const useLogin = () => {
  const [mutate, { loading, error }] = useMutation<
    LoginMutationData,
    { input: LoginRequest }
  >(LOGIN_MUTATION);

  const login = async (
    credentials: LoginRequest
  ): Promise<ApiResponse<LoginResponse>> => {
    const result = await mutate({ variables: { input: credentials } });
    const payload = result.data?.login;
    if (!payload) {
      return {
        success: false,
        message: "Login failed",
        statusCode: 0,
      };
    }
    return {
      success: true,
      data: {
        user: payload.user,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
      },
      message: "Login successful",
      statusCode: 200,
    };
  };

  return { login, isLoading: loading, error };
};

export const useRegister = () => {
  const [mutate, { loading, error }] = useMutation<
    RegisterMutationData,
    { input: Omit<RegisterRequest, "confirmPassword"> }
  >(REGISTER_MUTATION);

  const register = async (
    userData: RegisterRequest
  ): Promise<ApiResponse<RegisterResponse>> => {
    const { confirmPassword, ...body } = userData;
    const result = await mutate({ variables: { input: body } });
    const payload = result.data?.register;
    if (!payload) {
      return {
        success: false,
        message: "Registration failed",
        statusCode: 0,
      };
    }
    return {
      success: true,
      data: {
        user: payload.user,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
      },
      message: "Registration successful",
      statusCode: 200,
    };
  };

  return { register, isLoading: loading, error };
};

export const useGoogleLogin = () => {
  const googleLogin = async (
    _accessToken: string
  ): Promise<ApiResponse<LoginResponse>> => ({
    success: false,
    message: "Google login not implemented in GraphQL",
    statusCode: 0,
  });

  return { googleLogin, isLoading: false, error: undefined };
};

export const useForgotPassword = () => {
  const forgotPassword = async (
    _: ForgotPasswordRequest
  ): Promise<ApiResponse<ForgotPasswordResponse>> => ({
    success: false,
    message: "Forgot password not implemented in GraphQL",
    statusCode: 0,
  });

  return { forgotPassword, isLoading: false, error: undefined };
};

export const useLogout = () => {
  const logout = async (): Promise<ApiResponse<any>> => ({
    success: true,
    message: "Logged out",
    statusCode: 200,
  });

  return { logout, isLoading: false, error: undefined };
};
