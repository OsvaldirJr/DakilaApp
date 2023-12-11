import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as Gradients from '../../../shared/Styles/Colors/gradients';

export default function FirstPaymentScreen({ navigation, route }: any) {
    const { username } = route.params;

    return (
        <>
            <LinearGradient
                colors={Gradients.blackGradient}
                end={{ x: 0.5, y: 0.4 }}
                className="h-full w-full items-center justify-between px-10 pt-10"
            >
                <Image
                    className='w-full'
                    source={require('../../../shared/assets/logo-dakila.png')}
                />
                <View>
                    <Text className='text-center text-lg text-white'>
                        Bem vindo
                    </Text>
                    <Text className='text-center text-xl font-semibold text-white'>
                        {username}!
                    </Text>
                </View>

                <View className='w-full gap-y-2'>
                    <Text className='text-justify text-sm font-semibold text-white'>
                        Para ingressar no aplicativo você precisa efetuar o pagamento inicial da mensalidade através da plataforma de pagamentos.
                    </Text>
                    <Text className='text-justify text-sm font-semibold text-white'>
                        Clique no botão abaixo para ser redirecionado a plataformadepagamentos.com e efetuar o pagamento da mensalidade.
                    </Text>
                </View>

                <Text className='text-center text-xl font-semibold text-white'>Valor a pagar: <Text className='text-gold10 font-bold'>R$100,00</Text></Text>

                <TouchableHighlight onPress={() => { }} className='w-full mb-2'>
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        className="w-full h-10 rounded-md items-center justify-center"
                    >
                        <Text className='text-black '>CONTINUAR PARA PAGAMENTO</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </LinearGradient>
        </>
    );
}