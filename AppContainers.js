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
import ServiceSocket from './src/services/socket/ServiceSocket';

function AppContainer() {
    const {loading} = useSelector(state => state.loading);

    useEffect(() => {
            const socket = io('https://app.vinawallet.net/',
                {transports: ['websocket', 'polling', 'flashsocket']},
            );
            store.dispatch(showAppLoading(true));
            socket.on('SOCKET_COIN_CHANGE', (res) => {
                mergeSocket(res,socket);
            });
            getDarkmode()
    }, []);
    const mergeSocket =async (res,socket)=>{
        const params = {};
        const coinList = await ServiceSocket('get_coi_lst', params, socket);
            if ('undefined' != typeof (res)) {
                await coinList.forEach(item => {
                    res.forEach(ele => {
                        if (item.coin == ele.symbol) {
                            ele.img = item.img;
                        }
                    });
                });
                store.dispatch(setSocketData(Object.assign([], res)))
            }
    };

    const getDarkmode = async () => {
        const darkModeJson = await AsyncStorage.getItem('DarkMode');
        const darkMode = JSON.parse(darkModeJson);
        store.dispatch(setDarkMode(darkMode));
    };
    // const getHide = async () => {
    //     const hasHideJson = await AsyncStorage.getItem('HasHide');
    //     const hasHide = JSON.parse(hasHideJson);
    //     store.dispatch(setHide(hasHide));y
    // };
    return (
        <TrustView style={{flex: 1}}>
            {loading && <AppLoading/>}
            <Route/>
        </TrustView>
    );
}

export default AppContainer;
