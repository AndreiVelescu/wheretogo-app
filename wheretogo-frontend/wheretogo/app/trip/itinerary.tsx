import CollaboratorsModal, {
  Collaborator,
} from "@/src/components/trip/CollaboratorsModal";
import EditStopModal from "@/src/components/trip/EditStopModal";
import {
  ADD_TRIP_COLLABORATOR_MUTATION,
  clamp,
  CREATE_STOP_MUTATION,
  DayTabs,
  decodePolyline,
  DELETE_STOP_MUTATION,
  DraggableStopList,
  extractStopCoords,
  ItineraryMap,
  MapMarker,
  normalizeCoord,
  REMOVE_COLLABORATOR_MUTATION,
  REORDER_STOPS_MUTATION,
  TRIP_QUERY,
  TripHeader,
  TripInfoCard,
  UPDATE_COLLABORATOR_ROLE_MUTATION,
  UPDATE_STOP_MUTATION,
} from "@/src/components/trip/itinerary";
import LocationDetailModal from "@/src/components/trip/LocationDetailModal";
import LocationPickerModal from "@/src/components/trip/LocationPickerModal";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useCurrentUser } from "@/src/features";
import { useMutation, useQuery } from "@apollo/client/react";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
  Dimensions,
  FlatList,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";

const getDayKey = (day: any) => String(day?.id ?? day?.dayNumber ?? day?.date);

const getStopKey = (stop: any) =>
  String(
    stop?.id ??
      `${stop?.order}-${stop?.customName || stop?.location?.name || "stop"}`,
  );

const mergeTripData = (fallbackTrip: any, incomingTrip: any) => {
  if (!incomingTrip) {
    return fallbackTrip ?? null;
  }

  if (!fallbackTrip?.days?.length) {
    return incomingTrip;
  }

  const fallbackDaysByKey = new Map(
    (fallbackTrip.days || []).map((day: any) => [getDayKey(day), day]),
  );

  return {
    ...fallbackTrip,
    ...incomingTrip,
    days: (incomingTrip.days || []).map((incomingDay: any) => {
      const fallbackDay =
        (fallbackDaysByKey.get(getDayKey(incomingDay)) as any) || null;
      const fallbackStopsByKey = new Map(
        (fallbackDay?.stops || []).map((stop: any) => [getStopKey(stop), stop]),
      );

      return {
        ...fallbackDay,
        ...incomingDay,
        stops: (incomingDay.stops || []).map((incomingStop: any) => {
          const fallbackStop =
            (fallbackStopsByKey.get(getStopKey(incomingStop)) as any) || null;
          const mergedLocation =
            fallbackStop?.location || incomingStop?.location
              ? {
                  ...(fallbackStop?.location || {}),
                  ...(incomingStop?.location || {}),
                  lat:
                    incomingStop?.location?.lat ??
                    fallbackStop?.location?.lat ??
                    null,
                  lng:
                    incomingStop?.location?.lng ??
                    fallbackStop?.location?.lng ??
                    null,
                  address:
                    incomingStop?.location?.address ??
                    fallbackStop?.location?.address ??
                    null,
                  photos: incomingStop?.location?.photos?.length
                    ? incomingStop.location.photos
                    : (fallbackStop?.location?.photos ?? []),
                }
              : null;

          return {
            ...fallbackStop,
            ...incomingStop,
            lat: incomingStop?.lat ?? fallbackStop?.lat ?? null,
            lng: incomingStop?.lng ?? fallbackStop?.lng ?? null,
            address:
              incomingStop?.address ??
              fallbackStop?.address ??
              mergedLocation?.address ??
              null,
            location: mergedLocation,
          };
        }),
      };
    }),
  };
};

