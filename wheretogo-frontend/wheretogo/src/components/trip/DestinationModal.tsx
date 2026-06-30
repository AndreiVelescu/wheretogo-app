import { useAppTheme } from "@/src/contexts/ThemeContext";
import type { DestinationItem } from "@/src/features/trip/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../ui/theme";

type Props = {
  visible: boolean;
  onClose: () => void;
  destinations: DestinationItem[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function DestinationModal({
  visible,
  onClose,
  destinations,
  selectedId,
  onSelect,
}: Props) {
  const { colors } = useAppTheme();
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable
          style={[styles.modal, { backgroundColor: colors.card }]}
          onPress={() => {}}
        >
          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <Text style={[styles.title, { color: colors.text }]}>
              Alege Destinația
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>

          <ScrollView style={{ maxHeight: 420 }}>
            {destinations.map((d) => {
              const selected = d.id === selectedId;
              return (
                <TouchableOpacity
                  key={d.id}
                  style={[
                    styles.row,
                    { borderBottomColor: colors.borderLight },
                    selected && { backgroundColor: colors.primarySoft },
                  ]}
                  onPress={() => {
                    onSelect(d.id);
                    onClose();
                  }}
                >
                  <Text style={styles.flag}>{d.flag}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.label, { color: colors.text }]}>
                      {d.label}
                    </Text>
                    <Text
                      style={[styles.country, { color: colors.textSecondary }]}
                    >
                      {d.country}
                    </Text>
                    <Text style={[styles.desc, { color: colors.textMuted }]}>
                      {d.description}
                    </Text>
                  </View>
                  {selected ? (
                    <Ionicons
                      name="checkmark-circle"
                      size={24}
                      color={colors.primary}
                    />
                  ) : null}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Pressable>
      </Pressable>
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
    backgroundColor: theme.colors.card,
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: { fontSize: 18, fontWeight: "800", color: theme.colors.text },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
  },
  rowSelected: { backgroundColor: theme.colors.primarySoft },
  flag: { fontSize: 24, marginRight: 12 },
  label: { fontSize: 16, fontWeight: "800", color: theme.colors.text },
  country: {
    fontSize: 12,
    color: theme.colors.subtext,
    marginTop: 2,
    fontWeight: "600",
  },
  desc: { fontSize: 11, color: theme.colors.muted, marginTop: 2 },
});
