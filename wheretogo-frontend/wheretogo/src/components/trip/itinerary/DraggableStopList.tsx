import * as Haptics from "expo-haptics";
import React, { useMemo, useRef, useState } from "react";
import { Animated, PanResponder, View } from "react-native";
import StopCard, { Stop } from "./StopCard";

interface DraggableStopListProps {
  stops: Stop[];
  canEdit?: boolean;
  onPress: (stop: Stop) => void;
  onEdit: (stop: Stop) => void;
  /** Called with the stops in their new order once a drag completes. */
  onReorder: (orderedStops: Stop[]) => void;
  /** Toggled while a drag is active so the parent can freeze its scroll. */
  onDragActiveChange?: (active: boolean) => void;
}

/**
 * Lightweight drag-to-reorder list built on core Animated + PanResponder
 * (no extra native deps, compatible with Reanimated 4 in the project).
 * Dragging is started from the grip handle on each card; the rest of the
 * card keeps its normal tap / edit behaviour.
 */
export default function DraggableStopList({
  stops,
  canEdit = true,
  onPress,
  onEdit,
  onReorder,
  onDragActiveChange,
}: DraggableStopListProps) {
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  // Latest values readable from stable PanResponder closures.
  const stopsRef = useRef<Stop[]>(stops);
  stopsRef.current = stops;

  const heightsRef = useRef<number[]>([]);
  const sourceRef = useRef<number>(-1);
  const targetRef = useRef<number>(-1);

  const dragY = useRef(new Animated.Value(0)).current;

  // One shift animation per row position (rows make room for the dragged card).
  const shiftAnims = useRef<Animated.Value[]>([]).current;
  while (shiftAnims.length < stops.length) {
    shiftAnims.push(new Animated.Value(0));
  }

  const offsets = (): number[] => {
    const result: number[] = [0];
    for (let i = 0; i < heightsRef.current.length; i += 1) {
      result[i + 1] = result[i] + (heightsRef.current[i] || 0);
    }
    return result;
  };

  const computeTarget = (dy: number): number => {
    const source = sourceRef.current;
    const heights = heightsRef.current;
    const off = offsets();
    const h = heights[source] || 0;
    const center = off[source] + h / 2 + dy;

    let target = source;
    for (let i = 0; i < stopsRef.current.length; i += 1) {
      const top = off[i];
      const bottom = off[i] + (heights[i] || 0);
      if (center >= top && center < bottom) {
        target = i;
        break;
      }
      if (center >= bottom) target = i; // dragged past the last band
    }
    return Math.max(0, Math.min(stopsRef.current.length - 1, target));
  };

  const applyShifts = (target: number) => {
    const source = sourceRef.current;
    const h = heightsRef.current[source] || 0;

    shiftAnims.forEach((anim, j) => {
      if (j === source) return;
      let to = 0;
      if (source < target && j > source && j <= target) to = -h;
      else if (source > target && j >= target && j < source) to = h;
      Animated.spring(anim, {
        toValue: to,
        useNativeDriver: false,
        speed: 20,
        bounciness: 0,
      }).start();
    });
  };

  const resetAnims = () => {
    dragY.setValue(0);
    shiftAnims.forEach((anim) => anim.setValue(0));
  };

  const makeResponder = (index: number) =>
    PanResponder.create({
      // Capture from the first touch so the parent ScrollView/FlatList
      // never starts scrolling when the grip is grabbed.
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        sourceRef.current = index;
        targetRef.current = index;
        setDraggingIndex(index);
        dragY.setValue(0);
        shiftAnims.forEach((anim) => anim.setValue(0));
        onDragActiveChange?.(true);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
      },
      onPanResponderMove: (_, gesture) => {
        dragY.setValue(gesture.dy);
        const target = computeTarget(gesture.dy);
        if (target !== targetRef.current) {
          targetRef.current = target;
          applyShifts(target);
          Haptics.selectionAsync().catch(() => {});
        }
      },
      onPanResponderRelease: () => finishDrag(),
      onPanResponderTerminate: () => finishDrag(),
    });

  const finishDrag = () => {
    const source = sourceRef.current;
    const target = targetRef.current;

    if (source !== -1 && target !== -1 && source !== target) {
      const next = [...stopsRef.current];
      const [moved] = next.splice(source, 1);
      next.splice(target, 0, moved);
      onReorder(next);
    }

    sourceRef.current = -1;
    targetRef.current = -1;
    setDraggingIndex(null);
    resetAnims();
    onDragActiveChange?.(false);
  };

  // Recreate responders only when the number of rows changes; they are
  // position-based and read live data through refs.
  const responders = useMemo(
    () => stops.map((_, i) => makeResponder(i)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stops.length],
  );

  if (!canEdit || stops.length < 2) {
    return (
      <>
        {stops.map((stop, idx) => (
          <StopCard
            key={stop.id || `s-${idx}`}
            stop={stop}
            index={idx}
            showConnector={idx > 0}
            onPress={onPress}
            onEdit={onEdit}
            canEdit={canEdit}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {stops.map((stop, idx) => {
        const isDragging = draggingIndex === idx;
        const translateY = isDragging ? dragY : shiftAnims[idx];

        return (
          <Animated.View
            key={stop.id || `s-${idx}`}
            onLayout={(e) => {
              heightsRef.current[idx] = e.nativeEvent.layout.height;
            }}
            style={{
              transform: [{ translateY }],
              zIndex: isDragging ? 99 : 1,
              elevation: isDragging ? 99 : 1,
            }}
          >
            <StopCard
              stop={stop}
              index={idx}
              showConnector={idx > 0}
              onPress={onPress}
              onEdit={onEdit}
              canEdit={canEdit}
              isDragging={isDragging}
              dragHandleProps={responders[idx]?.panHandlers}
            />
          </Animated.View>
        );
      })}
    </>
  );
}
