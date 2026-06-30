import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  schedules?: Array<{ scheduledDate: string; id: number }>;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  schedules = [],
}) => {
  const [currentDate, setCurrentDate] = useState(
    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
  );
  const { colors, isDark } = useAppTheme();

  // Generate calendar data
  const generateCalendarData = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }

    return {
      month: date.toLocaleDateString("ro-RO", {
        month: "long",
        year: "numeric",
      }),
      days: days.slice(0, 35), // Show 5 weeks
      currentMonth: month,
      currentYear: year,
    };
  };

  const calendarData = generateCalendarData(currentDate);

  // Navigation functions
  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  // Handle swipe gestures for month navigation
  const handleSwipeGesture = (event: any) => {
    const { translationX, state } = event.nativeEvent;

    if (state === State.END) {
      const swipeThreshold = 50; // Minimum distance for swipe

      if (translationX > swipeThreshold) {
        // Swipe right - go to previous month

        goToPreviousMonth();
      } else if (translationX < -swipeThreshold) {
        // Swipe left - go to next month

        goToNextMonth();
      }
    }
  };

  // Check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Check if date is in current month
  const isCurrentMonth = (date: Date) => {
    return (
      date.getMonth() === calendarData.currentMonth &&
      date.getFullYear() === calendarData.currentYear
    );
  };

  // Parse date string as local date (not UTC) - handles both ISO and YYYY-MM-DD formats
  const parseLocalDate = (dateString: string) => {
    // If it's an ISO string, extract just the date part
    if (dateString.includes("T")) {
      const datePart = dateString.split("T")[0]; // Extract YYYY-MM-DD from ISO string
      const [year, month, day] = datePart.split("-").map(Number);
      return new Date(year, month - 1, day); // month is 0-indexed
    }

    // Handle YYYY-MM-DD format
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day); // month is 0-indexed
  };

  // Check if date has scheduled events
  const hasScheduledEvents = (date: Date) => {
    return schedules.some((schedule) => {
      const scheduleDate = parseLocalDate(schedule.scheduledDate);
      return isSameDay(scheduleDate, date);
    });
  };

  return (
    <View
      style={[
        styles.calendarContainer,
        { backgroundColor: colors.card, shadowOpacity: isDark ? 0 : 0.05 },
      ]}
    >
      <PanGestureHandler onHandlerStateChange={handleSwipeGesture}>
        <View>
          <View style={styles.calendarHeader}>
            <Text style={[styles.monthText, { color: colors.text }]}>
              {calendarData.month}
            </Text>
            <View style={styles.arrowButtons}>
              <TouchableOpacity onPress={goToPreviousMonth}>
                <Ionicons
                  name="chevron-back-outline"
                  size={18}
                  color={colors.text}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={goToNextMonth}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={18}
                  color={colors.text}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.weekDays}>
            {["D", "L", "M", "M", "J", "V", "S"].map((d, i) => (
              <Text
                key={i}
                style={[styles.weekDay, { color: colors.textMuted }]}
              >
                {d}
              </Text>
            ))}
          </View>
          <View style={styles.calendarGrid}>
            {calendarData.days.map((day, index) => {
              const isSelected = isSameDay(day, selectedDate);
              const isToday = isSameDay(day, new Date());
              const isInCurrentMonth = isCurrentMonth(day);
              const hasEvents = hasScheduledEvents(day);

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dayContainer,
                    isSelected && { backgroundColor: colors.primary },
                    isToday &&
                      !isSelected && { backgroundColor: colors.primarySoft },
                  ]}
                  onPress={() => onDateSelect(new Date(day))}
                >
                  <Text
                    style={[
                      styles.dayText,
                      { color: colors.text },
                      !isInCurrentMonth && { color: colors.textMuted },
                      isSelected && styles.selectedDayText,
                      isToday && !isSelected && { color: colors.primary },
                    ]}
                  >
                    {day.getDate()}
                  </Text>
                  {hasEvents && isInCurrentMonth && (
                    <View
                      style={[
                        styles.eventIndicator,
                        { backgroundColor: colors.primary },
                      ]}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 16,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  monthText: { fontSize: 18, fontWeight: "600", color: "#111" },
  arrowButtons: { flexDirection: "row", gap: 10 },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  weekDay: { color: "#aaa", fontSize: 14, width: 30, textAlign: "center" },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dayContainer: {
    width: "14.28%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 4,
  },
  selectedDay: {
    backgroundColor: "#FF6B00",
  },
  todayDay: {
    backgroundColor: "#E8F4FF",
  },
  dayText: { color: "#111", fontWeight: "500", fontSize: 14 },
  selectedDayText: { color: "#fff" },
  todayText: { color: "#FF6B00", fontWeight: "600" },
  otherMonthDay: { color: "#ccc" },
  eventIndicator: {
    position: "absolute",
    bottom: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FF6B00",
  },
});
