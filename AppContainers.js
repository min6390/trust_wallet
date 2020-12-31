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
    const [data, setData] = useState([]);
    const [img, setImg] = useState([]);

    useEffect(() => {
        // async function f() {
            const socket = io('https://app.vinawallet.net/',
                {transports: ['websocket', 'polling', 'flashsocket']},
            );
            store.dispatch(showAppLoading(true));
            // socket.emit('/socketVnaWallet', {'api_passer': {'key_passer': 'get_coi_lst'}});
            // socket.on('get_coi_lst', res => {
            //     setImg(res);
            // });
            socket.on('SOCKET_COIN_CHANGE', (res) => {
                ahihi(res,socket);
            });
            // console.log('AAAAAAAAAAAAAAA');
        // }

        // console.log('BBBBBBBBBBBBB');
        // f().then(() => {
        //     handle()
        //     console.log('TTTTTTTTTTTTTTTTT')
        // })
        // getDarkmode();

    }, []);
    const ahihi =async (res,socket)=>{
        const params = {};
        const coinList = await ServiceSocket('get_coi_lst', params, socket);
            if ('undefined' != typeof (res)) {
                await coinList.forEach(item => {
                    res.forEach(ele => {
                        if (item.coin == ele.symbol) {
                            ele.img = item.img;
                            // list.push(ele)
                        }
                    });
                });
                store.dispatch(setSocketData(Object.assign([], res)))
                // console.log(list)
            }
    }
    const handle = async () => {
        if (img != undefined && data != undefined) {
            img.forEach(item => {
                data.forEach(data => {
                    if (item.coin == data.symbol) {
                        data.img = item.img;
                    }
                });
            });
            store.dispatch(setSocketData(Object.assign([], data)));
            console.log('data==============', data);
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
            {loading && <AppLoading/>}
            <Route/>
        </TrustView>
    );
}

export default AppContainer;
