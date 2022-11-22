import React from "react";

import { Platform } from "react-native";
import { useTheme } from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import TelaSelecionarCruds from "../screens/TelaSelecionarCruds";
import TelaImobiliaria from "../screens/TelaImobiliaria";

const BottomTab = createBottomTabNavigator();

export function AuthRoutes() {
  const theme = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.active_icon,
        tabBarInactiveTintColor: theme.colors.primary_light,
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="TelaSelecionarCruds"
        component={TelaSelecionarCruds}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="edit" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />

      <BottomTab.Screen
        name="TelaImobiliaria"
        component={TelaImobiliaria}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="building-o" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default AuthRoutes;
