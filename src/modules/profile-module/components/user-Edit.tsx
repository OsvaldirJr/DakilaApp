import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, ScrollView, Text, TextInput, Image, TouchableHighlight, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Gradients from '../../../shared/Styles/Colors/gradients';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'


export default function UserEdit() {
    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    const [userName, setUserName] = useState('Usuário Exemplo');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
    const [phone, setPhone] = useState('(51) 91122-3344');
    const [resPhone, setResPhone] = useState('(51) 98877-6655');
    const [birthDate, setBirthDate] = useState(new Date('1992-07-24T02:13:49.597Z'))

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setBirthDate(currentDate);
    };

    const showMode = () => {
        DateTimePickerAndroid.open({
            value: birthDate,
            onChange,
            mode: 'date',
            display: 'spinner',
        });
    };

    const showDatepicker = () => {
        showMode();
    };

    return (
        <ScrollView className='flex-1 bg-white60 px-4'>
            <View className='w-full justify-center items-center py-8 gap-y-4'>
                <View className='border border-grayLight bg-white60 overflow-hidden' style={{ elevation: 8 }}>
                    <Image className='w-40 h-40' source={{ uri: profileImage }} />
                </View>
                <TouchableHighlight
                    className='px-4 rounded-md'
                    activeOpacity={0.5}
                    underlayColor="#E3E3E3"
                    onPress={() => { }}
                >
                    <Text className='font-normal text-xl'>
                        Escolher Foto
                    </Text>
                </TouchableHighlight>
            </View >
            <View className='gap-y-2 mb-4'>
                <Text className='text-base font-medium'>Nome</Text>
                <TextInput
                    className='border border-gray30 text-grayDark text-base justify-center px-2 rounded-md h-12'
                    onChangeText={(e) => setUserName(e)}
                    value={userName}
                    autoComplete='name'
                    placeholder="Digite seu nome"
                    keyboardType="default"
                />
            </View>
            <View className='gap-y-2 mb-4'>
                <Text className='text-base font-medium'>Data de Nascimento</Text>
                <View className='border flex-row border-gray30 items-center justify-between px-2 rounded-md h-12'>
                    <Text className='text-grayDark text-base'>{birthDate.toLocaleDateString()}</Text>
                    <TouchableHighlight
                        className='rounded-full'
                        activeOpacity={0.5}
                        underlayColor="#E3E3E3"
                        onPress={showDatepicker}
                    >
                        <FontAwesome name="calendar" size={24} color="#666666" />
                    </TouchableHighlight>
                </View>
            </View>
            <View className='gap-y-2 mb-4'>
                <Text className='text-base font-medium'>Nova Senha</Text>
                <TextInput
                    className='border border-gray30 text-grayDark text-base justify-center px-2 rounded-md h-12'
                    onChangeText={(e) => setNewPassword(e)}
                    value={newPassword}
                    secureTextEntry
                    placeholder="Digite sua nova senha"
                    keyboardType="default"
                />
            </View>
            <View className='gap-y-2 mb-4'>
                <Text className='text-base font-medium'>Confirmação de Senha</Text>
                <TextInput
                    className='border border-gray30 text-grayDark text-base justify-center px-2 rounded-md h-12'
                    onChangeText={(e) => setNewPasswordConfirmation(e)}
                    value={newPasswordConfirmation}
                    secureTextEntry
                    placeholder="Digite sua nova senha"
                    keyboardType="default"
                />
            </View>
            <View className='gap-y-2 mb-4'>
                <Text className='text-base font-medium'>Telefone</Text>
                <TextInput
                    className='border border-gray30 text-grayDark text-base justify-center px-2 rounded-md h-12'
                    onChangeText={(e) => setPhone(e)}
                    value={phone}
                    placeholder="Digite seu telefone"
                    keyboardType="numeric"
                />
            </View>
            <View className='gap-y-2 mb-4'>
                <Text className='text-base font-medium'>Telefone Responsável</Text>
                <TextInput
                    className='border border-gray30 text-grayDark text-base justify-center px-2 rounded-md h-12'
                    onChangeText={(e) => setResPhone(e)}
                    value={resPhone}
                    placeholder="Digite seu telefone"
                    keyboardType="numeric"
                />
            </View>
            <View className='items-center'>
                <TouchableHighlight className='my-4 w-full rounded-md'
                    activeOpacity={0.5}
                    underlayColor="#E3E3E3"
                    onPress={() => {
                        console.log('Nome: ', userName)
                        console.log('Aniversário: ', birthDate)
                        console.log(newPassword ? newPassword : 'nenhuma senha informada')
                        console.log(newPasswordConfirmation ? newPasswordConfirmation : 'nenhuma senha confirmada')
                        console.log('Telefone: ', phone)
                        console.log('Telefone responsável: ', resPhone)
                    }}
                >
                    <LinearGradient
                        style={{ elevation: 4 }}
                        colors={Gradients.goldGradient}
                        end={{ x: 1, y: 1 }}
                        className="h-10 rounded-md items-center justify-center" >
                        <Text className='text-black text-base font-normal'>Salvar</Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        </ScrollView >
    )
}