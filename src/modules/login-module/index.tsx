import React, { useState, useContext } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, Alert } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as Gradients from '../../shared/Styles/Colors/gradients';
import api from '../../shared/services/api';
import { object, string, ValidationError } from 'yup';
import Spinner from 'react-native-loading-spinner-overlay';
import { AppContext } from '../../contexts/app-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }: any) {
    const schema = object().shape({
        email: string().email('Digite um email válido').required('O e-mail é obrigatório'),
        password: string().min(3, 'A senha deve conter no mínimo 6 caracteres').required('A senha é obrigatória')
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setError] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const { signIn } = useContext<any>(AppContext);

    const login = async () => {
        try {
            setLoading(true)
            await schema.validate({ email, password })
            api.post(`/api/login`, JSON.stringify({ email, password }), { headers: { 'Content-Type': 'application/json' } }).then(async (result) => {
                setLoading(false)
                signIn(email, password)
                await AsyncStorage?.setItem('user', JSON.stringify(result.data))
                navigation.navigate('App')
            }).catch((err) => {
                console.log(err)
                setError(['Usuário ou senha incorretos'])
                setLoading(false)
            })

        } catch (e) {
            setLoading(false)
            if (e instanceof ValidationError) {
                setError(e.errors)
            }
        }
    }

    return (<>
        <Spinner
            visible={loading}
            textContent={'Carregando...'}
            textStyle={{ color: '#FFF' }}
        />
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
                    <TextInput autoCapitalize="none" value={email} onChangeText={setEmail} id="email" placeholder='Seu e-mail' className="w-full px-2 rounded-md border-0 py-1.5 text-grayDark bg-white60" />
                </View>
                <View>
                    <Text className="block text-sm font-medium leading-6 text-white60">Password</Text>
                    <TextInput value={password} onChangeText={setPassword} id="password" placeholder='Sua senha' secureTextEntry={true} className="w-full px-2 rounded-md py-1.5 text-grayDark bg-white60" />
                </View>
                {errors.map(error => {
                    return (<Text key={error} className='text-red-600 text-center'> {error}</Text>)
                })}
                <TouchableHighlight onPress={login}>
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        className="w-full h-10 mt-2 rounded-md items-center justify-center px-6" >
                        <Text className='text-black '>ENTRAR</Text>
                    </LinearGradient>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { console.log('esqueci') }}>
                    <Text className="text-center text-xs text-white">
                        ESQUECI MINHA SENHA
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { navigation.navigate('SignUp') }}>
                    <View>
                        <Text className="text-center text-xs text-white">
                            Ainda não possui conta?
                        </Text>
                        <Text className="text-center text-xs text-white">
                            FAÇA SEU CADASTRO CLICANDO AQUI!
                        </Text>
                    </View>
                </TouchableHighlight>

            </View>
        </LinearGradient>
    </>

    );
}