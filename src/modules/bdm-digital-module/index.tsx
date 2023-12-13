import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, Platform, Linking } from 'react-native';
import * as Gradients from '../../shared/Styles/Colors/gradients';
import { styles } from './styles'
export default function BDMScreen() {
    const LinkBDM = () => {
        if (Platform.OS === 'android') {
            return Linking.openURL('http://play.google.com/store/apps/details?id=cash.dourado')
        } else if (Platform.OS === 'ios') {
            return Linking.openURL('http://apps.apple.com/br/app/bdm-digital/id1603873373')
        }
    }

    return (
        <ScrollView fadingEdgeLength={50} endFillColor={'#000000'} style={styles.container}>
            <Image
                style={styles.imageTop}
                source={require('../../shared/assets/bdmdig-capa.png')}
            />
            <View style={styles.cardTop}>
                <Text style={styles.cardTopText}>O dinheiro digital da plataforma criptografada BDM foi criado para realizar compra e venda de produtos e serviços, assim como o Real, o Euro, Dólar, entre outras.</Text>
                <Image
                    style={styles.cardTopImage}
                    source={require('../../shared/assets/bdmdig-img1.png')}
                />
            </View>
            <Text style={styles.text}>Graças à criptografia que evita a interceptação de informações, as operações online ficaram mais seguras, rápidas e com baixo custo.</Text>
            <Image
                style={styles.image}
                source={require('../../shared/assets/bdmdig-img2.png')}
            />
            <Text style={styles.text}>Ela permite o envio e recebimento de valores ilimitados e sem fronteiras, eliminando também a necessidade de intermediários como bancos ou operadoras de cartão de crédito.</Text>
            <Text style={styles.text}>Se você ainda não tem o App do BDM Digital, clique abaixo para baixá-lo agora mesmo!</Text>
            <View style={styles.cardMiddle}>
                <TouchableHighlight style={styles.bdmButton}
                    activeOpacity={0.5}
                    underlayColor="#E3E3E3"
                    onPress={() => { LinkBDM() }}>
                    <LinearGradient
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        style={styles.bdmGradient} >
                        <Text style={styles.bdmText}>CLIQUE AQUI</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
};