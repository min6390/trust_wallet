import React, {} from 'react';
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
import Colors from '../common/Colors';
import store from '../redux/store/store';
import {setOldCharData} from '../redux/actions/OldCharAction';
import OldCharacterList from '../components/login/OldCharacterList';
import Clipboard from '@react-native-community/clipboard';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import {useSelector} from 'react-redux';

function LoginContainer(props) {
    const {navigation} = props;
    const {colors} = useTheme();
    const {verifyData} = useSelector(state => state.verifyList);
    const onPressNext = () => {
        navigation?.navigate(NAVIGATION_CONSTANTS.VERIFY_LOGIN);
        randomVerify();
    };

    function randomVerify() {
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

        let a =  shuffle([...verifyData]);
        store.dispatch(setOldCharData(a));
    }

    const onPressClipboard = () => {
        let arr = '';
        verifyData.forEach(item => arr += item.title+ " ");
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
                            data={verifyData}
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
                                    navigation?.navigate(NAVIGATION_CONSTANTS.QR_CODE, verifyData);
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
