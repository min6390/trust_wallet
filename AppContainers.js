import React, {useEffect, useState} from 'react';
import Route from './src/route/Route';
import TrustView from './src/components/common/TrustView';
import AppLoading from './src/components/common/AppLoading';
import {useSelector} from 'react-redux';
import store from './src/redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setDarkMode} from './src/redux/actions/ThemeAction';

function AppContainer() {

  const {loading} = useSelector(state => state.loading);

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
