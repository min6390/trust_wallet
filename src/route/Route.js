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
import {NAVIGATION_CONSTANTS} from '../common/Constants';

const RouteNavigator = createStackNavigator();

function Route() {
    const currentTheme = useSelector(state => {
        return state.myDarMode.darkMode;
    });
    const isLogin = useSelector(state => {
        return state.login.isLogin;
    });
    return (
        <AppearanceProvider>
            <NavigationContainer theme={currentTheme ? darkTheme : defaultTheme}>
                <RouteNavigator.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    {isLogin ?
                        <RouteNavigator.Screen
                            name={NAVIGATION_CONSTANTS.BOTTOM_TAB}
                            component={TabNavigator}
                        /> :
                        <RouteNavigator.Screen
                            name={NAVIGATION_CONSTANTS.LOGIN_STACK}
                            component={LoginStackNavigator}
                        />}

                </RouteNavigator.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
}

export default Route;
