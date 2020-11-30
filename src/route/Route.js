import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from '../containers/HomeContainer';
import NotificationContainer from '../containers/NotificationContainers';
import DexContainer from '../containers/DexContainer';
import SettingContainer from '../containers/SettingContainer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CryptocurrencyContainer from '../containers/CryptocurrencyContainer';
import CollectionContainer from '../containers/CollectionContainer';
import Colors from '../common/Colors';

const Tab = createMaterialTopTabNavigator();

function TopTabHome() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: Colors.secondBackground },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeContainer}
            />
            <Tab.Screen
                name="Crypt"
                component={CryptocurrencyContainer} />
            <Tab.Screen
                name="Collection"
                component={CollectionContainer}
            />
        </Tab.Navigator>
    );
}
const BottomTab = createBottomTabNavigator();
 function Route() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name="Home"
                    component={TopTabHome}
                />
                <BottomTab.Screen
                    name="DApps"
                    component={NotificationContainer}
                />
                <BottomTab.Screen
                    name="DEX"
                    component={DexContainer}
                />
                <BottomTab.Screen
                    name="Settings"
                    component={SettingContainer}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}
export default Route
