import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrustImage from '../../components/common/TrustImage';
import {styles} from './styles';
import Images from '../../common/Images';
import NotificationContainer from '../../containers/NotificationContainers';
import SettingContainer from '../../containers/SettingContainer';
import HomeStackNavigator from './HomeStackNavigator';
import React from 'react';
import DexStackNavigator from './DexStackNavigator';

const BottomTabNavigator = createBottomTabNavigator();

function TabNavigator() {
    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({color}) => <TrustImage
                        tintColor={color}
                        style={styles.image}
                        localSource={Images.im_shield}
                    />,
                }}
            />
            <BottomTabNavigator.Screen
                name="DApps"
                component={NotificationContainer}
                options={{
                    tabBarIcon: ({color}) => <TrustImage
                        style={styles.image}
                        tintColor={color}
                        localSource={Images.im_window}
                    />,
                }}
            />
            <BottomTabNavigator.Screen
                name="DEX"
                component={DexStackNavigator}
                options={{
                    tabBarIcon: ({color}) => <TrustImage
                        tintColor={color}
                        style={styles.image}
                        localSource={Images.im_change}
                    />,
                }}
            />
            <BottomTabNavigator.Screen
                name="Settings"
                component={SettingContainer}
                options={{
                    tabBarIcon: ({color}) => <TrustImage
                        tintColor={color}
                        style={styles.image}
                        localSource={Images.im_setting}
                    />,
                }}
            />
        </BottomTabNavigator.Navigator>
    );
}
export default TabNavigator
