import React, {useEffect, useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import {NAVIGATION_CONSTANTS} from '../common/Constants';
import Search from '../components/notification/Search';
import WebView from 'react-native-webview';
import ListItem from '../components/notification/ListItem';
import {ScrollView} from 'react-native';
import {io} from 'socket.io-client';

function NotificationContainer(props) {
    const {navigation} = props;
    const [message, setMessage] = useState('');
    const [newsDataBitcoin, setNewsDataBitcoin] = useState([]);

    useEffect(() => {
        const socket = io('https://vinawallet.net',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        socket.emit('/socketVnaWallet', {'api_passer': {'key_passer': 'get_nws'}});
        socket.on('get_nws', (res) => {
            setNewsDataBitcoin(res);
        });
    }, []);

    useEffect(() => {
        const unsubscribe = navigation?.addListener('blur', () => {
            setMessage('');
        });
        return unsubscribe;
    }, [navigation]);

    const callbackFunction = (childData) => {
        setMessage(childData);
    };

    return (
        <TrustContainer
            nameScreen={NAVIGATION_CONSTANTS.HOME}
            hasHeader={false}
            renderContentView={() => {
                return (
                    message ?
                        <>
                            <Search navigation={navigation}
                                    parentCallBack={callbackFunction}
                            />
                            <WebView source={{uri: 'https://' + message.toString().trim()}}/>
                        </> :
                        <>
                            <Search parentCallBack={callbackFunction}/>
                            <ScrollView>
                                <ListItem
                                    navigation={navigation}
                                    data={newsDataBitcoin}
                                    text={'Techcrunch'}
                                />
                                <ListItem
                                    navigation={navigation}
                                    data={newsDataBitcoin}
                                    text={'Techcrunch'}
                                />
                            </ScrollView>
                        </>
                );
            }}
        />

    );
}

export default NotificationContainer;
