import React, {useEffect, useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';
import TrustFlatList from '../components/common/TrustFlatList';
import { useSelector} from 'react-redux';
import TrustLine from '../components/common/TrustLine';
import {useTheme} from '@react-navigation/native';
import ListCoinItem from '../components/home/ListCoinItem';
import {io} from 'socket.io-client';


function HomeContainer(props) {
    const {colors} = useTheme();
    const {navigation} = props;
    const {socketData} = useSelector(state => state.socket);
    props.callbackIcon(true);
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        const socket = io('https://app.vinawallet.net/',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        socket.emit('/socketVnaWallet',
            {'api_passer': {'key_passer': 'cus_log_in', 'email': 'egvietnam@gmail.com', 'password': 'egvietnam123'}});
        socket.on('cus_log_in', (res) => {
            setNewData(res.data.coin_list);
        });
    }, []);

    return (
        <TrustContainer
            style={{backgroundColor: colors.primary}}
            hasHeader={false}
            navigation={navigation}
            renderContentView={() =>
                <TrustFlatList
                    style={{backgroundColor: colors.background}}
                    data={socketData}
                    keyExtractor={item => item.name}
                    renderItem={({item, index}) =>
                        <ListCoinItem
                            navigation={navigation}
                            item={item}
                            index={index}
                        />}
                    ItemSeparatorComponent={() => <TrustLine/>}
                    ListHeaderComponent={() => {
                        return (
                            <Information/>
                        );
                    }
                    }
                />
            }
        />
    );
}


export default HomeContainer;
