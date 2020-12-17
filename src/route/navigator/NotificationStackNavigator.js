import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import NotificationContainer from '../../containers/NotificationContainers';
import ShowAll from '../../components/notification/ShowAll';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';


const NotificationStack = createStackNavigator();

function NotificationStackNavigator() {
    return (
        <NotificationStack.Navigator
            initialRouteName={NAVIGATION_CONSTANTS.NOTIFICATION}
            screenOptions={{
                headerShown: false,
            }}
        >
            <NotificationStack.Screen
                name={NAVIGATION_CONSTANTS.NOTIFICATION}
                component={NotificationContainer}
            />
            <NotificationStack.Screen
                name={NAVIGATION_CONSTANTS.SHOW_ALL}
                component={ShowAll}
            />

        </NotificationStack.Navigator>
    );
}

export default NotificationStackNavigator;
