import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/configs/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    <SafeAreaView style={{ flex: 1,  maxHeight:30, backgroundColor: 'black' }}></SafeAreaView>
    </>
  );
}