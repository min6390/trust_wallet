import React, {useEffect, useState} from 'react';
import {Modal} from 'react-native';
import TrustView from '../common/TrustView';
import {styles} from './styles';
import ModalHeader from '../header/ModalHeader';
import TrustTextInput from '../common/TrustTextInput';
import Dimens from '../../common/Dimens';
import {useTheme} from '@react-navigation/native';

function SettingModal(props) {
    const {colors,navigation} = useTheme();
    const {hasModalSetting} = props;
    const [modalSettingVisible, setModalSettingVisible] = useState(false);
    const onPressBackSetting = () => {
        setModalSettingVisible(false);
    };
    useEffect(() => {
        setModalSettingVisible(hasModalSetting);
    }, [hasModalSetting]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalSettingVisible}
        >
            <TrustView style={[styles.modalView, {backgroundColor: colors.background}]}>
                <ModalHeader
                    title={'Nâng cao'}
                    hasSetting={false}
                    onPressBack={onPressBackSetting}
                    navigation={navigation}
                />
                <TrustTextInput
                    label={'Phí mạng (stats/byte)'}
                    style={{width: Dimens.widthScreen - 30}}
                />
            </TrustView>
        </Modal>
    );
}

export default SettingModal;
