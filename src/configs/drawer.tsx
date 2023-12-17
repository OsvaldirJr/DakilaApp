import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import TabNavigator from './tab-navigator';
import BDMScreen from '../modules/bdm-digital-module';
import TelegramScreen from '../modules/grupos-telegram-module';
import MapScreen from '../modules/map-module';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { drawerStyles } from './styles';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
    const logout = async () => {
        await AsyncStorage.clear()
        props.navigation.navigate('Login')
    }
    return (
        <DrawerContentScrollView {...props}>
            <View style={[{ elevation: 8 }, drawerStyles.drawerContainer]}>
                <Image
                    // className='w-14 h-14 rounded-full'
                    source={{ uri: 'https://us.edu.pl/wp-content/uploads/obrazki-stron/cbns/blank-profile-picture-973460_640.png' }}
                />
                <Text 
                // className='text-white60 text-lg'
                > User Name Sample </Text>
            </View>
            <View 
            // className='bg-white60 h-[58vh]'
            >
                <DrawerItemList {...props} />
                <TouchableHighlight
                    // className='mx-3 px-2 rounded-md'
                    underlayColor={'#C4C4C4'}
                    onPress={logout}
                >
                    <View 
                    // className='flex-row w-full gap-x-8 items-center my-2'
                    >
                        <Ionicons
                            style={{ marginRight: -18 }}
                            name="md-exit-outline"
                            size={24}
                            color={'#000000'}
                        />
                        <Text 
                        // className='text-grayDark'
                        >Sair</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View 
            // className='bg-white60 items-center justify-center border border-gray30 h-[22vh]'
            >
                <Text 
                // className='text-grayDark'
                >Ecossistema Dakila.</Text>
                <Text 
                // className='text-grayDark'
                >Todos os direitos reservados.</Text>
            </View>
        </DrawerContentScrollView>
    )
}

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerTintColor: '#F0F0F0',
                headerStyle: { backgroundColor: '#000000' },
                drawerActiveBackgroundColor: '#F0F0F0',
                drawerInactiveBackgroundColor: '#F0F0F0',
                drawerActiveTintColor: "#000000",
                drawerStyle: {
                    backgroundColor: '#000000'
                }
            }}
        >
            <Drawer.Screen name="DrawerHome" component={TabNavigator}
                options={{
                    drawerIcon: () => (
                        <Ionicons
                            style={{ marginRight: -18 }}
                            name="home"
                            size={24}
                            color={'#000000'}
                        />
                    ),
                    headerTitle: 'Home',
                    drawerLabel: 'Home',
                }}
            />
            <Drawer.Screen name="Mapa" component={MapScreen}
                options={{
                    drawerIcon: () => (
                        <FontAwesome
                            style={{ paddingLeft: 5, marginRight: -12 }}
                            name="map-marker"
                            size={24}
                            color={'#000000'}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="BDM" component={BDMScreen}
                options={{
                    drawerIcon: () => (
                        <FontAwesome
                            style={{ marginRight: -21 }}
                            name="bank"
                            size={24}
                            color={'#000000'}
                        />
                    ),
                    headerTitle: 'BDM Digital',
                    drawerLabel: 'BDM Digital'
                }}
            />
            <Drawer.Screen name="Telegram" component={TelegramScreen}
                options={{
                    drawerIcon: () => (
                        <MaterialIcons
                            style={{ marginRight: -18 }}
                            name="people-alt"
                            size={24}
                            color={'#000000'}
                        />
                    ),
                    headerTitle: 'Grupos Telegram',
                    drawerLabel: 'Grupos Telegram',
                }}
            />
        </Drawer.Navigator>
    );
}