import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export type TripStatusValue =
  | "DRAFT"
  | "PLANNED"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED";

type EditableTrip = {
  id: string | number;
  title: string;
  description?: string | null;
  city?: string | null;
  country?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  isPublic?: boolean;
  totalBudget?: number | null;
  currency?: string | null;
  status: TripStatusValue | string;
};

interface TripManagementModalProps {
  visible: boolean;
  trip: EditableTrip | null;
  isSubmitting?: boolean;
  onClose: () => void;
  onOpenItinerary: (tripId: string) => void;
  onSave: (payload: {
    id: number;
    title: string;
    description?: string;
    city?: string;
    country?: string;
    startDate?: string;
    endDate?: string;
    isPublic: boolean;
    totalBudget?: number;
    currency?: string;
  }) => Promise<void>;
  onChangeStatus: (tripId: number, status: TripStatusValue) => Promise<void>;
  onDelete: (tripId: number) => Promise<void>;
}

const STATUSES: Array<{ value: TripStatusValue; label: string }> = [
  { value: "DRAFT", label: "Draft" },
  { value: "PLANNED", label: "Planned" },
  { value: "ACTIVE", label: "Active" },
  { value: "COMPLETED", label: "Completed" },
  { value: "CANCELLED", label: "Cancelled" },
];

