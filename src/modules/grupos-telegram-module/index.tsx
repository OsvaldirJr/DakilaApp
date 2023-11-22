import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, Linking, Platform } from 'react-native';
import * as Gradients from '../../shared/Styles/Colors/gradients';;

export default function TelegramScreen() {

    const LinkTelegram = () => {
        if (Platform.OS === 'android') {
            return Linking.openURL('http://play.google.com/store/apps/details?id=org.telegram.messenger')
        } else if (Platform.OS === 'ios') {
            return Linking.openURL('http://apps.apple.com/br/app/telegram-messenger/id686449807')
        }
    }

    return (
        <ScrollView fadingEdgeLength={50} endFillColor={'#000000'} className='flex-1 pt-4 px-4 gap-y-4 bg-white60'>
            <Image
                className='w-full h-44'
                source={require('../../shared/assets/grupostelegram-capa.png')}
            />
            <View className='w-full justify-between flex-row'>
                <Image
                    className='w-[29vw] h-fit'
                    source={require('../../shared/assets/grupostelegram-img1.png')}
                />
                <View>
                    <Text className='pl-2 text-justify text-black text-sm font-medium pb-8 w-[62vw]'>Como já é de conhecimento de todos os associados, nós realizamos o nivelamento de informações através de nossas redes, sendo uma dessas ferramentas o Telegram. Onde divulgamos informações em sua maioria privadas, apenas para associados.</Text>
                    <Text className='pl-2 text-justify text-black text-sm font-medium w-[62vw]'>Portanto, é estritamente proibida a divulgação de informações cujo tenham cunho restrito à associados, conforme será mencionado em cada informação divulgada.</Text>
                </View>
            </View>
            <View className='gap-y-4 items-center'>
                <Text className='text-black w-full font-medium'>Abaixo o botão de acesso ao Grupo dos Associados.</Text>
                <TouchableHighlight
                    className='rounded-md w-48'
                    activeOpacity={0.5}
                    underlayColor="#E3E3E3"
                    onPress={() => { alert('Solicitar link ao afonso') }}>
                    <LinearGradient
                        style={{ elevation: 8 }}
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        className="h-10 items-center justify-center rounded-md" >
                        <Text className='text-black text-base font-normal'>ENTRAR NO GRUPO</Text>
                    </LinearGradient>
                </TouchableHighlight>
                <Text className='text-black w-full text-sm font-medium'>Se você ainda não possui Telegram, abaixo você pode realizar o download do mesmo para acessar o Grupo dos Associados.</Text>
                <Text className='text-black w-full text-center text-base font-bold'>DOWNLOAD TELEGRAM</Text>
                <TouchableHighlight className='mb-10 w-36 rounded-md'
                    activeOpacity={0.5}
                    underlayColor="#E3E3E3"
                    onPress={() => { LinkTelegram() }}>
                    <LinearGradient
                        style={{ elevation: 8 }}
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        className="h-10 items-center justify-center rounded-md" >
                        <Text className='text-black text-base font-normal'>CLIQUE AQUI</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}