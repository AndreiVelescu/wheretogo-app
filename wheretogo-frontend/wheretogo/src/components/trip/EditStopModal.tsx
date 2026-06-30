import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../ui/theme";

export interface StopData {
  id?: number;
  order: number;
  customName?: string;
  address?: string;
  lat?: number;
  lng?: number;
  arrivalTime?: string;
  departureTime?: string;
  transportMode?: string;
  notes?: string;
  location?: {
    id: number;
    name: string;
    type?: string;
    rating?: number;
    photos?: string[];
  };
}

interface Props {
  visible: boolean;
  onClose: () => void;
  stop: StopData | null;
  onSave: (updatedStop: StopData) => Promise<void>;
  onDelete?: (stopId: number) => Promise<void>;
  onChangeLocation?: () => void;
}

const TRANSPORT_MODES = [
  { id: "walking", label: "Pe jos", icon: "walk" },
  { id: "driving", label: "Cu mașina", icon: "car" },
  { id: "transit", label: "Transport public", icon: "bus" },
  { id: "bicycle", label: "Bicicletă", icon: "bicycle" },
  { id: "taxi", label: "Taxi/Uber", icon: "car-sport" },
];

const TRANSPORT_MODE_TO_API: Record<string, string> = {
  walking: "WALK",
  driving: "CAR",
  transit: "PUBLIC_TRANSPORT",
  bicycle: "BIKE",
  taxi: "TAXI",
};

const TRANSPORT_MODE_FROM_API: Record<string, string> = {
  WALK: "walking",
  CAR: "driving",
  PUBLIC_TRANSPORT: "transit",
  BIKE: "bicycle",
  TAXI: "taxi",
  OTHER: "walking",
};

