import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './navigator/TabNavigator';
const RouteNavigator = createStackNavigator();

function Route() {
    return (
        <NavigationContainer>
            <RouteNavigator.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <RouteNavigator.Screen
                    name="Tab"
                    component={TabNavigator}
                />

            </RouteNavigator.Navigator>
        </NavigationContainer>
    );
}

export default Route;
