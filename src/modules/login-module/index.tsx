import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as Gradients from '../../shared/Styles/Colors/gradients';

export default function LoginScreen({ navigation }: any) {

    return (
        <LinearGradient
            colors={Gradients.blackGradient}
            end={{ x: 0.5, y: 0.4 }}
            className="h-full w-full py-12 items-center justify-center px-10"
        >
            <Image
                className='w-full'
                source={require('../../shared/assets/logo-dakila.png')}
            />

            <View className="flex-1 w-full flex-col justify-center gap-y-3">
                <View>
                    <Text className="block text-sm font-medium leading-6 text-white60">Email address</Text>
                    <TextInput id="email" placeholder='Seu e-mail' className="w-full px-2 rounded-md border-0 py-1.5 text-grayDark bg-white60" />
                </View>

                <View>
                    <Text className="block text-sm font-medium leading-6 text-white60">Password</Text>
                    <TextInput id="password" placeholder='Sua senha' secureTextEntry={true} className="w-full px-2 rounded-md py-1.5 text-grayDark bg-white60" />
                </View>

                <TouchableHighlight onPress={() => { navigation.navigate('App') }}>
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        className="w-full h-10 mt-1 rounded-md items-center justify-center px-6" >
                        <Text className='text-black'>ENTRAR</Text>
                    </LinearGradient>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { console.log('esqueci') }}>
                    <Text className="text-center text-xs text-white">
                        ESQUECEU SUA SENHA?
                    </Text>
                </TouchableHighlight>
            </View>

        </LinearGradient>
    );
}