import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../ui/theme";

export interface Day {
  id?: number;
  dayNumber?: number;
  date?: string;
  stops?: any[];
}

interface DayTabsProps {
  days: Day[];
  selectedIndex: number;
  onSelectDay: (index: number) => void;
}

export default function DayTabs({
  days,
  selectedIndex,
  onSelectDay,
}: DayTabsProps) {
  const { colors } = useAppTheme();
  return (
    <View
      style={[
        styles.dayTabsContainer,
        { backgroundColor: colors.card, borderBottomColor: colors.separator },
      ]}
    >
      <FlatList
        data={days}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) =>
          item?.id ? `day-${item.id}` : `day-${index}`
        }
        contentContainerStyle={styles.dayTabs}
        renderItem={({ item, index }) => {
          const isActive = index === selectedIndex;
          const dayDate = item.date ? new Date(item.date) : null;
          const dayName = dayDate
            ? dayDate.toLocaleDateString("ro-RO", { weekday: "short" })
            : "";
          const dayNum = dayDate ? dayDate.getDate() : "";

          return (
            <TouchableOpacity
              style={[
                styles.dayTab,
                {
                  backgroundColor: colors.borderLight,
                  borderColor: colors.border,
                },
                isActive && {
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                },
              ]}
              onPress={() => onSelectDay(index)}
              activeOpacity={0.8}
            >
              <View style={styles.dayTabContent}>
                <View
                  style={[
                    styles.dayTabIcon,
                    { backgroundColor: colors.primarySoft },
                    isActive && styles.dayTabIconActive,
                  ]}
                >
                  <Ionicons
                    name={isActive ? "calendar" : "calendar-outline"}
                    size={18}
                    color={isActive ? "#fff" : colors.primary}
                  />
                </View>
                <View style={styles.dayTabInfo}>
                  <Text
                    style={[
                      styles.dayTabLabel,
                      { color: colors.text },
                      isActive && styles.dayTabLabelActive,
                    ]}
                  >
                    Ziua {item.dayNumber || index + 1}
                  </Text>
                  {dayName && (
                    <Text
                      style={[
                        styles.dayTabDate,
                        { color: colors.textMuted },
                        isActive && styles.dayTabDateActive,
                      ]}
                    >
                      {dayName} {dayNum}
                    </Text>
                  )}
                </View>
              </View>
              {isActive && <View style={styles.dayTabIndicator} />}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dayTabsContainer: {
    backgroundColor: "#fff",
    marginHorizontal: -14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  dayTabs: {
    paddingBottom: 4,
    paddingTop: 4,
  },
  dayTab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#F9FAFB",
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    minWidth: 108,
    position: "relative",
    overflow: "hidden",
  },
  dayTabActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  dayTabContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dayTabIcon: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  dayTabIconActive: {
    backgroundColor: "rgba(255,255,255,0.25)",
  },
  dayTabInfo: {
    flexDirection: "column",
  },
  dayTabLabel: {
    color: "#374151",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: -0.2,
  },
  dayTabLabelActive: {
    color: "#fff",
  },
  dayTabDate: {
    color: "#9CA3AF",
    fontSize: 11,
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: 1,
  },
  dayTabDateActive: {
    color: "rgba(255,255,255,0.85)",
  },
  dayTabIndicator: {
    position: "absolute",
    bottom: 0,
    left: "20%",
    right: "20%",
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
});
