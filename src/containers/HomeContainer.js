import React, {useEffect, useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustView from '../components/common/TrustView';
import {useSelector} from 'react-redux';
import TrustText from '../components/common/TrustText';
import TrustImage from '../components/common/TrustImage';
import Images from '../common/Images';
import Dimens from '../common/Dimens';
import TrustLine from '../components/common/TrustLine';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';
import {io} from 'socket.io-client';
import ServiceApis from '../services/apis/ServiceApis';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import store from '../redux/store/store';
import {showAppLoading} from '../redux/actions/LoadingAction';

function HomeContainer(props) {
    const {colors} = useTheme();
    const {navigation} = props;
    const [dataSocket, setDataSocket] = useState([]);
    const [data, setData] = useState([]);
    const {cryptData} = useSelector(state => state.crypt);


    useEffect(() => {
        // ServiceApis.getService((res)=>{
        //     setData(res.data)
        // },err =>{
        //     alert(err)
        // })
        const socket = io('https://server-coin-wallet.herokuapp.com',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        store.dispatch(showAppLoading(true));
        socket.on('SOCKET_COIN_CHANGE', res => {
            setDataSocket(res);
            store.dispatch(showAppLoading(false));
        });
    }, []);
    const renderItem = ({item}) => {
        return (
            <>
                <TrustTouchableOpacity
                    style={[styles.content]}
                    onPress={() => navigation?.navigate('Detail', item)}
                >
                    <TrustImage
                        style={styles.image}
                        localSource={Images.im_xrp}
                    />
                    <TrustView style={{marginHorizontal: Dimens.scale(10)}}>
                        <TrustText
                            style={{color: colors.textColor}}
                            text={item.name}
                        />
                        <TrustText
                            style={{color: '#8C8FBF'}}
                            text={item.price}
                        />
                    </TrustView>
                </TrustTouchableOpacity>
                <TrustLine/>
            </>
        );
    };
    return (
        <TrustContainer
            style={{backgroundColor: colors.background}}
            routeData={dataSocket}
            firstScreen={'Home'}
            secondScreen={'Cryt'}
            thirdScreen={'Collection'}
            firstName={'Tiền mã hóa'}
            secondName={'Tài chính'}
            duaScreen={true}
            leftIcon={true}
            rightIcon={true}
            process={0}
            navigation={navigation}
            renderContentView={() =>
                <>
                    <TrustFlatList
                        data={cryptData}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        ListHeaderComponent={() => {
                            return (
                                <Information/>
                            );
                        }
                        }
                    />
                </>
            }
        />
    );
}


export default HomeContainer;