export default function TripManagementModal({
  visible,
  trip,
  isSubmitting = false,
  onClose,
  onOpenItinerary,
  onSave,
  onChangeStatus,
  onDelete,
}: TripManagementModalProps) {
  const { colors } = useAppTheme();
  const [currentTrip, setCurrentTrip] = useState<EditableTrip | null>(trip);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("MDL");
  const [isPublic, setIsPublic] = useState(false);
  const normalizedStatus = useMemo(
    () =>
      String(currentTrip?.status || "DRAFT").toUpperCase() as TripStatusValue,
    [currentTrip?.status],
  );
  const currentTripId = currentTrip ? Number(currentTrip.id) : null;

  const handleClose = () => {
    Keyboard.dismiss();
    onClose();
  };

  useEffect(() => {
    if (!trip) {
      return;
    }

    setCurrentTrip(trip);

    setTitle(trip.title || "");
    setDescription(trip.description || "");
    setCity(trip.city || "");
    setCountry(trip.country || "");
    setStartDate(trip.startDate ? String(trip.startDate).slice(0, 10) : "");
    setEndDate(trip.endDate ? String(trip.endDate).slice(0, 10) : "");
    setBudget(
      typeof trip.totalBudget === "number" ? String(trip.totalBudget) : "",
    );
    setCurrency(trip.currency || "MDL");
    setIsPublic(!!trip.isPublic);
  }, [trip]);

  if (!visible || !currentTrip) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      presentationStyle="overFullScreen"
      statusBarTranslucent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={handleClose} />
        <View
          style={[
            styles.modalCard,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <View style={styles.header}>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>
                Manage trip
              </Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                Edit details, change status or open itinerary.
              </Text>
            </View>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={20} color={colors.textMuted} />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <TouchableOpacity
              style={[
                styles.primaryAction,
                { backgroundColor: colors.primary },
              ]}
              onPress={() => {
                if (currentTripId !== null) {
                  onOpenItinerary(String(currentTripId));
                }
              }}
              disabled={currentTripId === null}
            >
              <Ionicons
                name="map-outline"
                size={16}
                color={colors.primaryText}
              />
              <Text
                style={[
                  styles.primaryActionText,
                  { color: colors.primaryText },
                ]}
              >
                Open itinerary
              </Text>
            </TouchableOpacity>

            <View style={styles.section}>
              <Text style={[styles.label, { color: colors.textMuted }]}>
                Title
              </Text>
              <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Trip title"
                placeholderTextColor={colors.inputPlaceholder}
                style={[
                  styles.input,
                  {
                    color: colors.text,
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                  },
                ]}
              />
            </View>

            <View style={styles.section}>
              <Text style={[styles.label, { color: colors.textMuted }]}>
                Description
              </Text>
              <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Add a note for this trip"
                placeholderTextColor={colors.inputPlaceholder}
                multiline
                style={[
                  styles.input,
                  styles.textarea,
                  {
                    color: colors.text,
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                  },
                ]}
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.section, styles.rowItem]}>
                <Text style={[styles.label, { color: colors.textMuted }]}>
                  City
                </Text>
                <TextInput
                  value={city}
                  onChangeText={setCity}
                  placeholder="City"
                  placeholderTextColor={colors.inputPlaceholder}
                  style={[
                    styles.input,
                    {
                      color: colors.text,
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    },
                  ]}
                />
              </View>
              <View style={[styles.section, styles.rowItem]}>
                <Text style={[styles.label, { color: colors.textMuted }]}>
                  Country
                </Text>
                <TextInput
                  value={country}
                  onChangeText={setCountry}
                  placeholder="Country"
                  placeholderTextColor={colors.inputPlaceholder}
                  style={[
                    styles.input,
                    {
                      color: colors.text,
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    },
                  ]}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.section, styles.rowItem]}>
                <Text style={[styles.label, { color: colors.textMuted }]}>
                  Start date
                </Text>
                <TextInput
                  value={startDate}
                  onChangeText={setStartDate}
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor={colors.inputPlaceholder}
                  style={[
                    styles.input,
                    {
                      color: colors.text,
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    },
                  ]}
                />
              </View>
              <View style={[styles.section, styles.rowItem]}>
                <Text style={[styles.label, { color: colors.textMuted }]}>
                  End date
                </Text>
                <TextInput
                  value={endDate}
                  onChangeText={setEndDate}
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor={colors.inputPlaceholder}
                  style={[
                    styles.input,
                    {
                      color: colors.text,
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    },
                  ]}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.section, styles.rowItem]}>
                <Text style={[styles.label, { color: colors.textMuted }]}>
                  Budget
                </Text>
                <TextInput
                  value={budget}
                  onChangeText={setBudget}
                  placeholder="0"
                  keyboardType="numeric"
                  placeholderTextColor={colors.inputPlaceholder}
                  style={[
                    styles.input,
                    {
                      color: colors.text,
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    },
                  ]}
                />
              </View>
              <View style={[styles.section, styles.rowItem]}>
                <Text style={[styles.label, { color: colors.textMuted }]}>
                  Currency
                </Text>
                <TextInput
                  value={currency}
                  onChangeText={setCurrency}
                  placeholder="MDL"
                  autoCapitalize="characters"
                  placeholderTextColor={colors.inputPlaceholder}
                  style={[
                    styles.input,
                    {
                      color: colors.text,
                      backgroundColor: colors.background,
                      borderColor: colors.border,
                    },
                  ]}
                />
              </View>
            </View>

            <View
              style={[
                styles.visibilityRow,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.visibilityTitle, { color: colors.text }]}>
                  Public trip
                </Text>
                <Text
                  style={[
                    styles.visibilityText,
                    { color: colors.textSecondary },
                  ]}
                >
                  Enable if others should be able to see the trip.
                </Text>
              </View>
              <Switch value={isPublic} onValueChange={setIsPublic} />
            </View>

            <View style={styles.section}>
              <Text style={[styles.label, { color: colors.textMuted }]}>
                Status
              </Text>
              <View style={styles.statusWrap}>
                {STATUSES.map((item) => {
                  const active = normalizedStatus === item.value;
                  return (
                    <TouchableOpacity
                      key={item.value}
                      style={[
                        styles.statusChip,
                        {
                          backgroundColor: active
                            ? colors.text
                            : colors.background,
                          borderColor: active ? colors.text : colors.border,
                        },
                      ]}
                      onPress={() => {
                        if (currentTripId !== null) {
                          onChangeStatus(currentTripId, item.value);
                        }
                      }}
                      disabled={isSubmitting || currentTripId === null}
                    >
                      <Text
                        style={{
                          color: active
                            ? colors.textInverse
                            : colors.textSecondary,
                          fontWeight: "700",
                          fontSize: 12,
                        }}
                      >
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity
              style={[
                styles.deleteButton,
                {
                  backgroundColor: colors.error + "14",
                  borderColor: colors.error + "33",
                },
              ]}
              onPress={() => {
                if (currentTripId !== null) {
                  onDelete(currentTripId);
                }
              }}
              disabled={isSubmitting || currentTripId === null}
            >
              <Ionicons name="trash-outline" size={16} color={colors.error} />
              <Text style={[styles.deleteButtonText, { color: colors.error }]}>
                Delete
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.saveButton, { backgroundColor: colors.text }]}
              onPress={() => {
                if (currentTripId === null) {
                  return;
                }

                onSave({
                  id: currentTripId,
                  title: title.trim(),
                  description: description.trim() || undefined,
                  city: city.trim() || undefined,
                  country: country.trim() || undefined,
                  startDate: startDate.trim() || undefined,
                  endDate: endDate.trim() || undefined,
                  isPublic,
                  totalBudget: budget.trim() ? Number(budget) : undefined,
                  currency: currency.trim() || undefined,
                });
              }}
              disabled={isSubmitting || currentTripId === null}
            >
              <Text
                style={[styles.saveButtonText, { color: colors.textInverse }]}
              >
                Save changes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.42)",
    justifyContent: "center",
    padding: 16,
  },
  modalCard: {
    borderRadius: 24,
    borderWidth: 1,
    maxHeight: "88%",
    padding: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
  },
  closeButton: {
    padding: 6,
  },
  primaryAction: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  },
  primaryActionText: {
    fontSize: 14,
    fontWeight: "800",
  },
  section: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
  },
  textarea: {
    minHeight: 92,
    textAlignVertical: "top",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  rowItem: {
    flex: 1,
  },
  visibilityRow: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },
  visibilityTitle: {
    fontSize: 14,
    fontWeight: "800",
  },
  visibilityText: {
    fontSize: 12,
    marginTop: 3,
    lineHeight: 18,
  },
  statusWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  statusChip: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
  },
  footer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
  },
  deleteButton: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  deleteButtonText: {
    fontWeight: "800",
  },
  saveButton: {
    flex: 1.5,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: "800",
  },
});
