import { useAppTheme } from "@/src/contexts/ThemeContext";
import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { MAP_STYLE_DARK, MAP_STYLE_LIGHT } from "./constants";
import { getStopImage } from "./utils";

export interface MapMarker {
  key: string;
  title: string;
  description: string;
  order: number;
  coordinate: { latitude: number; longitude: number };
  stop: any;
}

interface ItineraryMapProps {
  mapRef: React.RefObject<MapView> | React.RefObject<null>;
  markers: MapMarker[];
  routePath: { latitude: number; longitude: number }[];
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  height: number;
  onMapReady: () => void;
}

export default function ItineraryMap({
  mapRef,
  markers,
  routePath,
  initialRegion,
  height,
  onMapReady,
}: ItineraryMapProps) {
  const { colors, isDark } = useAppTheme();
  const mapStyle = isDark ? MAP_STYLE_DARK : MAP_STYLE_LIGHT;

  // Route color — muted burgundy/wine red, elegant
  const routeColor = isDark ? "#A45A5A" : "#8B3A3A";

  return (
    <View style={[styles.mapContainer, { height }]}>
      <MapView
        ref={mapRef as any}
        accessibilityLabel="Itinerary map showing stops and route"
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        customMapStyle={mapStyle}
        onMapReady={onMapReady}
        showsCompass={false}
        showsMyLocationButton={false}
        showsPointsOfInterest={false}
        showsBuildings={true}
        showsTraffic={false}
        showsIndoors={true}
        mapPadding={{ top: 80, right: 20, bottom: 20, left: 20 }}
      >
        {/* Route line */}
        {routePath.length > 1 && (
          <Polyline
            coordinates={routePath}
            strokeColor={routeColor}
            fillColor={routeColor}
            strokeWidth={3}
            lineCap="round"
            lineJoin="round"
          />
        )}

        {/* Mini card markers */}
        {markers.map((m, i) => {
          const isFirst = i === 0;
          const isLast = i === markers.length - 1;
          const photo = getStopImage(m.stop);
          const name =
            m.stop?.customName || m.stop?.location?.name || "Locație";
          const truncatedName =
            name.length > 14 ? name.substring(0, 13) + "…" : name;

          return (
            <Marker
              key={m.key}
              coordinate={m.coordinate}
              title={m.title}
              description={m.description}
              tracksViewChanges={true}
              anchor={{ x: 0.5, y: 1 }}
            >
              <View style={styles.cardMarkerWrapper}>
                {/* Card */}
                <View
                  style={[
                    styles.cardMarker,
                    {
                      backgroundColor: colors.card,
                      borderColor:
                        isFirst || isLast
                          ? colors.primary
                          : isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(0,0,0,0.06)",
                    },
                    (isFirst || isLast) && styles.cardMarkerEndpoint,
                  ]}
                >
                  {/* Order badge */}
                  <View
                    style={[
                      styles.orderBadge,
                      {
                        backgroundColor:
                          isFirst || isLast
                            ? colors.primary
                            : isDark
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.06)",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.orderText,
                        {
                          color:
                            isFirst || isLast ? "#fff" : colors.textSecondary,
                        },
                      ]}
                    >
                      {m.order}
                    </Text>
                  </View>

                  {/* Thumbnail */}
                  {photo ? (
                    <Image source={{ uri: photo }} style={styles.cardThumb} />
                  ) : (
                    <View
                      style={[
                        styles.cardThumb,
                        styles.cardThumbPlaceholder,
                        {
                          backgroundColor: isDark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(0,0,0,0.04)",
                        },
                      ]}
                    >
                      <Text style={styles.thumbEmoji}>📍</Text>
                    </View>
                  )}

                  {/* Name */}
                  <Text
                    style={[styles.cardName, { color: colors.text }]}
                    numberOfLines={1}
                  >
                    {truncatedName}
                  </Text>
                </View>

                {/* Pointer triangle */}
                <View style={styles.pointerContainer}>
                  <View
                    style={[
                      styles.pointer,
                      {
                        borderTopColor:
                          isFirst || isLast ? colors.primary : colors.card,
                      },
                    ]}
                  />
                </View>

                {/* Ground dot */}
                <View
                  style={[
                    styles.groundDot,
                    {
                      backgroundColor:
                        isFirst || isLast
                          ? colors.primary
                          : isDark
                            ? "rgba(255,255,255,0.25)"
                            : "rgba(0,0,0,0.12)",
                    },
                  ]}
                />
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    margin: 0,
    borderRadius: 0,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },

  // ── Card marker ──
  cardMarkerWrapper: {
    alignItems: "center",
    paddingBottom: 2,
  },
  cardMarker: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 8,
    borderRadius: 12,
    borderWidth: 1,
    gap: 6,
    maxWidth: 160,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardMarkerEndpoint: {
    borderWidth: 1.5,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
      },
      android: {
        elevation: 6,
      },
    }),
  },
  orderBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  orderText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  cardThumb: {
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  cardThumbPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  thumbEmoji: {
    fontSize: 14,
  },
  cardName: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: -0.1,
    flexShrink: 1,
  },
  pointerContainer: {
    alignItems: "center",
    marginTop: -1,
  },
  pointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  groundDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginTop: 2,
  },
});
