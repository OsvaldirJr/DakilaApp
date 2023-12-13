import { styles } from './styles'
import { LinearGradient } from "expo-linear-gradient";
import * as Gradients from '../../shared/Styles/Colors/gradients';
import { Image, View, Text, TextInput, TouchableHighlight } from 'react-native'
import { useState, useContext } from 'react';
import { object, string, ValidationError } from 'yup';
import api from '../../shared/services/api';
import { AppContext } from '../../contexts/app-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function LoginScreen({ navigation }: any) {
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
    return (
        <LinearGradient
            colors={Gradients.blackGradient}
            end={{ x: 0.5, y: 0.4 }}
            style={styles.container}
        >
            <Image
                style={styles.image}
                source={require('../../shared/assets/logo-dakila.png')}
            />
            <View style={styles.formWrapper}>
                <View>
                    <Text style={styles.text}>Email address</Text>
                    <TextInput style={styles.textInput} autoCapitalize="none" value={email} onChangeText={setEmail} id="email" placeholder='Seu e-mail' />
                </View>
                <View>
                    <Text style={styles.text}>Password</Text>
                    <TextInput value={password} onChangeText={setPassword} id="password" placeholder='Sua senha' secureTextEntry={true} style={styles.textInput} />
                </View>
                <TouchableHighlight onPress={login}>
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>ENTRAR</Text>
                    </LinearGradient>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { console.log('esqueci') }}>
                    <Text style={styles.pressableText}>
                        ESQUECEU SUA SENHA?
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => { navigation.navigate('SignUp') }}>
                    <View>
                        <Text style={styles.pressableText}>
                            Não tem login?
                        </Text>
                        <Text style={styles.signUpText}>
                            Cadastre-se
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </LinearGradient>
    )
}