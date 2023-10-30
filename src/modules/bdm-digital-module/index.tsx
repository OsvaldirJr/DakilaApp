import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function BDMScreen() {
    return (
        <ScrollView fadingEdgeLength={50} endFillColor={'#000000'} className='flex-1 py-4 px-4 gap-y-4 bg-white60'>
            <Image
                className='w-full h-44'
                source={require('../../shared/assets/bdmdig-capa.png')}
            />
            <View className='w-full justify-between flex-row'>
                <Text className='text-black text-sm font-medium flex-1'>O dinheiro digital da plataforma criptografada BDM foi criado para realizar compra e venda de produtos e serviços, assim como o Real, o Euro, Dólar, entre outras.</Text>
                <Image
                    className='w-auto h-full'
                    source={require('../../shared/assets/bdmdig-img1.png')}
                />
            </View>
            <Text className='text-black w-full text-sm font-medium'>Graças à criptografia que evita a interceptação de informações, as operações online ficaram mais seguras, rápidas e com baixo custo.</Text>
            <Image
                className='w-full h-auto'
                source={require('../../shared/assets/bdmdig-img2.png')}
            />
            <Text className='text-black w-full text-sm font-medium'>Ela permite o envio e recebimento de valores ilimitados e sem fronteiras, eliminando também a necessidade de intermediários como bancos ou operadoras de cartão de crédito.</Text>
            <Text className='text-black w-full text-sm font-medium'>Se você ainda não tem o App do BDM Digital, clique abaixo para baixá-lo agora mesmo!</Text>
            <Text className='text-black w-full text-sm font-medium'>TESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTETESTE</Text>
        </ScrollView>
    )
};