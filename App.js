import React, {useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import AppStack from './frontend/src/navigation/AppStack';
import AppNav from './frontend/src/navigation/AppNav';
import {clearAll} from './backend/Database';
import {UserProvider} from './backend/User';
import Loading from './frontend/src/components/Loading';

export default function App() {

  // const clear = async () => {
  //   await clearAll();
  // }
  // clear();
  
  return (
    <UserProvider>
        <AppNav />
    </UserProvider>
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
