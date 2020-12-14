import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../../containers/HomeContainer';
import CryptocurrencyContainer from '../../containers/CryptocurrencyContainer';
import CollectionContainer from '../../containers/CollectionContainer';
import MoreContainer from '../../containers/MoreContainer';
import React from 'react';
import DetailContainer from '../../containers/DetailContainer';
import MainCointainer from '../../containers/MainContainer';


const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator
          initialRouteName="Main"
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen
              name={'Main'}
              component={MainCointainer}
            />
            <HomeStack.Screen
                name={'Home'}
                component={HomeContainer}
            />
            <HomeStack.Screen
                name={'Cryt'}
                component={CryptocurrencyContainer}
            />
            <HomeStack.Screen
                name={'Collection'}
                component={CollectionContainer}
            />
            <HomeStack.Screen
                name={'More'}
                component={MoreContainer}
            />
            <HomeStack.Screen
                name={'Detail'}
                component={DetailContainer}
            />

        </HomeStack.Navigator>
    );
}
export default HomeStackNavigator
