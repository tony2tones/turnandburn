import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#0f172a',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 64 + insets.bottom,
                    paddingBottom: insets.bottom + 10,
                },
                tabBarActiveTintColor: '#f97316',
                tabBarInactiveTintColor: '#475569',
                tabBarButton: (props) => (
                    <PlatformPressable
                        {...props}
                        onPressIn={(ev) => {
                            Haptics.selectionAsync();
                            props.onPressIn?.(ev);
                        }}
                    />
                ),
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="mood"
                options={{
                    title: 'Mood',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="happy-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
