import React from 'react';
import { View, Text, Image } from 'react-native';

export default function BDMScreen() {
    return (
        <View className='flex-1 py-4 px-4 items-center justify-start bg-white60'>
            <Image
                className='w-full h-44'
                source={require('../../shared/assets/bdmdig-capa.png')}
            />
            <View className='w-full my-4 justify-between flex-row'>
                <Text className='text-black text-sm font-medium flex-1'>O dinheiro digital da plataforma criptografada BDM foi criado para realizar compra e venda de produtos e serviços, assim como o Real, o Euro, Dólar, entre outras.</Text>
                <Image
                    //className='w-full'
                    source={require('../../shared/assets/bdmdig-img1.png')}
                />
            </View>
            <Text className='text-black w-full text-sm font-medium'>Graças à criptografia que evita a interceptação de informações, as operações online ficaram mais seguras, rápidas e com baixo custo.</Text>
            <Image
                className='w-full my-4'
                source={require('../../shared/assets/bdmdig-img2.png')}
            />
        </View>
    )
}