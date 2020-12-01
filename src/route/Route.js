import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from '../containers/HomeContainer';
import NotificationContainer from '../containers/NotificationContainers';
import DexContainer from '../containers/DexContainer';
import SettingContainer from '../containers/SettingContainer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CryptocurrencyContainer from '../containers/CryptocurrencyContainer';
import CollectionContainer from '../containers/CollectionContainer';
import Colors from '../common/Colors';
import ConvertContainer from '../containers/ConvertContainer';
import ExchangesContainer from '../containers/ExchangesContainer';


const TopTabDexNavigator = createMaterialTopTabNavigator();

function TopTabDex() {
    return (
        <TopTabHomeNavigator.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                labelStyle: {fontSize: 12},
                style: {backgroundColor: Colors.secondBackground},
            }}
        >
            <TopTabHomeNavigator.Screen
                name="Convert"
                component={ConvertContainer}/>
            <TopTabHomeNavigator.Screen
                name="Exchanges"
                component={ExchangesContainer}
            />
        </TopTabHomeNavigator.Navigator>
    );
}

const TopTabHomeNavigator = createMaterialTopTabNavigator();

function TopTabHome() {
    return (
        <TopTabHomeNavigator.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                labelStyle: {fontSize: 12},
                style: {backgroundColor: Colors.secondBackground},
            }}
        >
            <TopTabHomeNavigator.Screen
                name="Home"
                component={HomeContainer}
            />
            <TopTabHomeNavigator.Screen
                name="Crypt"
                component={CryptocurrencyContainer}/>
            <TopTabHomeNavigator.Screen
                name="Collection"
                component={CollectionContainer}
            />
        </TopTabHomeNavigator.Navigator>
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
                    component={TopTabDex}
                />
                <BottomTab.Screen
                    name="Settings"
                    component={SettingContainer}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

export default Route;
