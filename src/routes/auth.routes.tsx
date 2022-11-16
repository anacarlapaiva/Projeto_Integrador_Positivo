import React from "react";

import { Platform } from "react-native";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Teste from "../screens/Teste";

const BottomTab = createBottomTabNavigator();

export function AuthRoutes() {
  const theme = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.active_icon,
        tabBarStyle: {
          height: 65,
          paddingVertical: Platform.OS === "ios" ? 10 : 0,
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Teste"
        component={Teste}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="star" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />

    </BottomTab.Navigator>
  );
}