/**
 * Normalize a coordinate value to a number
 */
export const normalizeCoord = (value: any): number | null => {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string") {
    const cleaned = value.replace(",", ".").trim();
    const num = Number(cleaned);
    return Number.isFinite(num) ? num : null;
  }
  return null;
};

/**
 * Extract coordinates from a stop object
 */
export const extractStopCoords = (
  stop: any
): { latitude: number; longitude: number } | null => {
  const rawLat =
    stop?.location?.lat ??
    stop?.location?.latitude ??
    stop?.location?.latitud ??
    stop?.lat ??
    stop?.latitude;
  const rawLng =
    stop?.location?.lng ??
    stop?.location?.lon ??
    stop?.location?.long ??
    stop?.location?.longitude ??
    stop?.lng ??
    stop?.lon ??
    stop?.long ??
    stop?.longitude;

  let lat = normalizeCoord(rawLat);
  let lng = normalizeCoord(rawLng);

  const coordArray = stop?.location?.coordinates ?? stop?.coordinates;
  if ((lat === null || lng === null) && Array.isArray(coordArray)) {
    const arrayLng = normalizeCoord(coordArray[0]);
    const arrayLat = normalizeCoord(coordArray[1]);
    if (arrayLat !== null && arrayLng !== null) {
      lat = lat ?? arrayLat;
      lng = lng ?? arrayLng;
    }
  }

  if (lat === null || lng === null) return null;
  return { latitude: lat, longitude: lng };
};

/**
 * Get the first image from a stop
 */
export const getStopImage = (stop: any): string | null => {
  if (stop?.location?.photos?.length) return stop.location.photos[0];
  if (stop?.location?.imageUrl) return stop.location.imageUrl;
  return null;
};

/**
 * Clamp a value between min and max
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/**
 * Decode a Google polyline encoded string
 */
export const decodePolyline = (
  encoded: string
): { latitude: number; longitude: number }[] => {
  let index = 0;
  let lat = 0;
  let lng = 0;
  const coordinates: { latitude: number; longitude: number }[] = [];

  while (index < encoded.length) {
    let result = 0;
    let shift = 0;
    let b: number;

    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const deltaLat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += deltaLat;

    result = 0;
    shift = 0;

    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const deltaLng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += deltaLng;

    coordinates.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
  }

  return coordinates;
};
