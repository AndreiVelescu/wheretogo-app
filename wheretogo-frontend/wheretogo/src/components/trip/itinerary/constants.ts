/**
 * Premium Light Map Style — Uber / Airbnb inspired
 * Clean, minimal, soft pastels with muted labels
 */
export const MAP_STYLE_LIGHT = [
  // Base geometry — warm off-white
  { elementType: "geometry", stylers: [{ color: "#F6F5F1" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#9CA3AF" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#F6F5F1" }] },

  // POI — hide clutter
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  {
    featureType: "poi.park",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#E8F5E9" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },

  // Transit — hidden
  { featureType: "transit", stylers: [{ visibility: "off" }] },

  // Roads — clean white hierarchy
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#FFFFFF" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#E8E8E4" }, { weight: 1 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#FFF8E1" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#E8E0C8" }, { weight: 1.2 }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{ color: "#FFFFFF" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#B0B0A8" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#F6F5F1" }],
  },

  // Water — soft blue
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#D4E8F0" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#92B4C8" }],
  },

  // Administrative
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#E0DDD4" }, { weight: 0.8 }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6B7280" }],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [{ color: "#A0A0A0" }],
  },

  // Landscape
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [{ color: "#F0EFEB" }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [{ color: "#EEF0E8" }],
  },
];

/**
 * Premium Dark Map Style — Uber / Airbnb inspired
 * Deep navy-charcoal, subtle road hierarchy, moody water
 */
export const MAP_STYLE_DARK = [
  // Base geometry — deep charcoal
  { elementType: "geometry", stylers: [{ color: "#1A1D27" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#6B7280" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1A1D27" }] },

  // POI — hide clutter
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  {
    featureType: "poi.park",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#1E2E1E" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },

  // Transit — hidden
  { featureType: "transit", stylers: [{ visibility: "off" }] },

  // Roads — subtle gray hierarchy
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#252839" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1E2130" }, { weight: 0.8 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#2D3141" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#3A3E50" }, { weight: 0.6 }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{ color: "#272B3A" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#525870" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#1A1D27" }],
  },

  // Water — moody deep blue
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#141824" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3A4560" }],
  },

  // Administrative
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#2D3141" }, { weight: 0.6 }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8892A8" }],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [{ color: "#5A6178" }],
  },

  // Landscape
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [{ color: "#1E2130" }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [{ color: "#1C2028" }],
  },
];

/** @deprecated Use MAP_STYLE_LIGHT or MAP_STYLE_DARK */
export const MAP_STYLE = MAP_STYLE_LIGHT;
