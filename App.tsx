import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Gradients from './src/shared/Styles/Colors/gradients';


export default function App() {
  return (
    <LinearGradient
      colors={Gradients.blackGradient}
      end={{x:0.5, y:0.4}}
      className="h-full w-full items-center justify-center"
    >
      <View className='w-full h-16 max-w-xs rounded-lg bg-white60' />
      <View className='w-full h-16 max-w-xs rounded-lg bg-gray30' />
      <View className='w-full h-16 max-w-xs rounded-lg bg-grayLight' />
      <View className='w-full h-16 max-w-xs rounded-lg bg-grayDark' />
      <View className='w-full h-16 max-w-xs rounded-lg bg-gold10' />
      <View className='w-full h-16 max-w-xs rounded-lg bg-black' />
      <View className='w-full h-16 max-w-xs rounded-lg bg-redAlert' />
      <View className='w-full h-16 max-w-xs rounded-lg bg-greenActive' />
      <View className='w-full h-16 max-w-xs rounded-lg bg-blueGraphs' />
      <StatusBar style="light" />
    </LinearGradient>
  );
}