export default function ItineraryScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { colors, isDark } = useAppTheme();
  const mapRef = useRef<MapView>(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [isReorderingStops, setIsReorderingStops] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [routePath, setRoutePath] = useState<
    { latitude: number; longitude: number }[]
  >([]);

  const [selectedStop, setSelectedStop] = useState<any>(null);
  const [showLocationDetail, setShowLocationDetail] = useState(false);
  const [showEditStop, setShowEditStop] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [locationPickerMode, setLocationPickerMode] = useState<
    "replace" | "add"
  >("replace");
  const [targetDayId, setTargetDayId] = useState<number | null>(null);
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [collaboratorsBtnPosition, setCollaboratorsBtnPosition] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [tripSnapshot, setTripSnapshot] = useState<any>(null);
  const {
    data: currentUser,
    isLoading,
    error: currentUserError,
    refetch: refetchCurrentUser,
  } = useCurrentUser();

  const screenHeight = Dimensions.get("window").height;
  const mapHeight = Math.round(screenHeight * 0.8);
  const sheetHeight = screenHeight - 100;
  const collapsedOffset = Math.max(sheetHeight - 180, 0);
  const sheetTranslateY = useRef(new Animated.Value(collapsedOffset)).current;
  const sheetStartY = useRef(collapsedOffset);

  const tripFromParams = useMemo(() => {
    try {
      return params.trip
        ? JSON.parse(decodeURIComponent(String(params.trip)))
        : null;
    } catch (e) {
      console.error("Failed to parse trip param", e);
      return null;
    }
  }, [params.trip]);

  const tripId = useMemo(() => {
    const raw = params.id ?? params.tripId ?? null;
    const parsed = raw ? Number(raw) : NaN;
    return Number.isFinite(parsed) ? parsed : null;
  }, [params.id, params.tripId]);

  const { data, loading, error, refetch } = useQuery<{ trip: any }>(
    TRIP_QUERY,
    { variables: { id: tripId as number }, skip: !tripId },
  );

  const [createStop] = useMutation(CREATE_STOP_MUTATION);
  const [updateStop] = useMutation(UPDATE_STOP_MUTATION);
  const [deleteStop] = useMutation(DELETE_STOP_MUTATION);
  const [reorderStops] = useMutation(REORDER_STOPS_MUTATION);
  const [addTripCollaborator] = useMutation(ADD_TRIP_COLLABORATOR_MUTATION);
  const [removeCollaborator] = useMutation(REMOVE_COLLABORATOR_MUTATION);
  const [updateCollaboratorRole] = useMutation(
    UPDATE_COLLABORATOR_ROLE_MUTATION,
  );

  useEffect(() => {
    const incomingTrip = data?.trip ?? tripFromParams ?? null;

    if (!incomingTrip) {
      setTripSnapshot(null);
      return;
    }

    setTripSnapshot((previousTrip: any) => {
      if (
        !previousTrip ||
        Number(previousTrip.id) !== Number(incomingTrip.id)
      ) {
        return mergeTripData(tripFromParams, incomingTrip);
      }

      return mergeTripData(previousTrip, incomingTrip);
    });
  }, [data?.trip, tripFromParams]);

  const trip = tripSnapshot;
  const collaborators: Collaborator[] = trip?.collaborators || [];
  const currentUserId = currentUser?.data?.id;
  const isOwner = Number(currentUserId) === Number(trip?.ownerId);
  const currentCollaboration = collaborators.find(
    (collaborator) => Number(collaborator.userId) === Number(currentUserId),
  );
  const accessRole = isOwner
    ? "admin"
    : String(currentCollaboration?.role || "viewer").toLowerCase();
  const canEditItinerary =
    isOwner || accessRole === "editor" || accessRole === "admin";

  // Debug logging
  useEffect(() => {
    console.log("Itinerary Debug:", {
      tripId,
      hasData: !!data,
      hasTripFromParams: !!tripFromParams,
      hasTripFinal: !!trip,
      loading,
      error: error?.message,
      dataTrip: data?.trip,
    });
  }, [tripId, data, tripFromParams, trip, loading, error]);

  const days = useMemo(() => {
    const list = trip?.days ? [...trip.days] : [];
    return list.sort(
      (a: any, b: any) => (a.dayNumber || 0) - (b.dayNumber || 0),
    );
  }, [trip]);

  const selectedDay = days[selectedDayIndex] || days[0];
  const totalStops = useMemo(
    () =>
      days.reduce((sum: number, day: any) => sum + (day.stops?.length || 0), 0),
    [days],
  );

  useEffect(() => {
    if (days.length > 0) setSelectedDayIndex(0);
  }, [days.length]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dy) > 7,
        onPanResponderGrant: () => {
          sheetTranslateY.stopAnimation((value: number) => {
            sheetStartY.current = value;
          });
        },
        onPanResponderMove: (_, gesture) => {
          const next = clamp(
            sheetStartY.current + gesture.dy,
            0,
            collapsedOffset,
          );
          sheetTranslateY.setValue(next);
        },
        onPanResponderRelease: (_, gesture) => {
          const shouldExpand =
            gesture.vy < -0.2 ||
            sheetStartY.current + gesture.dy < collapsedOffset / 2;
          Animated.spring(sheetTranslateY, {
            toValue: shouldExpand ? 0 : collapsedOffset,
            useNativeDriver: true,
          }).start();
        },
      }),
    [collapsedOffset, sheetTranslateY],
  );

  const markers: MapMarker[] = useMemo(() => {
    const list: MapMarker[] = [];
    if (!selectedDay) return list;
    (selectedDay.stops || []).forEach((stop: any, idx: number) => {
      const coord = extractStopCoords(stop);
      if (coord) {
        list.push({
          key: `${selectedDay.id || selectedDay.date || "day"}-${stop.id || idx}-${coord.latitude}-${coord.longitude}`,
          title: stop.customName || stop.location?.name || "Locație",
          description: stop.address || stop.location?.name || "",
          order: stop.order || idx + 1,
          coordinate: coord,
          stop,
        });
      }
    });
    return list;
  }, [selectedDay]);

  useEffect(() => {
    if (!mapReady || !mapRef.current || markers.length === 0) return;
    mapRef.current.fitToCoordinates(
      markers.map((m) => m.coordinate),
      {
        edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
        animated: true,
      },
    );
  }, [mapReady, markers, selectedDayIndex]);

  const initialRegion = markers.length
    ? {
        latitude: markers[0].coordinate.latitude,
        longitude: markers[0].coordinate.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
    : {
        latitude: 47.0105,
        longitude: 28.8638,
        latitudeDelta: 0.25,
        longitudeDelta: 0.25,
      };

  const routeCoords = useMemo(() => {
    if (!selectedDay) return [];
    const coords: { latitude: number; longitude: number }[] = [];
    const stops = [...(selectedDay.stops || [])].sort(
      (a: any, b: any) => (a.order || 0) - (b.order || 0),
    );
    stops.forEach((stop: any) => {
      const coord = extractStopCoords(stop);
      if (coord) coords.push(coord);
    });
    return coords;
  }, [selectedDay]);

  // Build route path: straight-line immediately, then upgrade via Directions API
  useEffect(() => {
    // Immediately show a straight-line route between stops
    if (routeCoords.length >= 2) {
      setRoutePath(routeCoords);
    } else {
      setRoutePath([]);
      return;
    }

    const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!key) return;

    let cancelled = false;

    const origin = `${routeCoords[0].latitude},${routeCoords[0].longitude}`;
    const dest = `${routeCoords[routeCoords.length - 1].latitude},${
      routeCoords[routeCoords.length - 1].longitude
    }`;
    const waypoints =
      routeCoords.length > 2
        ? routeCoords
            .slice(1, -1)
            .map((c) => `${c.latitude},${c.longitude}`)
            .join("|")
        : "";
    const url =
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}` +
      `&destination=${dest}` +
      (waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : "") +
      `&key=${key}`;

    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return;
        const encoded = json?.routes?.[0]?.overview_polyline?.points;
        if (encoded) {
          const decoded = decodePolyline(encoded);
          if (decoded.length > 1) setRoutePath(decoded);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [routeCoords]);

  const handleOpenLocation = (stop: any) => {
    setSelectedStop(stop);
    setShowLocationDetail(true);
  };

  const handleEditStop = (stop: any) => {
    if (!canEditItinerary) {
      return;
    }

    setSelectedStop(stop);
    setShowEditStop(true);
  };

  const resequenceDayStops = async (day: any) => {
    const orderedStops = [...(day?.stops || [])].sort(
      (left: any, right: any) => (left.order || 0) - (right.order || 0),
    );

    await Promise.all(
      orderedStops.map((stop: any, index: number) => {
        const nextOrder = index + 1;

        if (Number(stop.order) === nextOrder) {
          return Promise.resolve();
        }

        return updateStop({
          variables: {
            where: { id: Number(stop.id) },
            data: { order: { set: nextOrder } },
          },
        });
      }),
    );
  };

  const handleReorderStops = async (dayId: number, orderedStops: any[]) => {
    if (!canEditItinerary) return;

    const stopIds = orderedStops
      .map((stop) => Number(stop.id))
      .filter((id) => Number.isFinite(id));

    if (stopIds.length !== orderedStops.length) {
      // Some stops have no id yet (not persisted) — can't reorder safely.
      await refetch();
      return;
    }

    const withNewOrder = orderedStops.map((stop, idx) => ({
      ...stop,
      order: idx + 1,
    }));

    // Optimistic update so the list & map route reorder instantly.
    setTripSnapshot((prev: any) => {
      if (!prev?.days) return prev;
      return {
        ...prev,
        days: prev.days.map((day: any) =>
          Number(day.id) === Number(dayId)
            ? { ...day, stops: withNewOrder }
            : day,
        ),
      };
    });

    // One atomic mutation handles the unique-order constraint server-side.
    try {
      await reorderStops({
        variables: { tripDayId: Number(dayId), stopIds },
      });
    } catch {
      Alert.alert("Eroare", "Nu am putut reordona opririle.");
      await refetch();
    }
  };

  const handleSaveStop = async (formData: any) => {
    if (!canEditItinerary) {
      throw new Error("Ai acces doar de vizualizare pentru acest trip.");
    }

    if (!selectedStop?.id) return;
    await updateStop({
      variables: {
        where: { id: Number(selectedStop.id) },
        data: {
          customName: { set: formData.customName || null },
          address: { set: formData.address || null },
          arrivalTime: { set: formData.arrivalTime || null },
          departureTime: { set: formData.departureTime || null },
          transportMode: { set: formData.transportMode || null },
          notes: { set: formData.notes || null },
        },
      },
    });

    setShowEditStop(false);
    setSelectedStop(null);
    await refetch();
  };

  const handleDeleteStop = async (stopId: string | number) => {
    if (!canEditItinerary) {
      throw new Error("Ai acces doar de vizualizare pentru acest trip.");
    }

    const numericStopId = Number(stopId);
    const affectedDay = days.find((day: any) =>
      (day.stops || []).some((stop: any) => Number(stop.id) === numericStopId),
    );

    await deleteStop({ variables: { where: { id: numericStopId } } });

    if (affectedDay) {
      await resequenceDayStops({
        ...affectedDay,
        stops: (affectedDay.stops || []).filter(
          (stop: any) => Number(stop.id) !== numericStopId,
        ),
      });
    }

    setShowEditStop(false);
    setSelectedStop(null);
    await refetch();
  };

  const handleChangeLocation = (stop: any) => {
    if (!canEditItinerary) {
      Alert.alert(
        "Acces limitat",
        "Ai acces doar de vizualizare pentru acest trip.",
      );
      return;
    }

    setSelectedStop(stop);
    setLocationPickerMode("replace");
    setShowLocationPicker(true);
  };

  const handleAddStop = (day: any) => {
    if (!canEditItinerary) {
      Alert.alert(
        "Acces limitat",
        "Ai acces doar de vizualizare pentru acest trip.",
      );
      return;
    }

    setSelectedStop(null);
    setTargetDayId(Number(day.id));
    setLocationPickerMode("add");
    setShowLocationPicker(true);
  };

  const handleSelectNewLocation = async (location: any) => {
    if (!canEditItinerary) {
      Alert.alert(
        "Acces limitat",
        "Ai acces doar de vizualizare pentru acest trip.",
      );
      return;
    }

    try {
      const locationLat =
        normalizeCoord(location?.lat) ??
        normalizeCoord(location?.latitude) ??
        normalizeCoord(location?.coordinates?.[1]);
      const locationLng =
        normalizeCoord(location?.lng) ??
        normalizeCoord(location?.longitude) ??
        normalizeCoord(location?.coordinates?.[0]);

      if (locationPickerMode === "add") {
        const targetDay = days.find(
          (day: any) => Number(day.id) === Number(targetDayId),
        );
        if (!targetDay) {
          throw new Error("Ziua selectată nu a fost găsită.");
        }

        const nextOrder =
          Math.max(
            0,
            ...(targetDay.stops || []).map(
              (stop: any) => Number(stop.order) || 0,
            ),
          ) + 1;

        await createStop({
          variables: {
            data: {
              tripDay: { connect: { id: Number(targetDay.id) } },
              location: { connect: { id: Number(location.id) } },
              customName: location.name,
              address: location.address || null,
              lat: locationLat,
              lng: locationLng,
              order: nextOrder,
              arrivalTime: null,
              departureTime: null,
              transportMode: null,
              notes: null,
              estimatedCost:
                typeof location.estimatedCost === "number"
                  ? location.estimatedCost
                  : null,
            },
          },
        });
      } else if (selectedStop?.id) {
        await updateStop({
          variables: {
            where: { id: selectedStop.id },
            data: {
              location: { connect: { id: Number(location.id) } },
              customName: {
                set: selectedStop.customName || location.name || null,
              },
              address: { set: location.address || null },
              lat: { set: locationLat },
              lng: { set: locationLng },
              estimatedCost: {
                set:
                  typeof location.estimatedCost === "number"
                    ? location.estimatedCost
                    : null,
              },
            },
          },
        });
      }

      setShowLocationPicker(false);
      setSelectedStop(null);
      setTargetDayId(null);
      refetch();
    } catch {
      Alert.alert(
        "Eroare",
        locationPickerMode === "add"
          ? "Nu am putut adăuga oprirea."
          : "Nu am putut schimba locația.",
      );
    }
  };

  const handleInviteCollaborator = async (email: string, role: string) => {
    if (!tripId) {
      throw new Error("Trip invalid.");
    }

    try {
      await addTripCollaborator({
        variables: { email: email.trim().toLowerCase(), tripId, role },
      });
      await refetch();
    } catch (error: any) {
      const message =
        error?.graphQLErrors?.[0]?.message ||
        error?.networkError?.message ||
        error?.message ||
        "Nu am putut invita colaboratorul.";

      throw new Error(message);
    }
  };

  const handleRemoveCollaborator = async (collaboratorId: string) => {
    if (!tripId) return;
    try {
      await removeCollaborator({
        variables: { tripId, userId: Number(collaboratorId) },
      });
      refetch();
    } catch {
      Alert.alert("Eroare", "Nu am putut elimina colaboratorul.");
    }
  };

  const handleChangeCollaboratorRole = async (
    collaboratorId: number,
    newRole: "viewer" | "editor",
  ) => {
    if (!isOwner) {
      Alert.alert("Acces limitat", "Doar owner-ul poate schimba rolurile.");
      return;
    }

    try {
      await updateCollaboratorRole({
        variables: {
          where: { id: collaboratorId },
          data: { role: { set: newRole.toUpperCase() } },
        },
      });
      refetch();
    } catch {
      Alert.alert("Eroare", "Nu am putut actualiza rolul colaboratorului.");
    }
  };

  if (!trip && loading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: colors.background },
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, { color: colors.textMuted }]}>
          Generăm itinerariul...
        </Text>
      </View>
    );
  }

  if (!trip && error) {
    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: colors.background },
        ]}
      >
        <Text style={[styles.errorText, { color: colors.error }]}>
          Nu am putut încărca tripul.
        </Text>
      </View>
    );
  }

  if (!trip) {
    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: colors.background },
        ]}
      >
        <Text style={[styles.errorText, { color: colors.error }]}>
          Trip lipsă sau invalid.
        </Text>
      </View>
    );
  }

  const dateRange =
    trip?.startDate && trip?.endDate
      ? `${String(trip.startDate).slice(0, 10)} – ${String(trip.endDate).slice(
          0,
          10,
        )}`
      : "";

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TripHeader
        title={trip?.title || "Your Trip"}
        city={trip?.city}
        dateRange={dateRange}
        collaboratorsCount={collaborators.length}
        onBack={() => router.back()}
        onCollaborators={(btnPos) => {
          setCollaboratorsBtnPosition(btnPos);
          setShowCollaborators(true);
        }}
        hideCollaboratorsBtn={showCollaborators}
      />

      <ItineraryMap
        mapRef={mapRef}
        markers={markers}
        routePath={routePath}
        initialRegion={initialRegion}
        height={mapHeight}
        onMapReady={() => setMapReady(true)}
      />

      <Animated.View
        style={[
          styles.sheet,
          {
            height: sheetHeight,
            transform: [{ translateY: sheetTranslateY }],
            backgroundColor: colors.background,
          },
        ]}
      >
        <View style={styles.sheetHandle} {...panResponder.panHandlers}>
          <View
            style={[styles.sheetHandleBar, { backgroundColor: colors.border }]}
          />
          <TripInfoCard
            title={trip?.title || "Your Trip"}
            city={trip?.city}
            dateRange={dateRange}
          />
          <View style={styles.summaryRow}>
            <View
              style={[
                styles.summaryChip,
                {
                  backgroundColor: canEditItinerary
                    ? colors.primarySoft
                    : colors.borderLight,
                },
              ]}
            >
              <Text
                style={[
                  styles.summaryChipText,
                  {
                    color: canEditItinerary
                      ? colors.primary
                      : colors.textSecondary,
                  },
                ]}
              >
                {canEditItinerary ? "Editor access" : "Read only"}
              </Text>
            </View>
            <View
              style={[styles.summaryChip, { backgroundColor: colors.card }]}
            >
              <Text
                style={[
                  styles.summaryChipText,
                  { color: colors.textSecondary },
                ]}
              >
                {days.length} zile
              </Text>
            </View>
            <View
              style={[styles.summaryChip, { backgroundColor: colors.card }]}
            >
              <Text
                style={[
                  styles.summaryChipText,
                  { color: colors.textSecondary },
                ]}
              >
                {totalStops} opriri
              </Text>
            </View>
          </View>
          {!canEditItinerary && (
            <Text style={[styles.readOnlyHint, { color: colors.textMuted }]}>
              Poți vedea itinerariul și detaliile locațiilor, dar nu poți
              modifica opririle.
            </Text>
          )}
        </View>

        <DayTabs
          days={days}
          selectedIndex={selectedDayIndex}
          onSelectDay={setSelectedDayIndex}
        />

        <FlatList
          data={selectedDay ? [selectedDay] : []}
          scrollEnabled={!isReorderingStops}
          keyExtractor={(item: any, index) =>
            item?.id
              ? String(item.id)
              : `${item?.dayNumber || index}-${item?.date || ""}`
          }
          renderItem={({ item }: any) => (
            <View
              style={[
                styles.dayCard,
                {
                  backgroundColor: colors.card,
                  shadowOpacity: isDark ? 0 : 0.05,
                },
              ]}
            >
              <View style={styles.dayHeader}>
                <View>
                  <Text style={[styles.dayTitle, { color: colors.text }]}>
                    Ziua {item.dayNumber}
                  </Text>
                  <Text style={[styles.dayDate, { color: colors.textMuted }]}>
                    {String(item.date).slice(0, 10)}
                  </Text>
                </View>
                {canEditItinerary && (
                  <Text
                    style={[styles.addStopButton, { color: colors.primary }]}
                    onPress={() => handleAddStop(item)}
                  >
                    + Adaugă stop
                  </Text>
                )}
              </View>
              {!!item.notes && (
                <Text
                  style={[styles.dayNotes, { color: colors.textSecondary }]}
                >
                  {item.notes}
                </Text>
              )}
              {!(item.stops || []).length && (
                <View
                  style={[
                    styles.emptyStops,
                    {
                      backgroundColor:
                        colors.backgroundSecondary || colors.borderLight,
                    },
                  ]}
                >
                  <Text
                    style={[styles.emptyStopsText, { color: colors.textMuted }]}
                  >
                    Încă nu există opriri pentru această zi.
                  </Text>
                  {canEditItinerary && (
                    <Text
                      style={[
                        styles.emptyStopsAction,
                        { color: colors.primary },
                      ]}
                      onPress={() => handleAddStop(item)}
                    >
                      Alege un local din sugestii
                    </Text>
                  )}
                </View>
              )}
              <DraggableStopList
                stops={item.stops || []}
                canEdit={canEditItinerary}
                onPress={handleOpenLocation}
                onEdit={handleEditStop}
                onDragActiveChange={setIsReorderingStops}
                onReorder={(ordered) =>
                  handleReorderStops(Number(item.id), ordered)
                }
              />
            </View>
          )}
        />
      </Animated.View>

      <LocationDetailModal
        visible={showLocationDetail}
        onClose={() => {
          setShowLocationDetail(false);
          setSelectedStop(null);
        }}
        location={selectedStop?.location || null}
        stopInfo={
          selectedStop
            ? {
                arrivalTime: selectedStop.arrivalTime,
                departureTime: selectedStop.departureTime,
                transportMode: selectedStop.transportMode,
                notes: selectedStop.notes,
              }
            : undefined
        }
        onNavigate={() => {}}
      />

      <EditStopModal
        visible={showEditStop}
        onClose={() => {
          setShowEditStop(false);
          setSelectedStop(null);
        }}
        stop={selectedStop}
        onSave={handleSaveStop}
        onDelete={handleDeleteStop}
        onChangeLocation={() => handleChangeLocation(selectedStop)}
      />

      <LocationPickerModal
        visible={showLocationPicker}
        onClose={() => {
          setShowLocationPicker(false);
          setSelectedStop(null);
          setTargetDayId(null);
        }}
        onSelect={handleSelectNewLocation}
        city={trip?.city}
        currentLocationId={selectedStop?.location?.id}
      />

      <CollaboratorsModal
        visible={showCollaborators}
        onClose={() => setShowCollaborators(false)}
        collaborators={collaborators}
        isOwner={isOwner}
        onInvite={handleInviteCollaborator}
        onRemove={async (id: number) => {
          await handleRemoveCollaborator(String(id));
        }}
        onChangeRole={handleChangeCollaboratorRole}
        anchorPosition={collaboratorsBtnPosition || undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F8FA" },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F8FA",
  },
  loadingText: { marginTop: 10, color: "#6B7280" },
  errorText: { color: "#E53935", fontWeight: "600" },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F7F8FA",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 14,
    paddingBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -4 },
    elevation: 8,
  },
  sheetHandle: { alignItems: "center", paddingVertical: 12 },
  sheetHandleBar: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#D1D5DB",
  },
  summaryRow: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  summaryChip: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
  },
  summaryChipText: {
    fontSize: 12,
    fontWeight: "700",
  },
  readOnlyHint: {
    width: "100%",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 4,
  },
  dayCard: {
    marginBottom: 14,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  dayHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  addStopButton: {
    fontWeight: "800",
    fontSize: 13,
  },
  dayTitle: { fontWeight: "700", color: "#111827", fontSize: 16 },
  dayDate: { color: "#9CA3AF" },
  dayNotes: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  emptyStops: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  emptyStopsText: {
    fontSize: 13,
    marginBottom: 6,
  },
  emptyStopsAction: {
    fontSize: 13,
    fontWeight: "800",
  },
});
