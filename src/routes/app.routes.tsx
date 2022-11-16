import React from "react";

import { Platform } from "react-native";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Teste from "../screens/Teste";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Teste" component={Teste} />
    </Stack.Navigator>
  );
}

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

      <BottomTab.Screen
        name="HomeStackScreen"
        component={StackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="ticket-alt" size={20} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />

    </BottomTab.Navigator>
  );
}

export default AuthRoutes


