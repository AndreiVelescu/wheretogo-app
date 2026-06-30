import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import {
  formatNotificationTime,
  getNotificationIcon,
  Notification,
  useDeleteNotification,
  useMarkAllNotificationsRead,
  useMarkNotificationRead,
  useNotifications,
} from "@/src/features/notifications";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationsScreen() {
  const { isAuthenticated } = useAuth();
  const { colors } = useAppTheme();
  const { notifications, loading, error, refetch } = useNotifications({
    enabled: isAuthenticated,
  });
  const { markAsRead } = useMarkNotificationRead();
  const { markAllAsRead, loading: markingAll } = useMarkAllNotificationsRead();
  const { deleteNotification } = useDeleteNotification();

  const handleNotificationPress = useCallback(
    async (notification: Notification) => {
      // Mark as read
      if (!notification.isRead) {
        await markAsRead(notification.id);
      }

      // Navigate based on notification type and related data
      if (notification.trip?.id) {
        router.push({
          pathname: "/trip/itinerary",
          params: { id: String(notification.trip.id) },
        });
      } else if (notification.location?.id) {
        router.push({
          pathname: "/destination/[id]",
          params: { id: String(notification.location.id) },
        });
      }
    },
    [markAsRead]
  );

  const renderRightActions = useCallback(
    (notificationId: number) => (
      <TouchableOpacity
        style={styles.deleteAction}
        onPress={() => deleteNotification(notificationId)}
      >
        <Ionicons name="trash-outline" size={22} color="#fff" />
      </TouchableOpacity>
    ),
    [deleteNotification]
  );

  const renderNotification = useCallback(
    ({ item }: { item: Notification }) => {
      const icon = getNotificationIcon(item.type);
      const timeAgo = formatNotificationTime(item.createdAt);

      return (
        <Swipeable
          renderRightActions={() => renderRightActions(item.id)}
          overshootRight={false}
        >
          <TouchableOpacity
            style={[
              styles.notificationCard,
              {
                backgroundColor: colors.card,
                borderBottomColor: colors.separator,
              },
              !item.isRead && { backgroundColor: colors.primarySoft },
            ]}
            onPress={() => handleNotificationPress(item)}
            activeOpacity={0.7}
          >
            {/* Icon */}
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: `${icon.color}20` },
              ]}
            >
              <Ionicons name={icon.name as any} size={22} color={icon.color} />
            </View>

            {/* Content */}
            <View style={styles.content}>
              <Text
                style={[styles.title, { color: colors.text }]}
                numberOfLines={1}
              >
                {item.title}
              </Text>
              <Text
                style={[styles.body, { color: colors.textMuted }]}
                numberOfLines={2}
              >
                {item.body}
              </Text>

              {/* Meta info */}
              <View style={styles.meta}>
                <Text style={[styles.time, { color: colors.textSecondary }]}>
                  {timeAgo}
                </Text>
                {item.trip && (
                  <>
                    <View
                      style={[
                        styles.dot,
                        { backgroundColor: colors.borderLight },
                      ]}
                    />
                    <Text
                      style={[styles.tripName, { color: colors.textMuted }]}
                      numberOfLines={1}
                    >
                      {item.trip.title}
                    </Text>
                  </>
                )}
              </View>
            </View>

            {/* Unread indicator */}
            {!item.isRead && (
              <View
                style={[styles.unreadDot, { backgroundColor: colors.primary }]}
              />
            )}
          </TouchableOpacity>
        </Swipeable>
      );
    },
    [handleNotificationPress, renderRightActions]
  );

  const unreadCount = notifications.filter(
    (n: Notification) => !n.isRead
  ).length;

  if (!isAuthenticated) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        <View style={styles.emptyState}>
          <Ionicons
            name="notifications-off-outline"
            size={64}
            color={colors.borderLight}
          />
          <Text style={[styles.emptyTitle, { color: colors.text }]}>
            Autentifică-te
          </Text>
          <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
            Trebuie să te autentifici pentru a vedea notificările.
          </Text>
          <TouchableOpacity
            style={[styles.loginButton, { backgroundColor: colors.primary }]}
            onPress={() => router.push("/auth/login")}
          >
            <Text style={styles.loginButtonText}>Autentificare</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: colors.card, borderBottomColor: colors.border },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.backButton,
            { backgroundColor: colors.backgroundSecondary },
          ]}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Notificări
        </Text>
        {unreadCount > 0 && (
          <TouchableOpacity
            style={styles.markAllButton}
            onPress={markAllAsRead}
            disabled={markingAll}
          >
            {markingAll ? (
              <ActivityIndicator size="small" color="#E53935" />
            ) : (
              <Text style={[styles.markAllText, { color: colors.primary }]}>
                Marchează toate
              </Text>
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderNotification}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refetch}
            tintColor={colors.primary}
          />
        }
        ListEmptyComponent={
          !loading ? (
            <View style={styles.emptyState}>
              <Ionicons
                name="notifications-outline"
                size={64}
                color={colors.borderLight}
              />
              <Text style={[styles.emptyTitle, { color: colors.text }]}>
                Nicio notificare
              </Text>
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                Vei primi notificări când cineva te adaugă la un trip sau când
                primești mesaje.
              </Text>
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginLeft: 12,
  },
  markAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  markAllText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#E53935",
  },
  list: {
    paddingVertical: 8,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  notificationUnread: {
    backgroundColor: "#FEF2F2",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  body: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
    lineHeight: 20,
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  time: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 6,
  },
  tripName: {
    fontSize: 12,
    color: "#6B7280",
    flex: 1,
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#E53935",
    marginLeft: 8,
  },
  deleteAction: {
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingTop: 80,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#374151",
    marginTop: 16,
  },
  emptyText: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },
  loginButton: {
    backgroundColor: "#E53935",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
