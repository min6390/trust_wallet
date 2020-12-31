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
    const [data, setData] = useState();
    const [img, setImg] = useState([]);

    useEffect(() => {
        const socket = io('https://app.vinawallet.net/',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        store.dispatch(showAppLoading(true));
        socket.emit('/socketVnaWallet', {'api_passer': {'key_passer': 'get_coi_lst'}});
        socket.on('get_coi_lst', res => {
            setImg(res);
        });
        socket.on('SOCKET_COIN_CHANGE', (res) => {
            setData(res);
        });
        setTimeout(handle, 2000);
        getDarkmode();
    }, []);

    const handle = () => {
        if (img && data ) {
            img.forEach(item => {
                data.forEach(data => {
                    if (item.coin == data.symbol) {
                        data.img = item.img;
                    }
                });
            });
            store.dispatch(setSocketData(data));
            store.dispatch(showAppLoading(false));
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
            <Route/>
            {loading && <AppLoading/>}
        </TrustView>
    );
}

export default AppContainer;
