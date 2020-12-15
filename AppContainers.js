import React, {useEffect, useState} from 'react';
import Route from './src/route/Route';
import TrustView from './src/components/common/TrustView';
import AppLoading from './src/components/common/AppLoading';
import {useSelector} from 'react-redux';
import store from './src/redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setDarkMode} from './src/redux/actions/ThemeAction';
import {io} from 'socket.io-client';
import {showAppLoading} from './src/redux/actions/LoadingAction';
import {setSocketData} from './src/redux/actions/SocketAction';

function AppContainer() {

  const {loading} = useSelector(state => state.loading);

  const state = store.getState();
  useEffect(() => {
    const socket = io('https://coin-wallet-server.herokuapp.com',
      {transports: ['websocket', 'polling', 'flashsocket']},
    );
    store.dispatch(showAppLoading(true));
    socket.on('SOCKET_COIN_CHANGE', res => {
      store.dispatch(showAppLoading(false));
      const {socketData} = state.socket;
      //const newSocketData = socketData.concat(res)
      store.dispatch(setSocketData(res))
      //  socketData.push(res);
      // if (socketData.length > 1) {
      //   socketData.shift();
      //   socketData.forEach(item =>),
      //   );
      // }
    });
  }, []);


  useEffect(() => {
    getDarkmode();
  }, []);
  const getDarkmode = async () => {
    const darkModeJson = await AsyncStorage.getItem('DarkMode');
    const darkMode = JSON.parse(darkModeJson);
    store.dispatch(setDarkMode(darkMode));
  };
  return (
    <TrustView style={{flex: 1}}>
      <Route/>
      {loading && <AppLoading/>}
    </TrustView>
  );
}

export default AppContainer;
