import React from 'react';
import { View, ScrollView, Text, Image, FlatList, ImageBackground } from 'react-native';
import CountryFlag from 'react-native-country-flag';

export default function HomeScreen() {
    const DATA = [
        {
            id: '1',
            title: 'O Crescimento do BDM Digital e sua aplicabilidade no cotidiano',
            date: 'Há 6 dias - 2 min',
            img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBdSDltR2fsH7zgNaNwf_rZDky8PujNIY1vBnvfc-MiGaQRxldUXKce7PzQMLsF6zA1Mg-2JcUjTmEAyfuiux1X3YW_=w1879-h970'
        },
        {
            id: '2',
            title: 'Monumento Escalonado em Zigurats: Tudo o que você precisa saber sobre...',
            date: '17 de out - 4 min',
            img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaB111mF-oyQoJw5KfsmGcyZf0i5l5gQLje8hjZSJp2JZPuwa8exdR4LzDWl9wvqhaOSP_x1NfaG260J07ZaAKQ2M2HXOw=w1879-h970'
        },
        {
            id: '3',
            title: 'Lives de NPCs no TikTok: A Nova Tendência das últimas semanas',
            date: '15 de out - 3 min',
            img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCONnXzo3s5zJLfXigjkAhQG-3rod-b__Rwh9hs6DxXtkyOg-vl4q08ThlMgVGbAfEjt08zdr2iz2gu0eByv3V8dR7Vgg=w1879-h970'
        },
        {
            id: '4',
            title: 'Eclipse solar com anel de fogo',
            date: '13 de out - 3 min',
            img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBl9l-qYuRlLH5X5gygjeNnamtT-W4sFjDoLb34BNvfrdI3rJp9nlZAfx2IvQcyTbmUdfmg08MfaRs6n2_8vVLR4TKpDA=w1879-h970'
        },
        {
            id: '5',
            title: 'Novidades sobre o Caminho do Peabiru',
            date: '11 de out - 3 min',
            img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaATY0ao7ZIDEdBqc0EcKsEdT1zvXuMllufAogMzS1xRt6gG03gqTjMKNhvm3tYEMOHBvzWF06NnnBXA3w0NAh5YYJkBJQ=w1879-h970'
        },
        {
            id: '6',
            title: 'Nota Oficial acerca do conflito na faixa de Gaza',
            date: '9 de out - 1 min',
            img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaC_93ywHD4t88o_0JtaBOx4pZCGdKE7xW-ARnVDpVbwnyYrX1Lk35eqasFm9gs0lIQ-CmXLHEvRegbOXUNmEcuPnQHgSw=w1879-h970'
        },
        {
            id: '7',
            title: 'A maior reserva de cristais do mundo está situada no Brasil',
            date: '8 de out - 2 min',
            img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaB_kkxJfEZox97hivS9Nv61AvYNp1jaFvrJWeTe1uoBSrSPNosW3pg7UrEcxsZQ9dRzH8VidkHA8DRk7XPS2hLb0Tef=w1879-h970'
        },
        {
            id: '8',
            title: 'Comunidade Mandela em Campo Grande, Recebe Apoio Vital do BDM Digital',
            date: '6 de out - 2 min',
            img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBoNB7dANmEQ5Q88_Mt39e-8exHMOpQEtE-wA4avSWnugbHHOZGT7KX_kR-izAant2Gh6-pXmxvlRudoo5u8lGhbx3Q=w1879-h970'
        },
    ];

    type ItemProps = { title: string, date: string, img: string };

    const CarousselItem = ({ title, date, img }: ItemProps) => (
        <ImageBackground source={{ uri: img }}
            resizeMode='cover'
            className='border w-fit h-60 justify-between mr-4 p-4'
        >
            <Text className='text-white60'>{date}</Text>
            <Text className='w-[76vw] text-white60 text-lg font-medium'>{title}</Text>
        </ImageBackground>
    );


    return (
        <ScrollView className='flex-1 bg-white60'>
            <View className='w-full items-center'>
                <View className='w-full px-4'>
                    <Text className='text-black my-4 text-center font-normal text-2xl h-10 border-b-4 border-gold10 w-full'>
                        Destaques
                    </Text>
                </View>
                <View className='mx-4 border border-gray30 mb-8'>
                    <Image className='w-fit h-72' source={{ uri: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBS2atSf-XiVXQpubawhFFVKCP9Mt7MfTi__CUBamrm71xIn2oTXAI4HBzEjuGxv9l5ww0sNoER5umvTcAFg0ssrWdxuA=w1879-h970' }} />
                    <View className='flex-row p-2'>
                        <Image className='w-16 h-16' source={{ uri: 'https://lh3.googleusercontent.com/fife/AK0iWDxzAZCMV-pGtYbMH7yaweJI54RpOoqeJUZKHfnV6_YbdwuLnUTl_oJTm2SSR7ZxlbSKbifuuUf9VrkPIHqGj2EqK23cn79XT4uupofGLh0koO9m9fWJ9onS457MQA1AjPZbkJKS5MBIHVEarMAKWj2WugAAIiqmATmGcKHYbaB3N-fAjDaoNvzNAJP8ZfD3_yaHn3EckgNDhlzq0klm0Uh6Bx6ymKpmV5JCGSCDU3S9GSMjiR614fn6fDC4zDWurw54h3XHCLSXuA5IygrKMvjhKJJrOuIAjfVu5MoaObzJYQNTQ_NaCuHtTMgMZ3PaUA1aiISwRLqDXl_jD7BpuWWbaLhKkxp1CLDfuSEyGtpjMJFcSszSWHbMGKvWbj5i6xClmngFx7o7VnyiZ5P259IYsgHguG4nv4y-KTXI7SM0254i8_99CNeVizZRj9O22fi9Y_-Jasjd19VUotOVRAa7xLtQsURLgg_YjDp2sC-Efh8uAC8LKCsmVMsLn4FMCOrvxsXay_bGrAYmSnVFjyXq9EwbWcXQzVw4kcaMSEbVLjvag2NOpdsMNenpmSL0V9eTspC_IE6EFg1lXs0uxUAfoR4WXZKUi-MFkB_B6HZdW0rcPIfeg7S7R2ttqjOgKpknRgDMv7wDr5qDfW-u8k2NPUDzYw0eZToh0jNlfnl2ZlWJ0gwi79uej0-m_EuqG6e2wBJHckBQTOu7fuTAAPlvVzoRX5dAz9Bv-dcPzZaZP9srBOR5c1H2IJPoOTB6BrrvrkEQkgBJbkAtqoBMiYT0EQolKICU0ZeLT0--6pvvUKK963ijCmcsfw01jNRo_u8iXdA7YZR8c-A_ed6TVQvSAFTOA5gOhcWOIc4c7yF_uCoSzhK_iCesATWeBkiNPvo99XprE7vosLzQZ8mbgOsn_azRRe6bUiEYFLiBjJ2-hFmvxie8o5PJlC68Up01gOycPb2XO8LpluQCG7UIPpji2LbTNT8pzaGj4RL5d9ME3blT3hipSoIx6pFZcJyJQVfdcwxbUgOdr8TiHIcG2Voti0ZRdg3L8GwClAiNm9I0yFyal7_AKsVTru57Rj9-oqCxDT0kwBuRV8we7bwgPGCQcIE7IeAttn3ObZCW36Op6RvWrUFqx0PwJ0WGf1RlovC4N4Yire5j8ly4xmvCmVjrJonBHp_0ii_hBV20-UQgH3fZEK3JXD1DBEwMcZJPQDkii6EoVBPWEJrWZ0Ujxohnq7QPyGONgwkfs9XInuO-NnGdb7pwKwG1Fnx_dlF8d4rCxGyHagB2tRgWk5VBtG801IYQe0nTFJOC9wiedAX8xcsllmbtKPuf0BM6Dl0PXO147-Mz31Z1llj31rJCplKgA_BZEf5FnxN3gpTOs2vKmg0_Ec8YO6VfJWRLxO7Mlq18K-2kx4C8LODflhN9H23Uu8UVclwcGa2YV8TWBL2wvamESZmzZxeIWg-7q6BJADFxRRXNcOFRWEKgC8CV4tA-hNTD1g6J6rri3nQhZhIudg1L0YYOLJUVz0T-nBW7Opb90-j7FMM=w1879-h970' }} />
                        <View className='justify-center px-2 gap-y-2'>
                            <Text className='text-base'>Dakila news</Text>
                            <Text className='text-base'>Há 6 dias - 2 min</Text>
                        </View>
                    </View>
                    <View className='px-2 pb-4 gap-2'>
                        <Text className='text-base'>Economia</Text>
                        <Text className='text-lg font-medium'>O crescimento do BDM Digital e sua aplicabilidade no cotidiano</Text>
                        <Text className='text-base'>Em comemoração da divisão do estado e consequentemente aniversário do Mato Grosso do Sul, a TVMS realizou uma reportagem especial sobre o...</Text>
                    </View>
                </View>
                <View className='w-full px-4'>
                    <Text className='text-black my-4 text-center font-normal text-2xl h-10 border-b-4 border-gold10 w-full'>
                        Últimas Notícias
                    </Text>
                </View>
                
                <FlatList
                className='ml-4'
                    horizontal={true}
                    data={DATA}
                    renderItem={({ item }) => <CarousselItem title={item.title} date={item.date} img={item.img} />}
                    keyExtractor={item => item.id}
                />
                
                <ImageBackground source={{ uri: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDeWUntQ5Sl5CaZPEnj0ZkipKOlDQDlzqY1N4QJzjHrn9LjqxOuuOJYyGS-m1CkOoMGMGOXuVrf5bqyjuBFA6VF7pF4=w1879-h970' }}
                    resizeMode='stretch'
                    className='w-full h-[80vw] justify-center items-center'
                >
                    <View className='w-[90vw] h-60 bg-black' style={{ opacity: 0.9 }}>
                        <Text className='text-gold10 w-full text-center font-normal mt-2 text-3xl'>Cotação do dia</Text>
                        <View className='flex-1 mx-8 py-1 gap-y-1 mb-4 mt-2 bg-gold10'>
                            <View className='flex-row justify-between items-center w-[58vw] mx-8'>
                                <CountryFlag isoCode='BR' size={20} />
                                <View className='w-40 justify-between flex-row items-center'>
                                    <Text className='text-right w-16 text-lg font-medium'>BDM =</Text>
                                    <Text className='text-center bg-white60 text-lg font-medium px-1'>R$ 11,41</Text>
                                </View>
                            </View>
                            <View className='flex-row justify-between items-center w-[58vw] mx-8'>
                                <CountryFlag isoCode='US' size={20} />
                                <View className='w-40 justify-between flex-row items-center'>
                                    <Text className='text-right w-16 text-lg font-medium'>USD =</Text>
                                    <Text className='text-center bg-white60 text-lg font-medium px-1'>R$ 5,05</Text>
                                </View>
                            </View>
                            <View className='flex-row justify-between items-center w-[58vw] mx-8'>
                                <CountryFlag isoCode='EU' size={20} />
                                <View className='w-40 justify-between flex-row items-center'>
                                    <Text className='text-right w-16 text-lg font-medium'>EUR =</Text>
                                    <Text className='text-center bg-white60 text-lg font-medium px-1'>R$ 5,36</Text>
                                </View>
                            </View>
                            <View className='flex-row justify-between items-center w-[58vw] mx-8'>
                                <CountryFlag isoCode='GB' size={20} />
                                <View className='w-40 justify-between flex-row items-center'>
                                    <Text className='text-right w-16 text-lg font-medium'>GBP =</Text>
                                    <Text className='text-center bg-white60 text-lg font-medium px-1'>R$ 6,14</Text>
                                </View>
                            </View>
                            <View className='flex-row justify-between items-center w-[58vw] mx-8'>
                                <CountryFlag isoCode='AE' size={20} />
                                <View className='w-40 justify-between flex-row items-center'>
                                    <Text className='text-right w-16 text-lg font-medium'>AED =</Text>
                                    <Text className='text-center bg-white60 text-lg font-medium px-1'>R$ 1,37</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <Text className='w-full text-center bg-black text-white60 font-semibold text-lg py-1'>
                    @DakilaNews
                </Text>
            </View>
        </ScrollView>
    )
}