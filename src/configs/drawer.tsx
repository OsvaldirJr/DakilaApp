import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tab-navigator';
import BDMScreen from '../modules/bdm-digital-module';
import TelegramScreen from '../modules/grupos-telegram-module';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="DrawerHome" component={TabNavigator} />
            <Drawer.Screen name="BDM" component={BDMScreen} />
            <Drawer.Screen name="Telegram" component={TelegramScreen} />
        </Drawer.Navigator>
    );
}