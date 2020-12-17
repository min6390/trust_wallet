import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ConvertContainer from '../../containers/ConvertContainer';
import ExchangesContainer from '../../containers/ExchangesContainer';
import DexContainer from '../../containers/DexContainer';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';

const DexStack = createStackNavigator();

function DexStackNavigator() {
    return (
        <DexStack.Navigator
            initialRouteName={NAVIGATION_CONSTANTS.DEX}
            screenOptions={{
                headerShown: false,
            }}
        >
            <DexStack.Screen
                name={NAVIGATION_CONSTANTS.DEX}
                component={DexContainer}
            />
            <DexStack.Screen
                name={NAVIGATION_CONSTANTS.CONVERT}
                component={ConvertContainer}
            />
            <DexStack.Screen
                name={NAVIGATION_CONSTANTS.EXCHANGES}
                component={ExchangesContainer}
            />


        </DexStack.Navigator>
    );
}

export default DexStackNavigator;
