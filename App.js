import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import AppStack from './frontend/src/navigation/AppStack';
import AppNav from './frontend/src/navigation/AppNav';
import {clearAll} from './backend/Database';

export default function App() {
  // const clear = async () => {
  //   await clearAll();
  // }
  // clear();

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
