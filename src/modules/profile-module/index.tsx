import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import * as Gradients from '../../shared/Styles/Colors/gradients';

export default function ProfileScreen(props: any) {
    return (
        <ScrollView className='flex-1 bg-white60 px-4'>
            <View className='w-full justify-center items-center py-8 gap-y-4'>
                <View className='rounded-full overflow-hidden' style={{ elevation: 8 }}>
                    <Image className='w-40 h-40' source={{ uri: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                </View>
                <Text className='font-bold text-xl'>
                    Usuário Exemplo
                </Text>
            </View>
            <View className='gap-y-2 mb-4'>
                <Text className='text-base font-medium'>E-mail</Text>
                <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
                    <Text className='text-grayDark'>user@gmail.com</Text>
                </View>
            </View>
            <View className='gap-y-2'>
                <Text className='text-base font-medium'>Data de Nascimento</Text>
                <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
                    <Text className='text-grayDark'>24/07/1992</Text>
                </View>
            </View>
            <View className='gap-y-2'>
                <Text className='text-base font-medium'>Núcleo</Text>
                <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
                    <Text className='text-grayDark'>Rio Grande do Sul</Text>
                </View>
            </View>
            <View className='gap-y-2'>
                <Text className='text-base font-medium'>Grupo</Text>
                <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
                    <Text className='text-grayDark'>Harmonia</Text>
                </View>
            </View>
            <View className='gap-y-2'>
                <Text className='text-base font-medium'>Simbologia</Text>
                <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
                    <Text className='text-grayDark'>Sim</Text>
                </View>
            </View>
            <View className='gap-y-2'>
                <Text className='text-base font-medium'>Frequência de Onda</Text>
                <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
                    <Text className='text-grayDark'>Sim</Text>
                </View>
            </View>
            <View className='gap-y-2'>
                <Text className='text-base font-medium'>Número de Telefone</Text>
                <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
                    <Text className='text-grayDark'>(51) 91122-3344</Text>
                </View>
            </View>
            <View className='gap-y-2'>
                <Text className='text-base font-medium'>Número de Telefone Responsável</Text>
                <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
                    <Text className='text-grayDark'>(51) 98877-6655</Text>
                </View>
            </View>
            <View className='items-center'>
                <TouchableHighlight className='my-4 w-full rounded-md'
                    activeOpacity={0.5}
                    underlayColor="#E3E3E3"
                    onPress={() => {props.navigation.navigate('UserEdit')}}>
                    <LinearGradient
                        style={{ elevation: 4 }}
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        className="h-10 rounded-md items-center justify-center" >
                        <Text className='text-black text-base font-normal'>EDITAR</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}