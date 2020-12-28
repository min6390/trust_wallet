import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';
import LoginContainer from '../../containers/LoginContainer';
import VerifyLoginContainer from '../../containers/VerifyLoginContainer';

const LoginStack = createStackNavigator();

function LoginStackNavigator() {
    return (
        <LoginStack.Navigator
            initialRouteName={NAVIGATION_CONSTANTS.LOGIN}
            screenOptions={{
                headerShown: false,
            }}
        >
            <LoginStack.Screen
                name={NAVIGATION_CONSTANTS.LOGIN}
                component={LoginContainer}
            />
            <LoginStack.Screen
                name={NAVIGATION_CONSTANTS.VERIFY_LOGIN}
                component={VerifyLoginContainer}
            />

        </LoginStack.Navigator>
    );
}

export default LoginStackNavigator;
