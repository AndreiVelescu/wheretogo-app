import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface DatePickerFieldProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
  minimumDate?: Date;
}

const { width, height } = Dimensions.get("window");

export default function DatePickerField({
  label,
  value,
  onChange,
  minimumDate,
}: DatePickerFieldProps) {
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState(
    value ? new Date(value) : new Date()
  );
  const { colors } = useAppTheme();

  const onTempSelect = (_event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setTempDate(selectedDate);
    }
  };

  const toLocalISODate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const onConfirm = () => {
    onChange(toLocalISODate(tempDate));
    setShow(false);
  };

  const onCancel = () => {
    setTempDate(value ? new Date(value) : new Date());
    setShow(false);
  };

  const displayDate = value
    ? new Date(value).toLocaleDateString("ro-RO", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Alege data";

  const displayDateShort = value
    ? new Date(value).toLocaleDateString("ro-RO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  // For Android, use native picker behavior
  if (Platform.OS === "android") {
    const onSelect = (_event: any, selectedDate?: Date) => {
      setShow(false);
      if (!selectedDate) return;

      onChange(toLocalISODate(selectedDate));
    };

    return (
      <View style={{ flex: 1 }}>
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>

        <TouchableOpacity
          onPress={() => setShow(true)}
          style={[
            styles.button,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <View style={styles.buttonContent}>
            <Ionicons
              name="calendar-outline"
              size={20}
              color={colors.primary}
            />
            <Text
              style={[
                styles.buttonText,
                { color: value ? colors.text : colors.textMuted },
              ]}
            >
              {displayDate}
            </Text>
            <Ionicons name="chevron-down" size={16} color={colors.textMuted} />
          </View>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            value={value ? new Date(value) : new Date()}
            mode="date"
            display="default"
            onChange={onSelect}
            minimumDate={minimumDate || new Date()}
          />
        )}
      </View>
    );
  }

  // For iOS, use modal approach
  return (
    <View style={{ flex: 1 }}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>

      <TouchableOpacity
        onPress={() => setShow(true)}
        style={[
          styles.button,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <View style={styles.buttonContent}>
          <Ionicons name="calendar-outline" size={20} color={colors.primary} />
          <Text
            style={[
              styles.buttonText,
              { color: value ? colors.text : colors.textMuted },
            ]}
          >
            {displayDate}
          </Text>
          <Ionicons name="chevron-down" size={16} color={colors.textMuted} />
        </View>
      </TouchableOpacity>

      <Modal
        visible={show}
        transparent
        animationType="fade"
        onRequestClose={onCancel}
      >
        <Pressable style={styles.overlay} onPress={onCancel}>
          <Pressable
            style={[styles.modal, { backgroundColor: colors.card }]}
            onPress={() => {}}
          >
            <View
              style={[styles.modalHeader, { borderBottomColor: colors.border }]}
            >
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                Alege {label}
              </Text>
              <View
                style={[
                  styles.selectedDateContainer,
                  { backgroundColor: colors.primarySoft },
                ]}
              >
                <Ionicons name="calendar" size={16} color={colors.primary} />
                <Text style={[styles.selectedDate, { color: colors.primary }]}>
                  {tempDate.toLocaleDateString("ro-RO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </Text>
              </View>
            </View>

            <View style={styles.pickerContainer}>
              <DateTimePicker
                value={tempDate}
                mode="date"
                display="spinner"
                onChange={onTempSelect}
                minimumDate={minimumDate || new Date()}
                style={styles.picker}
                textColor="#333"
                themeVariant="light"
              />
            </View>

            <View
              style={[styles.modalActions, { borderTopColor: colors.border }]}
            >
              <TouchableOpacity
                onPress={onCancel}
                style={[
                  styles.actionButton,
                  styles.cancelButton,
                  { backgroundColor: colors.borderLight },
                ]}
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
                onPress={onConfirm}
                style={[
                  styles.actionButton,
                  styles.confirmButton,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Text style={styles.confirmButtonText}>Confirmă</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
    fontSize: 15,
  },
  button: {
    borderWidth: 2,
    borderColor: "#f0f0f0",
    borderRadius: 12,
    backgroundColor: "#fafafa",
    overflow: "hidden",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  buttonText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: height * 0.4,
    maxHeight: height * 0.7,
  },
  modalHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    alignItems: "center",
    gap: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  selectedDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFF3F3",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  selectedDate: {
    fontSize: 14,
    color: "#E53935",
    fontWeight: "500",
  },
  pickerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  picker: {
    width: "100%",
    height: 200,
    alignSelf: "center",
  },
  modalActions: {
    flexDirection: "row",
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  actionButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
  },
  cancelButtonText: {
    color: "#666",
    fontWeight: "600",
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#E53935",
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
