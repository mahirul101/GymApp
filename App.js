import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './frontend/src/navigation/AppStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppStack />
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