export default function EditStopModal({
  visible,
  onClose,
  stop,
  onSave,
  onDelete,
  onChangeLocation,
}: Props) {
  const [customName, setCustomName] = useState("");
  const [address, setAddress] = useState("");
  const [arrivalTime, setArrivalTime] = useState<Date | null>(null);
  const [departureTime, setDepartureTime] = useState<Date | null>(null);
  const [transportMode, setTransportMode] = useState("walking");
  const [notes, setNotes] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [activePicker, setActivePicker] = useState<
    "arrival" | "departure" | null
  >(null);
  const { colors } = useAppTheme();

  useEffect(() => {
    if (stop) {
      setCustomName(stop.customName || stop.location?.name || "");
      setAddress(stop.address || "");
      setArrivalTime(stop.arrivalTime ? parseTime(stop.arrivalTime) : null);
      setDepartureTime(
        stop.departureTime ? parseTime(stop.departureTime) : null,
      );
      setTransportMode(
        stop.transportMode
          ? TRANSPORT_MODE_FROM_API[stop.transportMode] || "walking"
          : "walking",
      );
      setNotes(stop.notes || "");
      setActivePicker(null);
    }
  }, [stop]);

  const parseTime = (timeStr: string): Date => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    const date = new Date();
    date.setHours(hours || 0, minutes || 0, 0, 0);
    return date;
  };

  const formatTime = (date: Date | null): string => {
    if (!date) return "";
    return `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes(),
    ).padStart(2, "0")}`;
  };

  const handleSave = async () => {
    if (!stop) return;

    setIsSaving(true);
    try {
      await onSave({
        ...stop,
        customName: customName.trim() || stop.location?.name || "Locație",
        address: address.trim(),
        arrivalTime: formatTime(arrivalTime),
        departureTime: formatTime(departureTime),
        transportMode: TRANSPORT_MODE_TO_API[transportMode] || "WALK",
        notes: notes.trim(),
      });
      onClose();
    } catch (err: any) {
      Alert.alert("Eroare", err.message || "Nu am putut salva modificările.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = () => {
    if (!stop?.id || !onDelete) return;

    Alert.alert(
      "Șterge oprirea",
      "Sigur vrei să elimini această oprire din itinerar?",
      [
        { text: "Anulează", style: "cancel" },
        {
          text: "Șterge",
          style: "destructive",
          onPress: async () => {
            try {
              await onDelete(stop.id!);
              onClose();
            } catch (err: any) {
              Alert.alert("Eroare", err.message);
            }
          },
        },
      ],
    );
  };

  if (!stop) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, { backgroundColor: colors.background }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>
              Editează oprirea
            </Text>
            <TouchableOpacity
              style={[styles.closeBtn, { backgroundColor: colors.card }]}
              onPress={onClose}
            >
              <Ionicons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
          >
            {/* Location Info */}
            <TouchableOpacity
              style={[styles.locationCard, { backgroundColor: colors.card }]}
              onPress={onChangeLocation}
              disabled={!onChangeLocation}
            >
              <View style={styles.locationInfo}>
                <View
                  style={[
                    styles.orderBadge,
                    { backgroundColor: colors.primary },
                  ]}
                >
                  <Text style={styles.orderText}>{stop.order}</Text>
                </View>
                <View style={styles.locationTextBox}>
                  <Text style={[styles.locationName, { color: colors.text }]}>
                    {stop.location?.name || customName || "Locație"}
                  </Text>
                  {stop.location?.type && (
                    <Text
                      style={[styles.locationType, { color: colors.textMuted }]}
                    >
                      {stop.location.type}
                    </Text>
                  )}
                </View>
              </View>
              {onChangeLocation && (
                <View
                  style={[
                    styles.changeLocationBtn,
                    { backgroundColor: colors.primarySoft },
                  ]}
                >
                  <Ionicons
                    name="swap-horizontal"
                    size={18}
                    color={colors.primary}
                  />
                  <Text
                    style={[
                      styles.changeLocationText,
                      { color: colors.primary },
                    ]}
                  >
                    Schimbă
                  </Text>
                </View>
              )}
            </TouchableOpacity>

            {/* Custom Name */}
            <View style={styles.inputGroup}>
              <Text
                style={[styles.inputLabel, { color: colors.textSecondary }]}
              >
                Nume personalizat
              </Text>
              <TextInput
                style={[
                  styles.textInput,
                  { backgroundColor: colors.card, color: colors.text },
                ]}
                value={customName}
                onChangeText={setCustomName}
                placeholder="ex: Prânz la..."
                placeholderTextColor={colors.textMuted}
              />
            </View>

            {/* Address */}
            <View style={styles.inputGroup}>
              <Text
                style={[styles.inputLabel, { color: colors.textSecondary }]}
              >
                Adresă
              </Text>
              <TextInput
                style={[
                  styles.textInput,
                  { backgroundColor: colors.card, color: colors.text },
                ]}
                value={address}
                onChangeText={setAddress}
                placeholder="Adresa completă"
                placeholderTextColor={colors.textMuted}
              />
            </View>

            {/* Time Selection */}
            <View style={styles.timeRow}>
              <View style={styles.timeGroup}>
                <Text
                  style={[styles.inputLabel, { color: colors.textSecondary }]}
                >
                  Ora sosire
                </Text>
                <TouchableOpacity
                  style={[styles.timeInput, { backgroundColor: colors.card }]}
                  onPress={() => setActivePicker("arrival")}
                >
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color={colors.textSecondary}
                  />
                  <Text
                    style={[
                      styles.timeText,
                      { color: colors.text },
                      !arrivalTime && { color: colors.textMuted },
                    ]}
                  >
                    {arrivalTime ? formatTime(arrivalTime) : "HH:MM"}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.timeGroup}>
                <Text
                  style={[styles.inputLabel, { color: colors.textSecondary }]}
                >
                  Ora plecare
                </Text>
                <TouchableOpacity
                  style={[styles.timeInput, { backgroundColor: colors.card }]}
                  onPress={() => setActivePicker("departure")}
                >
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color={colors.textSecondary}
                  />
                  <Text
                    style={[
                      styles.timeText,
                      { color: colors.text },
                      !departureTime && { color: colors.textMuted },
                    ]}
                  >
                    {departureTime ? formatTime(departureTime) : "HH:MM"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Time Pickers */}
            {activePicker === "arrival" && (
              <DateTimePicker
                value={arrivalTime || new Date()}
                mode="time"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(_, date) => {
                  setActivePicker(Platform.OS === "ios" ? "arrival" : null);
                  if (date) setArrivalTime(date);
                }}
              />
            )}

            {activePicker === "departure" && (
              <DateTimePicker
                value={departureTime || new Date()}
                mode="time"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(_, date) => {
                  setActivePicker(Platform.OS === "ios" ? "departure" : null);
                  if (date) setDepartureTime(date);
                }}
              />
            )}

            {/* Transport Mode */}
            <View style={styles.inputGroup}>
              <Text
                style={[styles.inputLabel, { color: colors.textSecondary }]}
              >
                Mod de transport
              </Text>
              <View style={styles.transportRow}>
                {TRANSPORT_MODES.map((mode) => (
                  <TouchableOpacity
                    key={mode.id}
                    style={[
                      styles.transportBtn,
                      { backgroundColor: colors.card },
                      transportMode === mode.id && styles.transportBtnActive,
                    ]}
                    onPress={() => setTransportMode(mode.id)}
                  >
                    <Ionicons
                      name={mode.icon as any}
                      size={20}
                      color={
                        transportMode === mode.id
                          ? "#fff"
                          : colors.textSecondary
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <Text
                style={[styles.transportLabel, { color: colors.textMuted }]}
              >
                {TRANSPORT_MODES.find((m) => m.id === transportMode)?.label}
              </Text>
            </View>

            {/* Notes */}
            <View style={styles.inputGroup}>
              <Text
                style={[styles.inputLabel, { color: colors.textSecondary }]}
              >
                Note
              </Text>
              <TextInput
                style={[
                  styles.textInput,
                  styles.textArea,
                  { backgroundColor: colors.card, color: colors.text },
                ]}
                value={notes}
                onChangeText={setNotes}
                placeholder="Adaugă note pentru această oprire..."
                placeholderTextColor={colors.textMuted}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>
          </ScrollView>

          {/* Actions */}
          <View style={[styles.actions, { borderTopColor: colors.border }]}>
            {onDelete && stop.id && (
              <TouchableOpacity
                style={[
                  styles.deleteBtn,
                  { backgroundColor: colors.errorSoft },
                ]}
                onPress={handleDelete}
              >
                <Ionicons name="trash-outline" size={20} color={colors.error} />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[
                styles.saveBtn,
                { backgroundColor: colors.primary },
                isSaving && styles.saveBtnDisabled,
              ]}
              onPress={handleSave}
              disabled={isSaving}
            >
              <Text style={styles.saveBtnText}>
                {isSaving ? "Se salvează..." : "Salvează modificările"}
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
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: theme.colors.bg,
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
    maxHeight: "90%",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: theme.colors.text,
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.card,
    alignItems: "center",
    justifyContent: "center",
    ...theme.shadow.soft,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  locationCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: 14,
    marginBottom: 16,
    ...theme.shadow.soft,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  orderBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  orderText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  locationTextBox: {
    flex: 1,
  },
  locationName: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.text,
  },
  locationType: {
    fontSize: 13,
    color: theme.colors.muted,
    marginTop: 2,
  },
  changeLocationBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.primarySoft,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: theme.radius.sm,
    gap: 6,
  },
  changeLocationText: {
    fontSize: 13,
    fontWeight: "600",
    color: theme.colors.primary,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: theme.colors.subtext,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: theme.colors.text,
    ...theme.shadow.soft,
  },
  textArea: {
    minHeight: 80,
    paddingTop: 12,
  },
  timeRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  timeGroup: {
    flex: 1,
  },
  timeInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 8,
    ...theme.shadow.soft,
  },
  timeText: {
    fontSize: 15,
    fontWeight: "600",
    color: theme.colors.text,
  },
  timePlaceholder: {
    color: theme.colors.muted,
  },
  transportRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 8,
  },
  transportBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: theme.colors.card,
    alignItems: "center",
    justifyContent: "center",
    ...theme.shadow.soft,
  },
  transportBtnActive: {
    backgroundColor: theme.colors.primary,
  },
  transportLabel: {
    fontSize: 13,
    color: theme.colors.muted,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  deleteBtn: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.sm,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  saveBtn: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: theme.radius.sm,
    alignItems: "center",
  },
  saveBtnDisabled: {
    opacity: 0.7,
  },
  saveBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
