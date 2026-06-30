import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { theme } from "../ui/theme";

export interface Collaborator {
  id: number;
  tripId: number;
  userId: number;
  role: "viewer" | "editor" | "owner" | "VIEWER" | "EDITOR" | "OWNER";
  createdAt: string;
  user?: {
    id: number;
    name: string;
    email?: string;
    avatar?: string;
  };
}

const normalizeRole = (role: string): "viewer" | "editor" | "owner" => {
  return role.toLowerCase() as "viewer" | "editor" | "owner";
};

interface Props {
  visible: boolean;
  onClose: () => void;
  collaborators: Collaborator[];
  onInvite: (email: string, role: "viewer" | "editor") => Promise<void>;
  onRemove: (collaboratorId: number) => Promise<void>;
  onChangeRole: (
    collaboratorId: number,
    newRole: "viewer" | "editor",
  ) => Promise<void>;
  isOwner: boolean;
  /** Position of the trigger button for origin animation */
  anchorPosition?: { x: number; y: number; width: number; height: number };
}

const roleLabels: Record<string, string> = {
  viewer: "Vizualizare",
  editor: "Editare",
  owner: "Owner",
};

const roleColors: Record<string, { bg: string; text: string }> = {
  viewer: { bg: "#E5E7EB", text: "#6B7280" },
  editor: { bg: "#DBEAFE", text: "#2563EB" },
  owner: { bg: "#FEE2E2", text: "#DC2626" },
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Panel final position
const PANEL_TOP = 100;
const PANEL_RIGHT = 16;
const PANEL_WIDTH = Math.min(SCREEN_WIDTH - 32, 360);

export default function CollaboratorsModal({
  visible,
  onClose,
  collaborators,
  onInvite,
  onRemove,
  onChangeRole,
  isOwner,
  anchorPosition,
}: Props) {
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<"viewer" | "editor">(
    "editor",
  );
  const [isInviting, setIsInviting] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const { colors, isDark } = useAppTheme();

  // Animation values
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  // Calculate origin offset from button to panel
  // Panel is at (SCREEN_WIDTH - PANEL_RIGHT - PANEL_WIDTH, PANEL_TOP)
  // Button is at (anchorPosition.x, anchorPosition.y)
  const panelLeft = SCREEN_WIDTH - PANEL_RIGHT - PANEL_WIDTH;

  // Calculate offsets - these need to be recalculated when anchorPosition changes
  const originOffsetX = React.useMemo(() => {
    if (!anchorPosition) return PANEL_WIDTH / 2;
    // Button center X relative to panel left edge
    const buttonCenterX = anchorPosition.x + anchorPosition.width / 2;
    return buttonCenterX - panelLeft - PANEL_WIDTH / 2;
  }, [anchorPosition, panelLeft]);

  const originOffsetY = React.useMemo(() => {
    if (!anchorPosition) return -20;
    // Button center Y relative to panel top
    const buttonCenterY = anchorPosition.y + anchorPosition.height / 2;
    return buttonCenterY - PANEL_TOP - 100; // offset by half estimated panel height
  }, [anchorPosition]);

  // Debug log
  useEffect(() => {
    if (visible && anchorPosition) {
      console.log("[CollaboratorsModal] anchorPosition:", anchorPosition);
      console.log(
        "[CollaboratorsModal] originOffsetX:",
        originOffsetX,
        "originOffsetY:",
        originOffsetY,
      );
    }
  }, [visible, anchorPosition, originOffsetX, originOffsetY]);

  useEffect(() => {
    if (visible) {
      // Reset animations to 0 first, then start rendering
      scaleAnim.setValue(0);
      opacityAnim.setValue(0);
      setShouldRender(true);

      // Small delay to ensure component is rendered before animating
      requestAnimationFrame(() => {
        Animated.parallel([
          Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            tension: 100,
            friction: 12,
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }),
        ]).start();
      });
    } else if (shouldRender) {
      // Animate out, then stop rendering
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShouldRender(false);
      });
    }
  }, [visible]);

  const handleInvite = async () => {
    if (!email.trim()) {
      Alert.alert("Email necesar", "Introdu un email valid.");
      return;
    }
    setIsInviting(true);
    try {
      await onInvite(email.trim(), selectedRole);
      setEmail("");
      Alert.alert("Succes", "Invitație trimisă!");
    } catch (err: any) {
      Alert.alert("Eroare", err.message || "Nu am putut trimite invitația.");
    } finally {
      setIsInviting(false);
    }
  };

  const handleRemove = (collab: Collaborator) => {
    Alert.alert(
      "Elimină colaborator",
      `Elimini pe ${collab.user?.name || "acest colaborator"}?`,
      [
        { text: "Anulează", style: "cancel" },
        {
          text: "Elimină",
          style: "destructive",
          onPress: () => onRemove(collab.userId),
        },
      ],
    );
  };

  const handleRoleToggle = async (collab: Collaborator) => {
    const nextRole =
      normalizeRole(collab.role) === "viewer" ? "editor" : "viewer";
    try {
      await onChangeRole(collab.id, nextRole);
    } catch (err: any) {
      Alert.alert("Eroare", err.message || "Nu am putut schimba rolul.");
    }
  };

  if (!shouldRender) return null;

  return (
    <View style={styles.container} pointerEvents="auto">
      {/* Backdrop */}
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.backdrop, { opacity: opacityAnim }]} />
      </TouchableWithoutFeedback>

      {/* Panel - expands from button position */}
      <Animated.View
        style={[
          styles.panel,
          {
            backgroundColor: colors.card,
            opacity: opacityAnim,
            transform: [
              // Scale first, then translate - this creates "expand from point" effect
              { scale: scaleAnim },
              {
                translateX: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [originOffsetX * 0.5, 1], // Dampen the offset
                }),
              },
              {
                translateY: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [originOffsetY * 0.5, 0], // Dampen the offset
                }),
              },
            ],
          },
        ]}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View
              style={[
                styles.iconCircle,
                { backgroundColor: colors.primarySoft },
              ]}
            >
              <Ionicons name="people" size={18} color={colors.primary} />
            </View>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>
                Colaboratori
              </Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                {collaborators.length}{" "}
                {collaborators.length === 1 ? "persoană" : "persoane"}
              </Text>
            </View>
          </View>
        </View>

        {/* Collaborators List */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {collaborators.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="people-outline" size={40} color="#D1D5DB" />
              <Text style={styles.emptyText}>Niciun colaborator încă</Text>
            </View>
          ) : (
            collaborators.map((collab) => (
              <View
                key={collab.id}
                style={[
                  styles.collaboratorCard,
                  {
                    backgroundColor:
                      colors.backgroundSecondary || colors.borderLight,
                  },
                ]}
              >
                <View
                  style={[styles.avatar, { backgroundColor: colors.primary }]}
                >
                  <Text style={styles.avatarText}>
                    {(collab.user?.name || "U")[0].toUpperCase()}
                  </Text>
                </View>

                <View style={styles.info}>
                  <Text
                    style={[styles.name, { color: colors.text }]}
                    numberOfLines={1}
                  >
                    {collab.user?.name || "Utilizator"}
                  </Text>
                  <Text
                    style={[styles.email, { color: colors.textSecondary }]}
                    numberOfLines={1}
                  >
                    {collab.user?.email || `ID: ${collab.userId}`}
                  </Text>
                </View>

                <View
                  style={[
                    styles.roleBadge,
                    {
                      backgroundColor:
                        roleColors[normalizeRole(collab.role)].bg,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.roleText,
                      { color: roleColors[normalizeRole(collab.role)].text },
                    ]}
                  >
                    {roleLabels[normalizeRole(collab.role)]}
                  </Text>
                </View>

                {isOwner && normalizeRole(collab.role) !== "owner" && (
                  <View style={styles.actionsRow}>
                    <TouchableOpacity
                      style={[
                        styles.roleSwapBtn,
                        {
                          backgroundColor:
                            normalizeRole(collab.role) === "viewer"
                              ? "#DBEAFE"
                              : "#E5E7EB",
                        },
                      ]}
                      onPress={() => handleRoleToggle(collab)}
                    >
                      <Ionicons
                        name={
                          normalizeRole(collab.role) === "viewer"
                            ? "create-outline"
                            : "eye-outline"
                        }
                        size={14}
                        color={
                          normalizeRole(collab.role) === "viewer"
                            ? "#2563EB"
                            : "#6B7280"
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.removeBtn}
                      onPress={() => handleRemove(collab)}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={16}
                        color="#EF4444"
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            ))
          )}
        </ScrollView>

        {/* Invite Section */}
        {isOwner && (
          <View style={styles.inviteSection}>
            <View
              style={[styles.divider, { backgroundColor: colors.border }]}
            />
            <Text style={[styles.inviteLabel, { color: colors.textSecondary }]}>
              Invită colaborator
            </Text>
            <View style={styles.inviteRow}>
              <TextInput
                style={[
                  styles.emailInput,
                  { backgroundColor: colors.borderLight, color: colors.text },
                ]}
                placeholder="Email..."
                placeholderTextColor={colors.textMuted}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={[
                  styles.roleToggle,
                  selectedRole === "editor" && styles.roleToggleActive,
                ]}
                onPress={() =>
                  setSelectedRole(
                    selectedRole === "viewer" ? "editor" : "viewer",
                  )
                }
              >
                <Ionicons
                  name={selectedRole === "viewer" ? "eye" : "create"}
                  size={16}
                  color={
                    selectedRole === "editor" ? "#fff" : theme.colors.primary
                  }
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[styles.inviteBtn, isInviting && styles.inviteBtnDisabled]}
              onPress={handleInvite}
              disabled={isInviting}
            >
              {isInviting ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <>
                  <Ionicons name="person-add" size={16} color="#fff" />
                  <Text style={styles.inviteBtnText}>Trimite invitație</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* Bottom pill indicator */}
        <View style={styles.bottomPill} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  panel: {
    position: "absolute",
    top: 100,
    right: 16,
    width: SCREEN_WIDTH - 32,
    maxWidth: 360,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 1,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    maxHeight: 240,
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    gap: 8,
  },
  collaboratorCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 14,
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "600",
  },
  email: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 2,
  },
  roleBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  roleText: {
    fontSize: 11,
    fontWeight: "600",
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 8,
  },
  roleSwapBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  removeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 32,
    gap: 8,
  },
  emptyText: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  inviteSection: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginBottom: 12,
  },
  inviteLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6B7280",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  inviteRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },
  emailInput: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#111827",
  },
  roleToggle: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: theme.colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  roleToggleActive: {
    backgroundColor: theme.colors.primary,
  },
  inviteBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    gap: 6,
  },
  inviteBtnDisabled: {
    opacity: 0.6,
  },
  inviteBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  bottomPill: {
    width: 36,
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 12,
  },
});
