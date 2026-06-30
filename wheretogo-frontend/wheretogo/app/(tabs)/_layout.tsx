import AppHeader from "@/src/components/AppHeader";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabsLayout() {
  const { isAuthenticated } = useAuth();
  const { colors } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        animation: "shift",
        lazy: false,
        header: () => <AppHeader />,

        tabBarStyle: {
          height: "6%",
          paddingBottom: 80,
          paddingTop: 10,
          borderTopColor: colors.tabBarBorder,
          backgroundColor: colors.tabBar,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        },
      }}
    >
      <Tabs.Protected
        guard={(() => {
          if (!isAuthenticated) {
            return false;
          }
          return true;
        })()}
        children={
          <Tabs.Screen
            name="feed"
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={25} color={color} />
              ),
            }}
          />
        }
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="search-outline" size={29} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={29} color={color} />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="messages"
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: isAuthenticated ? "" : "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={isAuthenticated ? "person-outline" : "log-in-outline"}
              size={29}
              color={color}
            />
          ),
          tabBarButton: ({ children, style, ...rest }) => (
            <TouchableOpacity
              style={style}
              onPress={() => {
                if (isAuthenticated) {
                  router.push("/(tabs)/profile");
                } else {
                  router.push("/auth/login");
                }
              }}
            >
              {children}
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
