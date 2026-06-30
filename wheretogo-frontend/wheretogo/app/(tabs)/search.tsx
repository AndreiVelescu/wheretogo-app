import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import {
  SearchPerson,
  SearchPlace,
  SearchScope,
  useSearch,
} from "@/src/features/search";
import { useDebounce } from "@/src/hooks/useDebounce";
import {
  getFirstValidImage,
  normalizeRemoteImageUrl,
} from "@/src/utils/imageUtils";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SCOPES: Array<{ key: SearchScope; label: string }> = [
  { key: "all", label: "All" },
  { key: "places", label: "Places" },
  { key: "people", label: "People" },
];

const formatFollowers = (count?: number) => {
  if (!count) {
    return "New here";
  }

  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k followers`;
  }

  return `${count} followers`;
};

const PersonResultCard = ({
  person,
  colors,
}: {
  person: SearchPerson;
  colors: ReturnType<typeof useAppTheme>["colors"];
}) => {
  const avatarUri = person.avatar
    ? normalizeRemoteImageUrl(person.avatar)
    : null;
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <TouchableOpacity
      activeOpacity={0.86}
      onPress={() => router.push(`/profile/${person.id}` as any)}
      style={[
        styles.resultCard,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.personAvatarWrap}>
        {avatarUri ? (
          <Image
            source={{ uri: avatarUri }}
            style={styles.personAvatar}
            contentFit="cover"
          />
        ) : (
          <View
            style={[
              styles.personAvatarFallback,
              { backgroundColor: colors.primarySoft },
            ]}
          >
            <Text
              style={[styles.personAvatarInitials, { color: colors.primary }]}
            >
              {initials}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.resultTextBlock}>
        <Text
          style={[styles.resultTitle, { color: colors.text }]}
          numberOfLines={1}
        >
          {person.name}
        </Text>
        <Text
          style={[styles.resultSubtitle, { color: colors.textSecondary }]}
          numberOfLines={1}
        >
          {person.nickname ? `@${person.nickname}` : "No nickname set"}
        </Text>
        {person.bio ? (
          <Text
            style={[styles.resultMeta, { color: colors.textMuted }]}
            numberOfLines={2}
          >
            {person.bio}
          </Text>
        ) : (
          <Text
            style={[styles.resultMeta, { color: colors.textMuted }]}
            numberOfLines={1}
          >
            {formatFollowers(person._count?.followers)}
          </Text>
        )}
      </View>

      <Feather name="arrow-up-right" size={18} color={colors.textMuted} />
    </TouchableOpacity>
  );
};

const PlaceResultCard = ({
  place,
  colors,
}: {
  place: SearchPlace;
  colors: ReturnType<typeof useAppTheme>["colors"];
}) => {
  const imageUri = getFirstValidImage(place.photos || [], place.type);

  return (
    <TouchableOpacity
      activeOpacity={0.86}
      onPress={() => router.push(`/destination/${place.id}` as any)}
      style={[
        styles.resultCard,
        styles.placeCard,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <Image
        source={{ uri: imageUri }}
        style={styles.placeImage}
        contentFit="cover"
      />

      <View style={styles.resultTextBlock}>
        <Text
          style={[styles.resultTitle, { color: colors.text }]}
          numberOfLines={1}
        >
          {place.name}
        </Text>
        <Text
          style={[styles.resultSubtitle, { color: colors.textSecondary }]}
          numberOfLines={1}
        >
          {place.type}
        </Text>
        <Text
          style={[styles.resultMeta, { color: colors.textMuted }]}
          numberOfLines={2}
        >
          {place.address || "Location"}
        </Text>

        <View style={styles.placeMetaRow}>
          {typeof place.rating === "number" && (
            <View
              style={[
                styles.metaPill,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                },
              ]}
            >
              <Ionicons name="star" size={12} color={colors.star} />
              <Text
                style={[styles.metaPillText, { color: colors.textSecondary }]}
              >
                {place.rating.toFixed(1)}
              </Text>
            </View>
          )}

          {!!place.priceRange && (
            <View
              style={[
                styles.metaPill,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text
                style={[styles.metaPillText, { color: colors.textSecondary }]}
              >
                {place.priceRange}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function SearchScreen() {
  const { colors } = useAppTheme();
  const { isAuthenticated } = useAuth();
  const params = useLocalSearchParams<{ category?: string }>();
  const [query, setQuery] = useState(params.category || "");
  const [scope, setScope] = useState<SearchScope>("all");

  useEffect(() => {
    if (params.category) {
      setQuery(params.category);
      setScope("places");
    }
  }, [params.category]);

  const debouncedQuery = useDebounce(query.trim(), 320);
  const { data, isLoading, error } = useSearch(
    debouncedQuery,
    undefined,
    12,
    debouncedQuery.length > 0,
  );

  const people = data?.people || [];
  const places = data?.places || [];

  const visiblePeople = useMemo(() => {
    return scope === "places" ? [] : people;
  }, [people, scope]);

  const visiblePlaces = useMemo(() => {
    return scope === "people" ? [] : places;
  }, [places, scope]);

  const hasQuery = debouncedQuery.length > 0;
  const hasResults = visiblePeople.length > 0 || visiblePlaces.length > 0;
  const summaryParts = [
    scope !== "places" && people.length > 0 ? `${people.length} people` : null,
    scope !== "people" && places.length > 0 ? `${places.length} places` : null,
  ].filter(Boolean);

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={[styles.header, { borderBottomColor: colors.borderLight }]}>
        <Text style={[styles.eyebrow, { color: colors.textMuted }]}>
          Search
        </Text>
        <Text style={[styles.title, { color: colors.text }]}>
          Find places and people.
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Search by place name, category, person name, or nickname.
        </Text>

        <View
          style={[
            styles.searchShell,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
            },
          ]}
        >
          <Feather name="search" size={18} color={colors.textMuted} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder={
              isAuthenticated
                ? "Search places, @nickname, people..."
                : "Search places or people..."
            }
            placeholderTextColor={colors.inputPlaceholder}
            value={query}
            onChangeText={setQuery}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />
          {!!query && (
            <TouchableOpacity
              onPress={() => setQuery("")}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Feather name="x" size={18} color={colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.scopeRow}>
          {SCOPES.map((item) => {
            const active = scope === item.key;

            return (
              <TouchableOpacity
                key={item.key}
                activeOpacity={0.9}
                onPress={() => setScope(item.key)}
                style={[
                  styles.scopeChip,
                  {
                    backgroundColor: active ? colors.text : colors.card,
                    borderColor: active ? colors.text : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.scopeChipText,
                    {
                      color: active ? colors.textInverse : colors.textSecondary,
                    },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {!hasQuery && (
          <View style={styles.idleState}>
            <View
              style={[
                styles.idleIconWrap,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <Feather name="search" size={26} color={colors.textMuted} />
            </View>
            <Text style={[styles.idleTitle, { color: colors.text }]}>
              Search what you want.
            </Text>
            <Text style={[styles.idleText, { color: colors.textSecondary }]}>
              No presets, no forced categories. Type a place, a vibe, a person's
              name, or a nickname.
            </Text>
          </View>
        )}

        {hasQuery && (
          <View style={styles.resultsHeader}>
            <Text style={[styles.resultsTitle, { color: colors.text }]}>
              Results for "{debouncedQuery}"
            </Text>
            {summaryParts.length > 0 && (
              <Text
                style={[styles.resultsSummary, { color: colors.textMuted }]}
              >
                {summaryParts.join(" · ")}
              </Text>
            )}
          </View>
        )}

        {isLoading && hasQuery && (
          <View style={styles.feedbackState}>
            <ActivityIndicator size="small" color={colors.primary} />
            <Text
              style={[styles.feedbackText, { color: colors.textSecondary }]}
            >
              Searching...
            </Text>
          </View>
        )}

        {!!error && hasQuery && (
          <View style={styles.feedbackState}>
            <Text style={[styles.feedbackText, { color: colors.error }]}>
              Search is unavailable right now. Try again in a moment.
            </Text>
          </View>
        )}

        {!isLoading && hasQuery && !hasResults && !error && (
          <View style={styles.feedbackState}>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              Nothing matched.
            </Text>
            <Text
              style={[styles.feedbackText, { color: colors.textSecondary }]}
            >
              Try a different spelling, a broader place name, or another
              nickname.
            </Text>
          </View>
        )}

        {!isLoading && visiblePeople.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              People
            </Text>
            <View style={styles.sectionBody}>
              {visiblePeople.map((person) => (
                <PersonResultCard
                  key={`person-${person.id}`}
                  person={person}
                  colors={colors}
                />
              ))}
            </View>
          </View>
        )}

        {!isLoading && visiblePlaces.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Places
            </Text>
            <View style={styles.sectionBody}>
              {visiblePlaces.map((place) => (
                <PlaceResultCard
                  key={`place-${place.id}`}
                  place={place}
                  colors={colors}
                />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 18,
    borderBottomWidth: 1,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
  },
  searchShell: {
    marginTop: 20,
    minHeight: 56,
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 16,
  },
  scopeRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  scopeChip: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  scopeChipText: {
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  idleState: {
    alignItems: "flex-start",
    paddingTop: 24,
  },
  idleIconWrap: {
    width: 58,
    height: 58,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  idleTitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  idleText: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 23,
    maxWidth: 320,
  },
  resultsHeader: {
    marginBottom: 18,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  resultsSummary: {
    marginTop: 6,
    fontSize: 13,
  },
  feedbackState: {
    paddingVertical: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  feedbackText: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  sectionBody: {
    gap: 12,
  },
  resultCard: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  resultTextBlock: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  resultSubtitle: {
    fontSize: 14,
    marginBottom: 6,
  },
  resultMeta: {
    fontSize: 13,
    lineHeight: 18,
  },
  personAvatarWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    overflow: "hidden",
  },
  personAvatar: {
    width: "100%",
    height: "100%",
  },
  personAvatarFallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  personAvatarInitials: {
    fontSize: 18,
    fontWeight: "700",
  },
  placeCard: {
    alignItems: "stretch",
  },
  placeImage: {
    width: 84,
    height: 84,
    borderRadius: 16,
    backgroundColor: "#E5E7EB",
  },
  placeMetaRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
    flexWrap: "wrap",
  },
  metaPill: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  metaPillText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
