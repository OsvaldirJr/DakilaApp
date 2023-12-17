import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../modules/login-module';
// import DrawerNavigator from './drawer';
// import UserEdit from '../modules/profile-module/components/user-Edit';
import AuthLoadingPage from './components/AuthVerifyPage';
import DrawerNavigator from './drawer';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {

    return (
        <Stack.Navigator
            initialRouteName='AuthLoadingPage'
        >
            <Stack.Screen
                name='AuthLoadingPage'
                component={AuthLoadingPage}
                options={{ headerShown: false, statusBarTranslucent: true }}
            />
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
            {/* <Stack.Screen
                name='UserEdit'
                component={UserEdit}
                options={{
                    headerShown: true,
                    statusBarColor: '#000000',
                    title: 'Editar',
                    headerTintColor: '#F0F0F0',
                    headerStyle: {
                        backgroundColor: '#000000',
                        
                    }
                }}
            /> */}
        </Stack.Navigator>
    );
};