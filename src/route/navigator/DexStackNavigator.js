import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ConvertContainer from '../../containers/ConvertContainer';
import ExchangesContainer from '../../containers/ExchangesContainer';
import DexContainer from '../../containers/DexContainer';

const DexStack = createStackNavigator();

function DexStackNavigator() {
    return (
        <DexStack.Navigator
          initialRouteName="Dex"
          screenOptions={{
                headerShown: false,
            }}
        >
          <DexStack.Screen
            name={'Dex'}
            component={DexContainer}
          />
            <DexStack.Screen
                name={'Convert'}
                component={ConvertContainer}
            />
            <DexStack.Screen
                name={'Exchanges'}
                component={ExchangesContainer}
            />


        </DexStack.Navigator>
    );
}
export default DexStackNavigator
