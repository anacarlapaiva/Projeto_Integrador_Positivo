import React from "react";

import { Platform } from "react-native";
import { useTheme } from "styled-components";
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Teste from "../screens/TelaCrudEditarVendedor";
import TelaSelecionarCruds from "../screens/TelaSelecionarCruds";

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
        name="HomeStackScreen"
        component={StackScreen}
        options={{
          tabBarIcon: ({ color,size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />

      {/* <BottomTab.Screen
        name="Teste"
        component={Teste}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="building" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

export default AuthRoutes;
