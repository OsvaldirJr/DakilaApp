import React, { useState, useContext } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, Alert } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as Gradients from '../../shared/Styles/Colors/gradients';
import { AppContext } from '../../contexts/app-context';

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext<any>(AppContext);

    function loginHandler() {
        signIn(email, password)
    };

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
                    <Text className="block text-sm font-medium leading-6 text-white60">E-mail</Text>
                    <TextInput
                        id="email"
                        placeholder='Seu e-mail'
                        className="w-full px-2 rounded-md border-0 py-1.5 text-grayDark bg-white60"
                        onChangeText={(newValue: string) => {
                            setEmail(newValue)
                        }}
                    />
                </View>

                <View>
                    <Text className="block text-sm font-medium leading-6 text-white60">Senha</Text>
                    <TextInput
                        id="password"
                        placeholder='Sua senha'
                        secureTextEntry={true}
                        className="w-full px-2 rounded-md py-1.5 text-grayDark bg-white60"
                        onChangeText={(newValue: string) => {
                            setPassword(newValue)
                        }}
                    />
                </View>

                <TouchableHighlight
                    onPress={() => {
                        if (email === '') {
                            Alert.alert('Erro de autenticação', 'Favor informar o E-mail')
                        } else if (password === '') {
                            Alert.alert('Erro de autenticação', 'Favor informar a senha')
                        } else {
                            loginHandler();
                            navigation.navigate('App')
                        }
                    }}
                >
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