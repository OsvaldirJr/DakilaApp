import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tab-navigator';
import BDMScreen from '../modules/bdm-digital-module';
import TelegramScreen from '../modules/grupos-telegram-module';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="DrawerHome" component={TabNavigator}
                options={{ headerTintColor: '#F0F0F0', headerStyle: { backgroundColor: '#000000' } }}
            />
            <Drawer.Screen name="BDM" component={BDMScreen}
                options={{ headerTitle: 'BDM Digital', headerTintColor: '#F0F0F0', headerStyle: { backgroundColor: '#000000' } }}
            />
            <Drawer.Screen name="Telegram" component={TelegramScreen}
                options={{ headerTitle: 'Grupos Telegram', headerTintColor: '#F0F0F0', headerStyle: { backgroundColor: '#000000' } }}
            />
        </Drawer.Navigator>
    );
}