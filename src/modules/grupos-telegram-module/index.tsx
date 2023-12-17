import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, Linking, Platform } from 'react-native';
import * as Gradients from '../../shared/Styles/Colors/gradients';;
import { styles } from './styles'
export default function TelegramScreen() {

    const LinkTelegram = () => {
        if (Platform.OS === 'android') {
            return Linking.openURL('http://play.google.com/store/apps/details?id=org.telegram.messenger')
        } else if (Platform.OS === 'ios') {
            return Linking.openURL('http://apps.apple.com/br/app/telegram-messenger/id686449807')
        }
    }

    return (
        <ScrollView fadingEdgeLength={50} endFillColor={'#000000'} style={styles.container}>
            <Image
                style={styles.imageTop}
                source={require('../../shared/assets/grupostelegram-capa.png')}
            />
            <View style={styles.cardTop}>
                <Image
                    style={styles.cardTopImage}
                    source={require('../../shared/assets/grupostelegram-img1.png')}
                />
                <View>
                    <Text style={styles.cardTopFirstText}>Como já é de conhecimento de todos os associados, nós realizamos o nivelamento de informações através de nossas redes, sendo uma dessas ferramentas o Telegram. Onde divulgamos informações em sua maioria privadas, apenas para associados.</Text>
                    <Text style={styles.cardTopFirstText}>Portanto, é estritamente proibida a divulgação de informações cujo tenham cunho restrito à associados, conforme será mencionado em cada informação divulgada.</Text>
                </View>
            </View>
            <View style={styles.cardBottom}>
                <Text style={styles.cardBottomText}>Abaixo o botão de acesso ao Grupo dos Associados.</Text>
                <TouchableHighlight
                    style={styles.cardBottomButton}
                    activeOpacity={0.5}
                    underlayColor="#E3E3E3"
                    onPress={() => { alert('Solicitar link ao afonso') }}>
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        style={styles.cardBottomGradient} >
                        <Text style={styles.cardBottomsecondText}>ENTRAR NO GRUPO</Text>
                    </LinearGradient>
                </TouchableHighlight>
                <Text style={styles.cardBottomThirdText}>Se você ainda não possui Telegram, abaixo você pode realizar o download do mesmo para acessar o Grupo dos Associados.</Text>
                <Text style={styles.cardBottomFourthText}>DOWNLOAD TELEGRAM</Text>
                <TouchableHighlight style={styles.cardBottomSecondButton}
                    activeOpacity={0.5}
                    underlayColor="#E3E3E3"
                    onPress={() => { LinkTelegram() }}>
                    <LinearGradient
                        style={styles.linerGradient}
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                         >
                        <Text style={styles.linerGradientText}>CLIQUE AQUI</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}