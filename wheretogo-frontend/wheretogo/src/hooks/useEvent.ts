import { useCallback, useLayoutEffect, useRef } from "react";

/**
 * useEvent - Returns a stable function reference that always calls the latest version
 * Perfect for callbacks in useEffect without adding to dependencies
 * Similar to React's upcoming useEvent RFC
 */
export function useEvent<T extends (...args: any[]) => any>(handler: T): T {
  const handlerRef = useRef<T>(handler);

  // Update ref to latest handler (runs synchronously after render)
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  // Return stable callback that calls the latest handler
  return useCallback((...args: any[]) => {
    const fn = handlerRef.current;
    return fn(...args);
  }, []) as T;
}
