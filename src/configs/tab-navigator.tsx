import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/home-module';
import { Feather } from '@expo/vector-icons';
import ProfileScreen from '../modules/profile-module';
import PaymentsScreen from '../modules/payments-module';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    } else if (route.name === 'Payments') {
                        iconName = 'dollar-sign';
                    }
                    return <Feather name={iconName} size={size} color={color} />;
                },
                tabBarInactiveBackgroundColor: '#000000',
                tabBarActiveBackgroundColor: '#000000',
                tabBarActiveTintColor: '#F0F0F0',
                tabBarInactiveTintColor: '#C4C4C4',
            })}

        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerTintColor: '#F0F0F0', headerStyle: ({ backgroundColor: '#000000' }) }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerTintColor: '#F0F0F0', headerStyle: ({ backgroundColor: '#000000' }) }} />
            <Tab.Screen name="Payments" component={PaymentsScreen} options={{ headerTintColor: '#F0F0F0', headerStyle: ({ backgroundColor: '#000000' }) }} />
        </Tab.Navigator>
    );
};