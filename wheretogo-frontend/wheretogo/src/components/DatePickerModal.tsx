import { Calendar } from "@/src/components/Calendar";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface DatePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSchedule: (date: Date) => Promise<void>;
  locationName?: string;
  isLoading?: boolean;
}

export const DatePickerModal: React.FC<DatePickerModalProps> = ({
  visible,
  onClose,
  onSchedule,
  locationName,
  isLoading = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { colors } = useAppTheme();

  const handleSchedule = async () => {
    try {
      await onSchedule(selectedDate);
      onClose();
    } catch (error) {
      Alert.alert(
        "Eroare",
        "Nu am putut programa locația. Te rog încearcă din nou.",
        [{ text: "OK" }]
      );
    }
  };

  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString("ro-RO", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Programează vizita
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>

          {/* Location name */}
          {locationName && (
            <View
              style={[
                styles.locationInfo,
                { backgroundColor: colors.backgroundSecondary },
              ]}
            >
              <Ionicons
                name="location-outline"
                size={16}
                color={colors.textSecondary}
              />
              <Text style={[styles.locationName, { color: colors.text }]}>
                {locationName}
              </Text>
            </View>
          )}

          {/* Selected date display */}
          <View
            style={[
              styles.selectedDateContainer,
              {
                backgroundColor: colors.primarySoft,
                borderLeftColor: colors.primary,
              },
            ]}
          >
            <Text
              style={[
                styles.selectedDateLabel,
                { color: colors.textSecondary },
              ]}
            >
              Data selectată:
            </Text>
            <Text style={[styles.selectedDateText, { color: colors.primary }]}>
              {formatSelectedDate(selectedDate)}
            </Text>
          </View>

          {/* Calendar */}
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />

          {/* Action buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.cancelButton,
                { backgroundColor: colors.borderLight },
              ]}
              onPress={onClose}
              disabled={isLoading}
            >
              <Text
                style={[
                  styles.cancelButtonText,
                  { color: colors.textSecondary },
                ]}
              >
                Anulează
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.scheduleButton,
                { backgroundColor: colors.primary },
                isLoading && styles.buttonDisabled,
              ]}
              onPress={handleSchedule}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <>
                  <Text style={styles.scheduleButtonText}>Programează</Text>
                  <Ionicons name="calendar" size={16} color="#fff" />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    maxHeight: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  closeButton: {
    padding: 8,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
  },
  locationName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  selectedDateContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF3E0",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#FF6B00",
  },
  selectedDateLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF6B00",
    textTransform: "capitalize",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  scheduleButton: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#FF6B00",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  scheduleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
