import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as Gradients from '../../../shared/Styles/Colors/gradients';
import { styles } from './styles';

export default function SignUpScreen({ navigation }: any) {
    const [username, setUsername] = useState('');
    const [document, setDocument] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isAssociate, setIsAssociate] = useState(false);


    return (
        <>
            <LinearGradient
                colors={Gradients.blackGradient}
                end={{ x: 0.5, y: 0.4 }}
                style={styles.container}
            >
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                        País (select)
                        Estado (select, campo visível apenas se o país for Brasil)
                        Checkbox: Declaro que sou um(a) Associado(a), titular ou dependente, de Dakila Pesquisas. Sob pena de consequências jurídicas.
                    </Text>
                    <Image
                        style={styles.image}
                        source={require('../../../shared/assets/logo-dakila.png')}
                    />
                    <View style={styles.formWrapper}>
                        <View>
                            <Text style={styles.text}>Nome</Text>
                            <TextInput autoCapitalize='words' value={username} onChangeText={setUsername} id="username" placeholder='Seu nome' style={styles.textInput} />
                        </View>
                        <View>
                            <Text style={styles.text}>CPF</Text>
                            <TextInput value={document} onChangeText={setDocument} id="document" placeholder='Seu documento' style={styles.textInput} />
                        </View>
                        <View>
                            <Text style={styles.text}>E-Mail</Text>
                            <TextInput autoCapitalize="none" value={email} onChangeText={setEmail} id="email" placeholder='Seu e-mail' style={styles.textInput} />
                        </View>
                        <View>
                            <Text style={styles.text}>Senha</Text>
                            <TextInput value={password} onChangeText={setPassword} id="password" placeholder='Sua senha' secureTextEntry={true} style={styles.textInput} />
                        </View>
                        <View>
                            <Text style={styles.text}>Confirmação de senha</Text>
                            <TextInput value={passwordConfirmation} onChangeText={setPasswordConfirmation} id="password" placeholder='Sua senha' secureTextEntry={true} style={styles.textInput} />
                        </View>
                    </View>
                </ScrollView>

                <TouchableHighlight
                    onPress={
                        () => { navigation.navigate('FirstPayment', { username: username }) }
                    }
                >
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>CONTINUAR</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </LinearGradient>
        </>
    );
}