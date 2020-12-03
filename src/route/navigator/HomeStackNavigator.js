import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../../containers/HomeContainer';
import CryptocurrencyContainer from '../../containers/CryptocurrencyContainer';
import CollectionContainer from '../../containers/CollectionContainer';
import MoreContainer from '../../containers/MoreContainer';
import React from 'react';
import DetailContainer from '../../containers/DetailContainer';

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={HomeContainer}
            />
            <HomeStack.Screen
                name="Cryt"
                component={CryptocurrencyContainer}
            />
            <HomeStack.Screen
                name="Collection"
                component={CollectionContainer}
            />
            <HomeStack.Screen
                name="MoreContainer"
                component={MoreContainer}
            />
            <HomeStack.Screen
                name="DetailContainer"
                component={DetailContainer}
            />

        </HomeStack.Navigator>
    );
}
export default HomeStackNavigator
