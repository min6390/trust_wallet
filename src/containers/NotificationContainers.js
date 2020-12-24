import React, {useEffect, useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import {NAVIGATION_CONSTANTS} from '../common/Constants';
import Search from '../components/notification/Search';
import WebView from 'react-native-webview';
import ListItem from '../components/notification/ListItem';
import ServiceApis from '../services/apis/ServiceApis';
import {ScrollView} from 'react-native';

function NotificationContainer(props) {
    const {navigation} = props;
    const [message, setMessage] = useState('');
    const [newsDataBitcoin, setnewsDataBitcoin] = useState([]);
    const [newsDataApple, setnewsDataApple] = useState([]);
    const [newsDataTrump, setnewsDataTrump] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation?.addListener('blur', () => {
            setMessage('');
        });
        return unsubscribe;
    }, [navigation]);

    const callbackFunction = (childData) => {
        setMessage(childData);
    };
    useEffect(() => {
        ServiceApis.getNews('apple', (res) => {
            setnewsDataApple(res.data.articles);
        }, err => {
            alert(err);
        });
        ServiceApis.getNews('trump', (res) => {
            setnewsDataTrump(res.data.articles);
        }, err => {
            alert(err);
        });
        ServiceApis.getNews('bitcoin', (res) => {
            setnewsDataBitcoin(res.data.articles);
        }, err => {
            alert(err);
        });
    }, []);


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
                                <ListItem navigation={navigation} data={newsDataBitcoin} text={'Bitcoin'}/>
                                {/*<ListItem navigation={navigation} data={newsDataApple} text={'Apple'}/>*/}
                                {/*<ListItem navigation={navigation} data={newsDataTrump} text={'Trump'}/>*/}
                            </ScrollView>
                        </>
                );
            }}
        />

    );
}


export default NotificationContainer;
