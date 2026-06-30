import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  StatusBar,
  Dimensions,
} from "react-native";
import Mascot from "./Mascot";
import Logo from "./Logo";

const { width, height } = Dimensions.get("window");

interface SplashScreenProps {
  onAnimationFinish?: () => void;
}

export default function CustomSplashScreen({
  onAnimationFinish,
}: SplashScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Animație simplă pentru mascotă și logo
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 60,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // După animație, doar se termină - navigarea se face din index.tsx
      if (onAnimationFinish) {
        setTimeout(() => {
          onAnimationFinish();
        }, 1000);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#EC2424" />

      {/* Mascota în centru */}
      <Animated.View
        style={[
          styles.mascotContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Mascot
          width={Math.min(width * 0.6, 200)}
          height={Math.min(height * 0.4, 270)}
        />
      </Animated.View>

      {/* Logo în partea de jos */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Logo
          width={Math.min(width * 0.7, 230)}
          height={Math.min(width * 0.7 * 0.126, 29)}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EC2424",
  },
  mascotContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: height * 0.05,
  },
  mascot: {
    width: Math.min(width * 0.6, 200),
    height: Math.min(height * 0.4, 270),
    maxWidth: 200,
    maxHeight: 270,
  },
  logoContainer: {
    position: "absolute",
    bottom: height * 0.12,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  logo: {
    width: Math.min(width * 0.7, 230),
    height: Math.min(width * 0.7 * 0.126, 29),
    maxWidth: 230,
  },
});
