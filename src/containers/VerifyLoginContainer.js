import React, {useEffect, useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import TrustView from '../components/common/TrustView';
import {styles} from './styles';
import Content from '../components/login/Content';
import CharacterList from '../components/login/CharacterList';
import ButtonLogin from '../components/login/ButtonLogin';
import {useTheme} from '@react-navigation/native';
import TrustText from '../components/common/TrustText';
import {io} from 'socket.io-client';
import store from '../redux/store/store';
import {setSocketData} from '../redux/actions/SocketAction';
import {showAppLoading} from '../redux/actions/LoadingAction';


function VerifyLoginContainer(props) {
    const {colors} = useTheme();
    const {route, navigation} = props;
    const item = route.params;
    const [coinPrices, setCoinPrices] = useState([]);
    const [login,setLogin]=useState([]);
    const [coinPricesObj,setCoinPricesObj]= useState({})
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        const socket = io('https://vinawallet.net/',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        // Socket lấy dữ liệu User
        socket.emit('/socketVnaWallet',
            {'api_passer': {'key_passer': 'cus_log_in', 'email': 'egvietnam@gmail.com', 'password': 'egvietnam123'}});
        socket.on('cus_log_in', (res) => {
            setLogin(res.data.coin_list);
        });
        // Socket lấy tỉ giá Coin
        socket.on('SOCKET_COIN_CHANGE', res => {
            setCoinPrices(res);
        });
    }, []);
    const onPressLogin = () => {
        navigation?.navigate('Tab Navigator');
        coinPrices.forEach((item)=>{
            setCoinPricesObj( coinPricesObj[item?.code] = item)
        });
        store.dispatch(setSocketData(coinPricesObj));
    };

    console.log(coinPricesObj)
    return (
        <TrustContainer
            hasHeader={false}
            renderContentView={() => {
                return (
                    <TrustView style={[styles.LoginContainer, {backgroundColor: colors.background}]}>
                        <Content
                            txtTitle={'Xác minh các cụm từ khôi phục ví'}
                            txtContent={'Nhấn vào các từ để đặt chúng vào cạnh nhau theo đúng thứ tự'}
                        />
                        <TrustView style={styles.confirmChar}>
                            {newData.map((item, index) => {
                                return (
                                    <TrustView key={index} style={styles.character}>
                                        <TrustText
                                            style={{color: '#AAAAAA'}}
                                            text={item.id + ' '}
                                        />
                                        <TrustText text={item.title}/>
                                    </TrustView>
                                );
                            })}
                        </TrustView>
                        <CharacterList
                            data={item}
                        />
                        <ButtonLogin
                            onPress={onPressLogin}
                            txtLogin={'ĐÚNG òi'}
                        />
                    </TrustView>
                );
            }}
        />
    );
}

export default VerifyLoginContainer;
