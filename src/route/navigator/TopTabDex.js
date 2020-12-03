import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../../common/Colors';
import ConvertContainer from '../../containers/ConvertContainer';
import ExchangesContainer from '../../containers/ExchangesContainer';
import React from 'react';

const TopTabDexNavigator = createMaterialTopTabNavigator();

function TopTabDex() {
    return (
        <TopTabDexNavigator.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                labelStyle: {fontSize: 12},
                style: {backgroundColor: Colors.secondBackground},
            }}
        >
            <TopTabDexNavigator.Screen
                name="Convert"
                component={ConvertContainer}/>
            <TopTabDexNavigator.Screen
                name="Exchanges"
                component={ExchangesContainer}
            />
        </TopTabDexNavigator.Navigator>
    );
}
export default TopTabDex
