import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrustImage from '../../components/common/TrustImage';
import {styles} from './styles';
import Images from '../../common/Images';
import SettingContainer from '../../containers/SettingContainer';
import HomeStackNavigator from './HomeStackNavigator';
import React, {useEffect} from 'react';
import DexStackNavigator from './DexStackNavigator';
import {useTheme} from '@react-navigation/native';
import NotificationStackNavigator from './NotificationStackNavigator';
import TrustTouchableOpacity from '../../components/common/TrustTouchableOpacity';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';

const BottomTabNavigator = createBottomTabNavigator();

function TabNavigator(props) {
  const {navigation} = props;
  const {colors} = useTheme();


  return (
    <BottomTabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
        style: {
          backgroundColor: colors.bottom,
        },
      }}>
      <BottomTabNavigator.Screen
        name={'Ví'}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color}) =>
            <TrustTouchableOpacity onPress={() => {
              navigation?.navigate(NAVIGATION_CONSTANTS.MAIN);
            }}>
              <TrustImage
                tintColor={color}
                style={styles.image}
                localSource={Images.im_shield}
              />
            </TrustTouchableOpacity>,
        }}
      />
      <BottomTabNavigator.Screen
        name="DApps"
        component={NotificationStackNavigator}
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
        name="Cài đặt"
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


export default TabNavigator;
