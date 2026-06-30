import { API_CONFIG } from "../config/api";

/**
 * Utility pentru gestionarea imaginilor în aplicație
 */

// Google Places API configuration
const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY || "";

// Imaginile placeholder pentru diferite tipuri de locații
export const PLACEHOLDER_IMAGES = {
  restaurant:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
  museum: "https://images.unsplash.com/photo-1565274698638-c05e8ce24b48?w=400",
  park: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
  attraction:
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73900?w=400",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
  cafe: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400",
  library: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  default: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
};

/**
 * Verifică dacă un string este un Google Places photo reference
 */
export const isGooglePhotoReference = (imageString: string): boolean => {
  // Google photo references sunt string-uri lungi alfanumerice cu underscore și minus
  return (
    imageString.length > 100 &&
    /^[A-Za-z0-9_-]+$/.test(imageString) &&
    !imageString.startsWith("http")
  );
};

/**
 * Verifică dacă un string este un URL valid de imagine
 */
export const isValidImageUrl = (imageString: string): boolean => {
  try {
    const url = new URL(imageString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const isLocalHostname = (hostname: string): boolean => {
  const normalized = hostname.toLowerCase();
  return (
    normalized === "localhost" ||
    normalized === "127.0.0.1" ||
    normalized === "0.0.0.0"
  );
};

const isPrivateLanHostname = (hostname: string): boolean => {
  return (
    hostname.startsWith("192.168.") ||
    hostname.startsWith("10.") ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
  );
};

export const isMinioLikeUrl = (imageUrl: string): boolean => {
  if (!isValidImageUrl(imageUrl)) {
    return false;
  }

  try {
    const url = new URL(imageUrl);
    return url.port === "9000" || url.port === "9001";
  } catch {
    return false;
  }
};

export const normalizeRemoteImageUrl = (imageUrl: string): string => {
  if (!isValidImageUrl(imageUrl)) {
    return imageUrl;
  }

  try {
    const url = new URL(imageUrl);
    const apiBase = API_CONFIG.BASE_URL;

    if (!apiBase) {
      return imageUrl;
    }

    const apiUrl = new URL(apiBase);
    const isStorageUrl = isMinioLikeUrl(imageUrl);

    if (isLocalHostname(url.hostname)) {
      url.hostname = apiUrl.hostname;
    }

    if (
      isStorageUrl &&
      isPrivateLanHostname(apiUrl.hostname) &&
      apiUrl.hostname !== url.hostname
    ) {
      url.hostname = apiUrl.hostname;
    }

    if (
      isStorageUrl &&
      apiUrl.protocol === "http:" &&
      url.protocol === "https:"
    ) {
      url.protocol = "http:";
    }

    return url.toString();
  } catch {
    return imageUrl;
  }
};

/**
 * Verifică dacă este un path relativ (ex: /uploads/image.jpg)
 */
export const isRelativePath = (imageString: string): boolean => {
  return imageString.startsWith("/") && !imageString.startsWith("//");
};

/**
 * Construiește URL complet pentru path-uri relative
 */
export const getFullImageUrl = (imagePath: string): string => {
  if (isRelativePath(imagePath)) {
    const baseUrl = API_CONFIG.BASE_URL;
    return `${baseUrl}${imagePath}`;
  }
  return imagePath;
};

/**
 * Construiește URL Google Places pentru o referință foto
 */
export const getGooglePlacesImageUrl = (
  photoReference: string,
  maxwidth: number = 800,
): string => {
  if (!GOOGLE_API_KEY) {
    console.warn("Google API Key not configured for photo references");
    return "";
  }

  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photoreference=${photoReference}&key=${GOOGLE_API_KEY}`;
};

/**
 * Obține URL-ul de imagine pentru afișare
 * Prioritate: URL valid > Path relativ > Google Places photo reference > placeholder
 */
export const getDisplayImageUrl = (
  imageString: string,
  locationType: string = "default",
): string => {
  if (!imageString) {
    // Fallback la placeholder bazat pe tipul locației
    const placeholderKey =
      locationType.toLowerCase() as keyof typeof PLACEHOLDER_IMAGES;
    return PLACEHOLDER_IMAGES[placeholderKey] || PLACEHOLDER_IMAGES.default;
  }

  // Dacă este deja un URL valid, îl folosim
  if (isValidImageUrl(imageString)) {
    return normalizeRemoteImageUrl(imageString);
  }

  // Dacă este un path relativ, construim URL-ul complet
  if (isRelativePath(imageString)) {
    const fullUrl = getFullImageUrl(imageString);
    console.log("🖼️ Converting relative path:", imageString, "→", fullUrl);
    return fullUrl;
  }

  // Dacă este o referință Google Places, construim URL-ul
  if (isGooglePhotoReference(imageString)) {
    const googleUrl = getGooglePlacesImageUrl(imageString);
    if (googleUrl) {
      return googleUrl;
    }
  }

  // Fallback la placeholder bazat pe tipul locației
  const placeholderKey =
    locationType.toLowerCase() as keyof typeof PLACEHOLDER_IMAGES;
  return PLACEHOLDER_IMAGES[placeholderKey] || PLACEHOLDER_IMAGES.default;
};

/**
 * Obține prima imagine validă dintr-o listă de imagini
 */
export const getFirstValidImage = (
  images: string[],
  locationType: string = "default",
): string => {
  if (!images || images.length === 0) {
    return getDisplayImageUrl("", locationType);
  }

  // Încearcă să găsească primul URL valid sau referința Google Places
  for (const image of images) {
    if (isValidImageUrl(image) || isGooglePhotoReference(image)) {
      return getDisplayImageUrl(image, locationType);
    }
  }

  // Fallback la placeholder
  return getDisplayImageUrl("", locationType);
};

/**
 * Transformă o listă de imagini pentru afișare
 */
export const processImageList = (
  images: string[],
  locationType: string = "default",
): string[] => {
  if (!images || images.length === 0) {
    return [getDisplayImageUrl("", locationType)];
  }

  return images.map((image) => getDisplayImageUrl(image, locationType));
};
