import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../modules/login-module';
import DrawerNavigator from './drawer';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator
            initialRouteName='Login'
        >
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false, statusBarTranslucent: true }}
            />
            <Stack.Screen
                name='App'
                component={DrawerNavigator}
                options={{ headerShown: false, statusBarTranslucent: true }}
            />
        </Stack.Navigator>
    );
};