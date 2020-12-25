import React, {useEffect} from 'react';
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
import {setHide} from './src/redux/actions/HideAction';

function AppContainer() {
    const {loading} = useSelector(state => state.loading);
    useEffect(() => {
        const socket = io('https://vinawallet.net/',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        store.dispatch(showAppLoading(true));
        socket.on('SOCKET_COIN_CHANGE', res => {
            store.dispatch(showAppLoading(false));
            store.dispatch(setSocketData(res));
        });
        getDarkmode();
        getHide();

    }, []);

    const getDarkmode = async () => {
        const darkModeJson = await AsyncStorage.getItem('DarkMode');
        const darkMode = JSON.parse(darkModeJson);
        store.dispatch(setDarkMode(darkMode));
    };
    const getHide = async () => {
        const hasHideJson = await AsyncStorage.getItem('HasHide');
        const hasHide = JSON.parse(hasHideJson);
        store.dispatch(setHide(hasHide));
    };

    return (
        <TrustView style={{flex: 1}}>
            <Route/>
            {loading && <AppLoading/>}
        </TrustView>
    );
}

export default AppContainer;
