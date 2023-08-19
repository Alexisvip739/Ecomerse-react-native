import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTap from './src/components/Navigation/Tab/NavigationTap';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#111D38" barStyle="light-content" />
      <NavigationTap/>
    </NavigationContainer>
  );
}

