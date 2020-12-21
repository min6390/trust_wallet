import React, {useEffect, useState} from 'react';
import Images from '../common/Images';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustContainer from '../components/common/TrustContainer';
import {NAVIGATION_CONSTANTS} from '../common/Constants';
import Search from '../components/notification/Search';
import WebView from 'react-native-webview';
import ListItem from '../components/notification/ListItem';

const data = [
    {
        id: 1,
        title: 'History',
        contents: [],
    },
    {
        id: 2,
        title: 'New DAPps',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: '456Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },
    {
        id: 3,
        title: 'Defi',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },
    {
        id: 4,
        title: 'Smart Chain',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },
    {
        id: 5,
        title: 'Popular',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },


];

function NotificationContainer(props) {
    const [message, setMessage] = useState('');
    const {navigation} = props;

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
                            <TrustFlatList
                                data={data}
                                keyExtractor={item => item.id?.toString()}
                                renderItem={({item}) =>
                                    <ListItem navigation={navigation} item={item}/>
                                }
                            />
                        </>
                );
            }}
        />

    );
}


export default NotificationContainer;
