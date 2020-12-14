import * as React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './navigator/TabNavigator';
import {AppearanceProvider} from 'react-native-appearance';
import {darkTheme, defaultTheme} from '../common/Themes';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {io} from 'socket.io-client';
import store from '../redux/store/store';
import {setSocketData} from '../redux/actions/SocketAction';
import {showAppLoading} from '../redux/actions/LoadingAction';


const RouteNavigator = createStackNavigator();

function Route() {
  let currentTheme = useSelector(state => {
    return state.myDarMode;
  });
  const state = store.getState();
  useEffect(() => {
    const socket = io('https://coin-wallet-server.herokuapp.com',
      {transports: ['websocket', 'polling', 'flashsocket']},
    );
    store.dispatch(showAppLoading(true));
    socket.on('SOCKET_COIN_CHANGE', res => {
      store.dispatch(showAppLoading(false));
      const {socketData} = state.socket;
      socketData.push(res);
      if (socketData.length > 1) {
        socketData.shift();
        socketData.forEach(item => store.dispatch(setSocketData(item)),
        );
      }
    });
  }, []);


  return (
    <AppearanceProvider>
      <NavigationContainer theme={currentTheme ? darkTheme : defaultTheme}>
        <RouteNavigator.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RouteNavigator.Screen
            name={'Tab Navigator'}
            component={TabNavigator}
          />

        </RouteNavigator.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default Route;
