// // app/BottomNavBar/_layout.tsx
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.activeLabel]}>
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={26}
              color={focused ? "#00a99d" : "#9e9e9e"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="slots"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.activeLabel]}>
              Slots
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconBackground,
              ]}
            >
              <MaterialIcons
                name="add-box"
                size={24}
                color={focused ? "#fff" : "#9e9e9e"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="payouts"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.activeLabel]}>
              Payouts
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="wallet"
              size={22}
              color={focused ? "#00a99d" : "#9e9e9e"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.activeLabel]}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle"
              size={26}
              color={focused ? "#00a99d" : "#9e9e9e"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    height: 70,
  },
  label: {
    fontSize: 12,
    color: "#9e9e9e",
  },
  activeLabel: {
    color: "#00a99d",
    fontWeight: "600",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconBackground: {
    backgroundColor: "#00a99d",
    padding: 6,
    borderRadius: 8,
  },
});
