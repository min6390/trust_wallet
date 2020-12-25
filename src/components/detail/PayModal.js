import React, {useEffect, useState} from 'react';
import {Modal,} from 'react-native';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {styles} from './styles';
import ModalHeader from '../header/ModalHeader';
import CoinInformation from './CoinInformation';
import ExchangesItem from './ExchangesItem';
import PayItem from './PayItem';
import {useTheme} from '@react-navigation/native';
import SettingModal from './SettingModal';

const PayModal = (props) => {
    const {modal, navigation} = props;
    const {colors} = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalSettingVisible, setModalSettingVisible] = useState(false);

    useEffect(() => {
        setModalVisible(modal);
    }, [modal]);
    const onPressBack = () => {
        setModalVisible(false);
        props.callbackModal(false);
    };
    const onPressSetting = () => {
        setModalSettingVisible(true);
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <TrustView style={[styles.modalContainer, {backgroundColor: colors.background}]}>
                <ModalHeader
                    hasSetting={true}
                    title={'Xác nhận giao dịch'}
                    onPressSetting={onPressSetting}
                    onPressBack={onPressBack}
                    navigation={navigation}/>
                <CoinInformation/>
                <ExchangesItem
                    text={'Từ'}
                />
                <ExchangesItem
                    text={'Đến'}
                />
                <PayItem
                    txtColor={'#AAAAAA'}
                    money={'0.00 LTC (0,00 $)'}
                    text={'Phí thanh toán'}/>
                <PayItem
                    money={'0,00 $'}
                    backgound={colors.buttonPay}
                    text={'Tổng số tối đa'}/>
                <TrustTouchableOpacity
                    style={[styles.buttonPay, {backgroundColor: colors.buttonPay}]}>
                    <TrustText
                        style={[styles.textPay, {color: colors.txtPay}]}
                        text={'SỐ DƯ KHÔNG ĐỦ'}
                    />
                </TrustTouchableOpacity>
            </TrustView>
          <SettingModal
              hasModalSetting={modalSettingVisible}
          />
        </Modal>
    );
};


export default PayModal;
