import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';
import ConvertContainer from '../../containers/ConvertContainer';
import ExchangesContainer from '../../containers/ExchangesContainer';


const DexStack = createStackNavigator();

function DexStackNavigator() {
    return (
        <DexStack.Navigator
            initialRouteName={NAVIGATION_CONSTANTS.CONVERT}
            screenOptions={{
                headerShown: false,
            }}
        >
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
export default DexStackNavigator
