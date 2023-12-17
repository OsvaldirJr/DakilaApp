import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as Gradients from '../../../shared/Styles/Colors/gradients';
import { styles } from './styles';

export default function FirstPaymentScreen({ navigation }: any) {

    return (
        <>
            <LinearGradient
                colors={Gradients.blackGradient}
                end={{ x: 0.5, y: 0.4 }}
                style={styles.paymentScreenContainer}
            >
                <Image
                    style={styles.image}
                    source={require('../../../shared/assets/logo-dakila.png')}
                />
                <View>
                    <View>
                        <Text style={styles.title}>
                            Seja bem-vindo(a)
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.paymentText}>
                            Você acaba de ganhar <Text style={styles.paymentTextBold}>3 dias de GRAÇA</Text> para usufruir da ferramenta!
                        </Text>
                        <Text style={styles.paymentText}>
                            Ao final do período gratuito, você será contatado(a) para efetuar o pagamento referente à mensalidade da plataforma.
                        </Text>
                    </View>

                    <Text style={styles.paymentValueText}>Para seguir com seu acesso, basta clicar no botão abaixo! 😁</Text>
                </View>

                <TouchableHighlight onPress={() => { }}>
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>CONTINUAR PARA PAGAMENTO</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </LinearGradient>
        </>
    );
}