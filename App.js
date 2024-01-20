import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import AppStack from './frontend/src/navigation/AppStack';
import AppNav from './frontend/src/navigation/AppNav';

export default function App() {
  return (
    <AppNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
