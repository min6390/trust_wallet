import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DetailContainer from '../../containers/DetailContainer';
import SendCoinContainer from '../../containers/SendCoinContainer';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';
import ScanQR from '../../components/common/ScanQR';


const DetailStack = createStackNavigator();

function DetailStackNavigator() {
    return (
        <DetailStack.Navigator
            initialRouteName={NAVIGATION_CONSTANTS.DETAIL}
            screenOptions={{
                headerShown: false,
            }}
        >
            <DetailStack.Screen
                name={NAVIGATION_CONSTANTS.DETAIL}
                component={DetailContainer}
            />
            <DetailStack.Screen
                name={NAVIGATION_CONSTANTS.SEND_COIN}
                component={SendCoinContainer}
            />
            <DetailStack.Screen
                name={NAVIGATION_CONSTANTS.SCAN_QR}
                component={ScanQR}
            />
        </DetailStack.Navigator>
    );
}
export default DetailStackNavigator
