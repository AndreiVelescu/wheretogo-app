import { useAppTheme } from "@/src/contexts/ThemeContext";
import { normalizeRemoteImageUrl } from "@/src/utils/imageUtils";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import type { PostMedia } from "../feed.types";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CONTROLS_AUTO_HIDE_DELAY = 2500;

let activeFeedVideoId: string | null = null;
let globalFeedVideoMuted = true;
const videoListeners = new Set<(videoId: string | null) => void>();
const muteListeners = new Set<(isMuted: boolean) => void>();

function notifyActiveVideoChange(videoId: string | null) {
  activeFeedVideoId = videoId;
  for (const listener of videoListeners) {
    listener(videoId);
  }
}

function notifyGlobalMuteChange(isMuted: boolean) {
  globalFeedVideoMuted = isMuted;
  for (const listener of muteListeners) {
    listener(isMuted);
  }
}

interface MediaSlideProps {
  item: PostMedia;
  height: number;
  backgroundColor: string;
  isActive: boolean;
  shouldAutoplay: boolean;
}

interface VideoSlideProps {
  url: string;
  height: number;
  backgroundColor: string;
  shouldAutoplay: boolean;
}

const VideoSlide = React.memo(function VideoSlide({
  url,
  height,
  backgroundColor,
  shouldAutoplay,
}: VideoSlideProps) {
  const videoId = url;
  const player = useVideoPlayer(url, (videoPlayer) => {
    videoPlayer.loop = true;
    videoPlayer.muted = globalFeedVideoMuted;
  });
  const hideControlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(globalFeedVideoMuted);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const clearHideControlsTimeout = useCallback(() => {
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
      hideControlsTimeoutRef.current = null;
    }
  }, []);

  const scheduleControlsAutoHide = useCallback(() => {
    clearHideControlsTimeout();

    if (!isPlaying || !shouldAutoplay || isFullscreen) {
      return;
    }

    hideControlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, CONTROLS_AUTO_HIDE_DELAY);
  }, [clearHideControlsTimeout, isFullscreen, isPlaying, shouldAutoplay]);

  useEffect(() => {
    player.muted = isMuted;
  }, [isMuted, player]);

  useEffect(() => {
    const handleGlobalMuteChange = (nextMuted: boolean) => {
      setIsMuted(nextMuted);
    };

    muteListeners.add(handleGlobalMuteChange);
    return () => {
      muteListeners.delete(handleGlobalMuteChange);
    };
  }, []);

  useEffect(() => {
    const handleActiveVideoChange = (nextVideoId: string | null) => {
      if (nextVideoId !== videoId) {
        player.pause();
        setIsPlaying(false);
      }
    };

    videoListeners.add(handleActiveVideoChange);
    return () => {
      clearHideControlsTimeout();
      videoListeners.delete(handleActiveVideoChange);
      if (activeFeedVideoId === videoId) {
        notifyActiveVideoChange(null);
      }
    };
  }, [clearHideControlsTimeout, player, videoId]);

  useEffect(() => {
    if (!shouldAutoplay) {
      player.pause();
      setIsPlaying(false);
      setShowControls(true);
      clearHideControlsTimeout();
      if (activeFeedVideoId === videoId) {
        notifyActiveVideoChange(null);
      }

      return;
    }

    setIsMuted(globalFeedVideoMuted);
    setShowControls(true);
    player.muted = globalFeedVideoMuted;
    notifyActiveVideoChange(videoId);
    player.play();
    setIsPlaying(true);
  }, [clearHideControlsTimeout, player, shouldAutoplay, videoId]);

  useEffect(() => {
    if (!isPlaying || !showControls) {
      clearHideControlsTimeout();
      return;
    }

    scheduleControlsAutoHide();
    return clearHideControlsTimeout;
  }, [
    clearHideControlsTimeout,
    isPlaying,
    scheduleControlsAutoHide,
    showControls,
  ]);

  const handleTogglePlayback = useCallback(() => {
    if (!shouldAutoplay) {
      return;
    }

    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
      setShowControls(true);
      clearHideControlsTimeout();
      if (activeFeedVideoId === videoId) {
        notifyActiveVideoChange(null);
      }
      return;
    }

    notifyActiveVideoChange(videoId);
    player.play();
    setIsPlaying(true);
    setShowControls(true);
    scheduleControlsAutoHide();
  }, [
    clearHideControlsTimeout,
    isPlaying,
    player,
    scheduleControlsAutoHide,
    shouldAutoplay,
    videoId,
  ]);

  const handleToggleMute = useCallback(() => {
    notifyGlobalMuteChange(!globalFeedVideoMuted);
    setShowControls(true);
    scheduleControlsAutoHide();
  }, [scheduleControlsAutoHide]);

  const handleToggleFullscreen = useCallback(async () => {
    setShowControls(true);
    setIsFullscreen((current) => !current);
  }, [isFullscreen]);

  const renderControls = useCallback(
    (fullscreenMode: boolean) => (
      <>
        <TouchableOpacity
          style={styles.centerControl}
          onPress={handleTogglePlayback}
          activeOpacity={0.85}
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={26}
            color="#fff"
          />
        </TouchableOpacity>

        <View style={styles.bottomControlsRow}>
          <TouchableOpacity
            style={styles.secondaryControl}
            onPress={handleToggleMute}
            activeOpacity={0.85}
          >
            <Ionicons
              name={isMuted ? "volume-mute" : "volume-high"}
              size={18}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryControl}
            onPress={handleToggleFullscreen}
            activeOpacity={0.85}
          >
            <Ionicons
              name={fullscreenMode ? "contract" : "expand"}
              size={18}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </>
    ),
    [
      handleToggleFullscreen,
      handleToggleMute,
      handleTogglePlayback,
      isMuted,
      isPlaying,
    ],
  );

  const handleToggleControls = useCallback(() => {
    if (showControls) {
      clearHideControlsTimeout();
      setShowControls(false);
      return;
    }

    setShowControls(true);
    scheduleControlsAutoHide();
  }, [clearHideControlsTimeout, scheduleControlsAutoHide, showControls]);

  return (
    <View style={[styles.mediaFrame, { height, backgroundColor }]}>
      {!isFullscreen && (
        <>
          <VideoView
            player={player}
            style={[styles.image, { height }]}
            contentFit="cover"
            nativeControls={false}
          />

          <Pressable style={styles.videoOverlay} onPress={handleToggleControls}>
            {showControls && renderControls(false)}
          </Pressable>
        </>
      )}

      <Modal
        visible={isFullscreen}
        animationType="fade"
        transparent={false}
        statusBarTranslucent
        onRequestClose={() => setIsFullscreen(false)}
      >
        <View style={styles.fullscreenContainer}>
          <VideoView
            player={player}
            style={styles.fullscreenVideo}
            contentFit="contain"
            nativeControls={false}
          />

          <Pressable
            style={styles.fullscreenOverlay}
            onPress={handleToggleControls}
          >
            <TouchableOpacity
              style={styles.closeControl}
              onPress={() => setIsFullscreen(false)}
              activeOpacity={0.85}
            >
              <Ionicons name="close" size={22} color="#fff" />
            </TouchableOpacity>

            {showControls && renderControls(true)}
          </Pressable>
        </View>
      </Modal>
    </View>
  );
});

