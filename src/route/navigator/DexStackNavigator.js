import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ConvertContainer from '../../containers/ConvertContainer';
import ExchangesContainer from '../../containers/ExchangesContainer';

const DexStack = createStackNavigator();

function DexStackNavigator() {
    return (
        <DexStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <DexStack.Screen
                name='ConvertContainer'
                component={ConvertContainer}
            />
            <DexStack.Screen
                name="ExchangesContainer"
                component={ExchangesContainer}
            />


        </DexStack.Navigator>
    );
}
export default DexStackNavigator
