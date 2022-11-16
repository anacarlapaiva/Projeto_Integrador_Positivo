import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from "./src/routes";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          style='dark'
        />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

