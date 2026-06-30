import NetInfo from "@react-native-community/netinfo";
import { create } from "zustand";

interface NetworkState {
  isConnected: boolean;
  isInternetReachable: boolean | null;
  type: string | null;

  // Actions
  setNetworkState: (state: Partial<NetworkState>) => void;
}

export const useNetworkStore = create<NetworkState>((set) => ({
  isConnected: true,
  isInternetReachable: null,
  type: null,

  setNetworkState: (newState) => set(newState),
}));

// Initialize network listener
NetInfo.addEventListener((state) => {
  useNetworkStore.getState().setNetworkState({
    isConnected: state.isConnected ?? false,
    isInternetReachable: state.isInternetReachable,
    type: state.type,
  });
});

// Fetch initial state
NetInfo.fetch().then((state) => {
  useNetworkStore.getState().setNetworkState({
    isConnected: state.isConnected ?? false,
    isInternetReachable: state.isInternetReachable,
    type: state.type,
  });
});

// Selectors
export const useIsOnline = () => useNetworkStore((state) => state.isConnected);
export const useNetworkType = () => useNetworkStore((state) => state.type);