const MediaSlide = React.memo(function MediaSlide({
  item,
  height,
  backgroundColor,
  isActive,
  shouldAutoplay,
}: MediaSlideProps) {
  const resolvedUrl = normalizeRemoteImageUrl(item.url);
  const isVideo = item.type === "VIDEO";

  if (isVideo) {
    return (
      <VideoSlide
        url={resolvedUrl}
        height={height}
        backgroundColor={backgroundColor}
        shouldAutoplay={shouldAutoplay}
      />
    );
  }

  return (
    <Image
      source={{ uri: resolvedUrl }}
      style={[styles.image, { height, backgroundColor }]}
      contentFit="cover"
      transition={200}
    />
  );
});

interface MediaCarouselProps {
  media: PostMedia[];
  height?: number;
  isVisibleInFeed?: boolean;
}

export const MediaCarousel = React.memo(function MediaCarousel({
  media,
  height = SCREEN_WIDTH * 0.8,
  isVisibleInFeed = false,
}: MediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { colors } = useAppTheme();

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 60,
  }).current;

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
    [],
  );

  if (!media.length) return null;

  return (
    <View style={[styles.container, { backgroundColor: colors.borderLight }]}>
      <FlatList
        data={media}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        decelerationRate="fast"
        bounces={false}
        renderItem={({ item, index }) => (
          <MediaSlide
            item={item}
            height={height}
            backgroundColor={colors.borderLight}
            isActive={index === activeIndex}
            shouldAutoplay={index === activeIndex && isVisibleInFeed}
          />
        )}
      />

      {/* Counter badge (top-right) */}
      {media.length > 1 && (
        <View style={styles.counterBadge}>
          <Text style={styles.counterText}>
            {activeIndex + 1}/{media.length}
          </Text>
        </View>
      )}

      {/* Dot indicators */}
      {media.length > 1 && media.length <= 8 && (
        <View style={styles.dotsRow}>
          {media.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === activeIndex && styles.dotActive]}
            />
          ))}
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#F0F0F0",
  },
  image: {
    width: SCREEN_WIDTH,
    backgroundColor: "#E5E7EB",
  },
  mediaFrame: {
    width: SCREEN_WIDTH,
    position: "relative",
    overflow: "hidden",
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenVideo: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  centerControl: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -28,
    marginTop: -28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  closeControl: {
    position: "absolute",
    top: 56,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomControlsRow: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondaryControl: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  counterBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.55)",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  counterText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  dotsRow: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.45)",
  },
  dotActive: {
    backgroundColor: "#fff",
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
});
