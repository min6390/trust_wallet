import * as React from 'react';
import {
    NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './navigator/TabNavigator';
import {AppearanceProvider} from 'react-native-appearance';
import {darkTheme, defaultTheme} from '../common/Themes';
import {useSelector} from 'react-redux';
import LoginStackNavigator from './navigator/LoginStackNavigator';
import {useState} from 'react';

const RouteNavigator = createStackNavigator();

function Route() {
    const currentTheme = useSelector(state => {
        return state.myDarMode.darkMode;
    });
    const [isLogin, setIsLogin] = useState(false);
    return (
        <AppearanceProvider>
            <NavigationContainer theme={currentTheme ? darkTheme : defaultTheme}>
                <RouteNavigator.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <RouteNavigator.Screen
                        name={'Login'}
                        component={LoginStackNavigator}
                    />
                    <RouteNavigator.Screen
                        name={'Tab Navigator'}
                        component={TabNavigator}
                    />
                </RouteNavigator.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}

export default Route;
