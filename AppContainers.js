import React, {useEffect, useState} from 'react';
import Route from './src/route/Route';
import TrustView from './src/components/common/TrustView';
import AppLoading from './src/components/common/AppLoading';
import {useSelector} from 'react-redux';
import SocketConnect from './src/services/socket/SocketApi';
import {io} from 'socket.io-client';
import store from './src/redux/store/store';
import {setSocketData} from './src/redux/actions/SocketAction';

function AppContainer() {

  const {loading} = useSelector(state => state.loading);
  return (
    <TrustView style={{flex: 1}}>
      <Route/>
      {loading && <AppLoading/>}
    </TrustView>
  );
}

export default AppContainer;
