import Toast from "react-native-toast-message";

export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number,
    public details?: any
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NetworkError extends AppError {
  constructor(message = "Network connection error") {
    super(message, "NETWORK_ERROR", 0);
    this.name = "NetworkError";
  }
}

export class AuthError extends AppError {
  constructor(message = "Authentication error") {
    super(message, "AUTH_ERROR", 401);
    this.name = "AuthError";
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: any) {
    super(message, "VALIDATION_ERROR", 400, details);
    this.name = "ValidationError";
  }
}

interface ErrorHandlerOptions {
  showToast?: boolean;
  logToConsole?: boolean;
  logToAnalytics?: boolean;
  fallbackMessage?: string;
}

export const handleError = (
  error: unknown,
  options: ErrorHandlerOptions = {}
) => {
  const {
    showToast = true,
    logToConsole = true,
    logToAnalytics = false,
    fallbackMessage = "An unexpected error occurred",
  } = options;

  let errorMessage = fallbackMessage;
  let errorTitle = "Error";

  // Handle different error types
  if (error instanceof AppError) {
    errorMessage = error.message;
    errorTitle = error.name.replace("Error", " Error");
  } else if (
    error &&
    typeof error === "object" &&
    ("graphQLErrors" in error || "networkError" in error)
  ) {
    // Apollo Client error
    const apolloError = error as any;
    if (apolloError.networkError) {
      errorTitle = "Network Error";
      errorMessage = "Unable to connect to server";
    } else if (apolloError.graphQLErrors?.length > 0) {
      errorTitle = "Server Error";
      errorMessage = apolloError.graphQLErrors[0].message;
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  // Show toast notification
  if (showToast) {
    Toast.show({
      type: "error",
      text1: errorTitle,
      text2: errorMessage,
      position: "top",
      visibilityTime: 4000,
    });
  }

  // Log to console in development
  if (logToConsole && __DEV__) {
    console.error(`[${errorTitle}]:`, error);
  }

  // TODO: Log to analytics service (Sentry, Firebase, etc.)
  if (logToAnalytics) {
    // logToAnalyticsService(error);
  }

  return errorMessage;
};

export const handleSuccess = (message: string, title = "Success") => {
  Toast.show({
    type: "success",
    text1: title,
    text2: message,
    position: "top",
    visibilityTime: 3000,
  });
};

export const handleInfo = (message: string, title = "Info") => {
  Toast.show({
    type: "info",
    text1: title,
    text2: message,
    position: "top",
    visibilityTime: 3000,
  });
};

// Helper to convert unknown errors to AppError
export const toAppError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message);
  }

  return new AppError("An unknown error occurred");
};
