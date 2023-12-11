import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as Gradients from '../../../shared/Styles/Colors/gradients';

export default function SignUpScreen({ navigation }: any) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');


    return (
        <>
            <LinearGradient
                colors={Gradients.blackGradient}
                end={{ x: 0.5, y: 0.4 }}
                className="h-full w-full items-center justify-center px-10"
            >
                <ScrollView className='w-full gap-y-10 mt-1 mb-10'>
                    <Image
                        className='w-full'
                        source={require('../../../shared/assets/logo-dakila.png')}
                    />
                    <View className="flex-1 w-full flex-col justify-center gap-y-3">
                        <View>
                            <Text className="block text-sm font-medium leading-6 text-white60">Nome</Text>
                            <TextInput autoCapitalize='words' value={username} onChangeText={setUsername} id="username" placeholder='Seu nome' className="w-full px-2 rounded-md border-0 py-1.5 text-grayDark bg-white60" />
                        </View>
                        <View>
                            <Text className="block text-sm font-medium leading-6 text-white60">E-Mail</Text>
                            <TextInput autoCapitalize="none" value={email} onChangeText={setEmail} id="email" placeholder='Seu e-mail' className="w-full px-2 rounded-md border-0 py-1.5 text-grayDark bg-white60" />
                        </View>
                        <View>
                            <Text className="block text-sm font-medium leading-6 text-white60">Senha</Text>
                            <TextInput value={password} onChangeText={setPassword} id="password" placeholder='Sua senha' secureTextEntry={true} className="w-full px-2 rounded-md py-1.5 text-grayDark bg-white60" />
                        </View>
                        <View>
                            <Text className="block text-sm font-medium leading-6 text-white60">Confirmação de senha</Text>
                            <TextInput value={passwordConfirmation} onChangeText={setPasswordConfirmation} id="password" placeholder='Sua senha' secureTextEntry={true} className="w-full px-2 rounded-md py-1.5 text-grayDark bg-white60" />
                        </View>
                    </View>
                </ScrollView>

                <TouchableHighlight className='w-full mb-2'
                    onPress={
                        () => { navigation.navigate('FirstPayment', { username: username }) }
                    }
                >
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        className="w-full h-10 rounded-md items-center justify-center" >
                        <Text className='text-black '>CONTINUAR</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </LinearGradient>
        </>
    );
}