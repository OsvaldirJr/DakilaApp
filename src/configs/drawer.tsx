import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tab-navigator';
import HomeScreen from '../modules/home-module';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="DrawerHome" component={TabNavigator} />
        </Drawer.Navigator>
    );
}