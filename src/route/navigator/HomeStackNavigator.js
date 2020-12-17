import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../../containers/HomeContainer';
import CryptocurrencyContainer from '../../containers/CryptocurrencyContainer';
import CollectionContainer from '../../containers/CollectionContainer';
import MoreContainer from '../../containers/MoreContainer';
import React from 'react';
import DetailContainer from '../../containers/DetailContainer';
import MainCointainer from '../../containers/MainContainer';
import SendCoinContainer from '../../components/home/detail/SendCoinContainer';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';


const HomeStack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator
          initialRouteName={NAVIGATION_CONSTANTS.MAIN}
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen
              name={NAVIGATION_CONSTANTS.MAIN}
              component={MainCointainer}
            />
            <HomeStack.Screen
                name={NAVIGATION_CONSTANTS.HOME}
                component={HomeContainer}
            />
            <HomeStack.Screen
                name={NAVIGATION_CONSTANTS.CRYPT}
                component={CryptocurrencyContainer}
            />
            <HomeStack.Screen
                name={NAVIGATION_CONSTANTS.COLLECTION}
                component={CollectionContainer}
            />
            <HomeStack.Screen
                name={NAVIGATION_CONSTANTS.MORE}
                component={MoreContainer}
            />
            <HomeStack.Screen
                name={NAVIGATION_CONSTANTS.DETAIL}
                component={DetailContainer}
            />
            <HomeStack.Screen
                name={NAVIGATION_CONSTANTS.SEND_COIN}
                component={SendCoinContainer}
            />
        </HomeStack.Navigator>
    );
}
export default HomeStackNavigator
