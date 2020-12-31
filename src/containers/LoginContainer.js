import React, {useEffect, useState} from 'react';
import TrustView from '../components/common/TrustView';
import TrustContainer from '../components/common/TrustContainer';
import TrustText from '../components/common/TrustText';
import {styles} from './styles';
import Dimens from '../common/Dimens';
import {useTheme} from '@react-navigation/native';
import Content from '../components/login/Content';
import ButtonLogin from '../components/login/ButtonLogin';
import ButtonAttention from '../components/login/ButtonAttention';
import {NAVIGATION_CONSTANTS} from '../common/Constants';
import {io} from 'socket.io-client';
import Colors from '../common/Colors';
import store from '../redux/store/store';
import {setOldCharData} from '../redux/actions/OldCharAction';
import {showAppLoading} from '../redux/actions/LoadingAction';
import OldCharacterList from '../components/login/OldCharacterList';
import Clipboard from '@react-native-community/clipboard';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';

function LoginContainer(props) {
    const {navigation} = props;
    const [data, setData] = useState([]);
    const {colors} = useTheme();
    useEffect(() => {
        const socket = io('https://app.vinawallet.net',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        socket.emit('/socketVnaWallet', {'api_passer': {'key_passer': 'twl_aut_vrf'}});
        store.dispatch(showAppLoading(true));
        socket.on('twl_aut_vrf', (res) => {
            setData(res.data);
            store.dispatch(showAppLoading(false));
        });
    }, []);

    const onPressNext = () => {
        for (let a = [], i = 0; i < 12; ++i) {
            a[i] = i;
        }
        function shuffle(array) {
            let tmp, current, top = array.length;
            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }
            return array;
        }
        let a = shuffle(data);
        store.dispatch(setOldCharData(a));
        navigation?.navigate(NAVIGATION_CONSTANTS.VERIFY_LOGIN, data);
    };

    const onPressClipboard = () => {
        let arr = '';
        data.forEach(item => arr += item.title);
        Clipboard.setString(arr);
    };

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
                        <OldCharacterList
                            data={data}
                        />
                        <TrustView
                            style={{
                                flexDirection: 'row',
                                marginVertical: Dimens.verticalScale(40),
                            }}>
                            <TrustTouchableOpacity
                                onPress={onPressClipboard}
                            >
                                <TrustText
                                    style={styles.txtChar}
                                    text={'SAO CHÉP'}
                                />
                            </TrustTouchableOpacity>
                            <TrustText
                                onPress={() => {
                                    navigation?.navigate(NAVIGATION_CONSTANTS.QR_CODE, data);
                                }}
                                style={styles.txtChar}
                                text={'HIỂN THỊ QR'}
                            />
                        </TrustView>
                        <ButtonAttention/>
                        <ButtonLogin
                            style={{backgroundColor: Colors.secondBackground}}
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
