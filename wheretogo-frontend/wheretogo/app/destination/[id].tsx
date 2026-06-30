import { DatePickerModal } from "@/src/components/DatePickerModal";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useLocationById } from "@/src/features/locations";
import { useReviewsByLocation } from "@/src/features/reviews";
import { useScheduleLocation } from "@/src/features/schedules";
import { getFirstValidImage, processImageList } from "@/src/utils/imageUtils";
import { formatOpenHours } from "@/src/utils/timeUtils";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageView from "react-native-image-viewing";
import { SafeAreaView } from "react-native-safe-area-context";

function LocationDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { colors, isDark } = useAppTheme();
  const [viewerVisible, setViewerVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const screenWidth = Dimensions.get("window").width;

  const { data: location, isLoading, error } = useLocationById(Number(id));
  const scheduleLocation = useScheduleLocation();

  const reviewsResult = useReviewsByLocation(Number(id));
  const reviewsData = reviewsResult.data;
  const reviewsLoading = reviewsResult.loading;
  const reviewsError = reviewsResult.error;

  const images = useMemo(
    () =>
      processImageList(location?.data?.photos || [], location?.data?.type || "")
        .filter(Boolean)
        .slice(0, 12),
    [location?.data?.photos, location?.data?.type]
  );
  const viewerImages = useMemo(() => images.map((uri) => ({ uri })), [images]);
  const safeIndex = Math.min(activeIndex, Math.max(images.length - 1, 0));

  const openViewer = (index: number) => {
    setActiveIndex(index);
    setViewerVisible(true);
  };

  const handleSaveLocation = () => {
    // Implement save location functionality
  };

  const handleScheduleLocation = async (selectedDate: Date) => {
    if (!location?.data?.id) return;

    try {
      // Format date as YYYY-MM-DD in local timezone (not UTC)
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectedDate.getDate()).padStart(2, "0");
      const scheduledDate = `${year}-${month}-${day}`;

      console.log("🗓️ Scheduling date:", {
        selectedDate,
        scheduledDate,
        locationId: location.data.id,
      });

      await scheduleLocation.mutateAsync(location.data.id, scheduledDate);

      // Show success message
      Alert.alert(
        "Succes!",
        `Locația "${
          location.data.name
        }" a fost programată pentru ${selectedDate.toLocaleDateString("ro-RO", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}.`,
        [{ text: "OK" }]
      );
    } catch (error) {
      console.error("Error scheduling location:", error);
      throw error; // Let DatePickerModal handle the error
    }
  };

  if (reviewsLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ textAlign: "center", marginTop: 40, color: "#333" }}>
          Loading reviews...
        </Text>
      </SafeAreaView>
    );
  }
  if (reviewsError) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ textAlign: "center", marginTop: 40, color: "#333" }}>
          Error {reviewsError.message}
        </Text>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ textAlign: "center", marginTop: 40, color: "#333" }}>
          Loading...
        </Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ textAlign: "center", marginTop: 40, color: "#333" }}>
          Error loading location. {error.message}
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ alignSelf: "center", marginTop: 20 }}
        >
          <Text style={{ color: "#007AFF" }}>Înapoi</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  if (!location) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ textAlign: "center", marginTop: 40, color: "#333" }}>
          Locația nu a fost găsită.
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ alignSelf: "center", marginTop: 20 }}
        >
          <Text style={{ color: "#007AFF" }}>Înapoi</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.backgroundSecondary }]}
      edges={["top", "bottom"]}
    >
      <ImageView
        images={viewerImages}
        imageIndex={safeIndex}
        visible={viewerVisible}
        onRequestClose={() => setViewerVisible(false)}
        keyExtractor={(_, index) => index.toString()}
        swipeToCloseEnabled={true}
        backgroundColor="#000000EE"
        presentationStyle="overFullScreen"
        animationType="fade"
        HeaderComponent={({ imageIndex }) => (
          <View style={styles.viewerHeader}>
            <TouchableOpacity
              style={styles.viewerClose}
              onPress={() => setViewerVisible(false)}
            >
              <Ionicons name="close" size={22} color="#fff" />
            </TouchableOpacity>
            {images.length > 1 && (
              <Text style={styles.viewerCounter}>
                {imageIndex + 1}/{images.length}
              </Text>
            )}
          </View>
        )}
      />

      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: getFirstValidImage(
              location.data?.photos || [],
              location.data?.type
            ),
          }}
          style={styles.image}
        />
      </View>

      {/* Top buttons */}
      <View style={styles.headerButtons}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="bookmark-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          {/* Title and type */}
          <Text style={[styles.title, { color: colors.text }]}>
            {location.data?.name}
          </Text>
          <Text style={[styles.subtitle, { color: colors.textMuted }]}>
            {location.data?.type}
          </Text>

          {/* Details row */}
          <View style={styles.row}>
            <View style={styles.rowItem}>
              <Ionicons
                name="location-outline"
                size={16}
                color={colors.textSecondary}
              />
              <Text style={[styles.rowText, { color: colors.textSecondary }]}>
                {location.data?.address}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.rowItem}>
              <Ionicons
                name="time-outline"
                size={16}
                color={colors.textSecondary}
              />
              <Text style={[styles.rowText, { color: colors.textSecondary }]}>
                {formatOpenHours(location.data?.openHours)}
              </Text>
            </View>
            <Text style={styles.price}>{location.data?.priceRange}</Text>
          </View>

          {/* Vibes */}
          <View style={styles.vibesContainer}>
            {location.data?.vibes.map((vibe, i) => (
              <View
                key={i}
                style={[
                  styles.vibeChip,
                  { backgroundColor: colors.inputBackground },
                ]}
              >
                <Text style={[styles.vibeText, { color: colors.text }]}>
                  {vibe}
                </Text>
              </View>
            ))}
          </View>

          {/* Gallery */}
          <View style={styles.galleryHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Galerie
            </Text>
            <Text style={[styles.galleryCount, { color: colors.textMuted }]}>
              {images.length} poze
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.gallery}
            snapToInterval={screenWidth * 0.75 + 12}
            decelerationRate="fast"
          >
            {images.map((photo, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.9}
                onPress={() => openViewer(i)}
              >
                <Image
                  source={{ uri: photo }}
                  style={[styles.galleryImage, { width: screenWidth * 0.75 }]}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* About */}
          <View style={styles.aboutSection}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Despre
            </Text>
            <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
              {location.data?.description}
            </Text>
          </View>
          {/* Reviews Section */}
          <View style={styles.reviewsSection}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Recenzii
            </Text>

            {reviewsData?.reviews && reviewsData.reviews.length > 0 ? (
              reviewsData.reviews.map((review) => (
                <View
                  key={review.id}
                  style={[
                    styles.reviewCard,
                    { backgroundColor: colors.backgroundSecondary },
                  ]}
                >
                  <View style={styles.reviewHeader}>
                    <Ionicons
                      name="person-circle-outline"
                      size={24}
                      color={colors.textSecondary}
                    />
                    <Text style={[styles.reviewUser, { color: colors.text }]}>
                      {review.user?.name}
                    </Text>
                  </View>

                  <View style={styles.starsContainer}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Ionicons
                        key={i}
                        name={i < review.rating ? "star" : "star-outline"}
                        size={16}
                        color="#FFD700"
                      />
                    ))}
                  </View>

                  <Text
                    style={[styles.reviewText, { color: colors.textSecondary }]}
                  >
                    {review.comment}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={{ color: colors.textMuted, marginTop: 10 }}>
                Nu există recenzii încă.
              </Text>
            )}
          </View>

          {/* Button */}
          <TouchableOpacity
            style={[styles.bookButton, { backgroundColor: colors.primary }]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.bookText}>Adauga in calendar</Text>
            <Text>
              <Ionicons name="calendar" size={16} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Date Picker Modal */}
      <DatePickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSchedule={handleScheduleLocation}
        locationName={location?.data?.name}
        isLoading={scheduleLocation.isPending}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F7F8FA" },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 280,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    zIndex: 0,
  },
  image: { width: "100%", height: "100%" },
  headerButtons: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 3,
    elevation: 3,
  },
  iconButton: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 30,
    padding: 8,
  },
  scroll: { flex: 1, zIndex: 1 },
  scrollContent: {
    paddingTop: 240,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: "700", color: "#111827" },
  subtitle: { fontSize: 14, color: "#6B7280", marginTop: 4 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  rowItem: { flexDirection: "row", alignItems: "center", gap: 5 },
  rowText: { fontSize: 14, color: "#4B5563" },
  price: { fontWeight: "700", color: "#2563EB" },
  vibesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 16,
  },
  vibeChip: {
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  vibeText: { color: "#374151", fontSize: 13 },
  galleryHeader: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  galleryCount: { color: "#6B7280", fontSize: 12 },
  gallery: { marginTop: 12 },
  galleryImage: {
    height: 180,
    borderRadius: 14,
    marginRight: 12,
  },
  aboutSection: { marginTop: 20 },
  aboutText: { color: "#4B5563", lineHeight: 20 },
  bookButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#E74C3C",
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 30,
  },
  reviewsSection: {
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  reviewCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  reviewUser: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 6,
  },
  reviewText: {
    color: "#4B5563",
    fontSize: 14,
    lineHeight: 18,
  },

  bookText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  viewerHeader: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewerClose: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 20,
  },
  viewerCounter: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
});

export default LocationDetailsScreen;
