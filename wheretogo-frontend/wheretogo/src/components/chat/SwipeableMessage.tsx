import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface SwipeableMessageProps {
  children: React.ReactNode;
  onSwipeReply: () => void;
  isMyMessage: boolean;
  align: "left" | "right";
}

export default function SwipeableMessage({
  children,
  onSwipeReply,
  isMyMessage,
  align,
}: SwipeableMessageProps) {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);
  const { colors } = useAppTheme();

  const SWIPE_THRESHOLD = 60;
  const MAX_TRANSLATE = 80;
  const HORIZONTAL_ACTIVATION_OFFSET = 18;
  const VERTICAL_FAIL_OFFSET = 10;

  const panGesture = Gesture.Pan()
    .activeOffsetX([
      -HORIZONTAL_ACTIVATION_OFFSET,
      HORIZONTAL_ACTIVATION_OFFSET,
    ])
    .failOffsetY([-VERTICAL_FAIL_OFFSET, VERTICAL_FAIL_OFFSET])
    .onUpdate((event) => {
      // Swipe right for left messages, swipe left for right messages
      const direction = isMyMessage ? -1 : 1;
      const translation = event.translationX * direction;

      if (translation > 0) {
        const clampedTranslation = Math.min(translation, MAX_TRANSLATE);
        translateX.value = clampedTranslation * direction;
        opacity.value = Math.min(clampedTranslation / SWIPE_THRESHOLD, 1);
      }
    })
    .onEnd(() => {
      if (Math.abs(translateX.value) >= SWIPE_THRESHOLD) {
        runOnJS(onSwipeReply)();
      }
      translateX.value = withSpring(0);
      opacity.value = withSpring(0);
    })
    .onFinalize(() => {
      translateX.value = withSpring(0);
      opacity.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View
      style={[
        styles.container,
        align === "right" ? styles.containerRight : styles.containerLeft,
      ]}
    >
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[
            styles.messageWrapper,
            align === "right"
              ? styles.messageWrapperRight
              : styles.messageWrapperLeft,
            animatedStyle,
          ]}
        >
          {children}
        </Animated.View>
      </GestureDetector>

      {/* Reply Icon */}
      <Animated.View
        style={[
          styles.replyIcon,
          isMyMessage ? styles.replyIconRight : styles.replyIconLeft,
          iconAnimatedStyle,
        ]}
      >
        <Ionicons name="arrow-undo" size={22} color={colors.textMuted} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  containerLeft: {
    alignSelf: "flex-start",
  },
  containerRight: {
    alignSelf: "flex-end",
  },
  messageWrapper: {
    maxWidth: "100%",
  },
  messageWrapperLeft: {
    alignSelf: "flex-start",
  },
  messageWrapperRight: {
    alignSelf: "flex-end",
  },
  replyIcon: {
    position: "absolute",
    top: "50%",
    marginTop: -11,
  },
  replyIconLeft: {
    left: 10,
  },
  replyIconRight: {
    right: 10,
  },
});
