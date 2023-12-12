import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/configs/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppProvider from './src/contexts/app-context';

export default function App() {
  return (
    <>

      <NavigationContainer>
        <AppProvider>
          <StackNavigator />
        </AppProvider>
      </NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black', maxHeight: 30 }}>
      </SafeAreaView>
    </>
  );
}