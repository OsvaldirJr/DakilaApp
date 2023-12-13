// import { LinearGradient } from 'expo-linear-gradient';
// import React, { useContext, useEffect, useState } from 'react';
// import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
// import * as Gradients from '../../shared/Styles/Colors/gradients';
// import { AppContext } from '../../contexts/app-context';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function ProfileScreen(props: any) {
//     const { user } = useContext<any>(AppContext);
//     const [userData, setUser] = useState<any>();

//     const getDate = (dateString: string)=>{
//         let newDate = ''
       
//         if(dateString)
//         for(let i = 0;i<dateString?.length; i++ ){
//             if(i==2 || i==4){
//                 newDate = newDate +'/'+ dateString[i]?.toString()
//             }
//             else{
//                 newDate = newDate + dateString[i]?.toString()
//             }
//         }
//         return newDate
//     }

//     const verifyUser = async()=>{
//         const userJson = await AsyncStorage.getItem('user');
//         setUser(JSON.parse(userJson!).user)
//     }
//     useEffect(()=>{
//         verifyUser()
//     },[])
//     return (
//         <ScrollView className='flex-1 bg-white60 px-4'>
//             <View className='w-full justify-center items-center py-8 gap-y-4'>
//                 <View className='rounded-full overflow-hidden' style={{ elevation: 8 }}>
//                     <Image className='w-40 h-40' source={{ uri: userData?.imageurl }} />
//                 </View>
//                 <Text className='font-bold text-xl'>
//                     {userData?.name}
//                 </Text>
//             </View>
//             <View className='gap-y-2 mb-4'>
//                 <Text className='text-base font-medium'>E-mail</Text>
//                 <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
//                     <Text className='text-grayDark'>{userData?.email}</Text>
//                 </View>
//             </View>
//             <View className='gap-y-2'>
//                 <Text className='text-base font-medium'>Data de Nascimento</Text>
//                 <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
//                     <Text className='text-grayDark'>{user.birthDate}</Text>
//                 </View>
//             </View>
//             <View className='gap-y-2'>
//                 <Text className='text-base font-medium'>Núcleo</Text>
//                 <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
//                     <Text className='text-grayDark'>{user.core}</Text>
//                 </View>
//             </View>
//             <View className='gap-y-2'>
//                 <Text className='text-base font-medium'>Grupo</Text>
//                 <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
//                     <Text className='text-grayDark'>{user.group}</Text>
//                 </View>
//             </View>
//             <View className='gap-y-2'>
//                 <Text className='text-base font-medium'>Simbologia</Text>
//                 <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
//                     <Text className='text-grayDark'>{user.symbol ? 'Sim' : 'Não'}</Text>
//                 </View>
//             </View>
//             <View className='gap-y-2'>
//                 <Text className='text-base font-medium'>Frequência de Onda</Text>
//                 <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
//                     <Text className='text-grayDark'>{user.frequency ? 'Sim' : 'Não'}</Text>
//                 </View>
//             </View>
//             <View className='gap-y-2'>
//                 <Text className='text-base font-medium'>Número de Telefone</Text>
//                 <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
//                     <Text className='text-grayDark'>{user.phone}</Text>
//                 </View>
//             </View>
//             <View className='gap-y-2'>
//                 <Text className='text-base font-medium'>Número de Telefone Responsável</Text>
//                 <View className='justify-center px-2 rounded-md bg-grayLight h-12'>
//                     <Text className='text-grayDark'>{user.resPhone}</Text>
//                 </View>
//             </View>
//             <View className='items-center'>
//                 <TouchableHighlight className='my-4 w-full rounded-md'
//                     activeOpacity={0.5}
//                     underlayColor="#E3E3E3"
//                     onPress={() => { props.navigation.navigate('UserEdit') }}>
//                     <LinearGradient
//                         style={{ elevation: 4 }}
//                         colors={Gradients.goldGradient}
//                         end={{ x: 1, y: 1 }}
//                         className="h-10 rounded-md items-center justify-center" >
//                         <Text className='text-black text-base font-normal'>EDITAR</Text>
//                     </LinearGradient>
//                 </TouchableHighlight>
//             </View>
//         </ScrollView>
//     )
// }