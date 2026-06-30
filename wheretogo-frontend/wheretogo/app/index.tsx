import { useEffect } from "react";
import { router } from "expo-router";
import CustomSplashScreen from "@/components/SplashScreen";

export default function IndexScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return <CustomSplashScreen />;
}
