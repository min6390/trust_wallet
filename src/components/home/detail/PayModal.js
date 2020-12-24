import React, {useEffect, useState} from 'react';
import { Modal,} from 'react-native';
import TrustView from '../../common/TrustView';
import TrustText from '../../common/TrustText';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import {styles} from './styles';

const PayModal = (props) => {
  const {modal} = props;
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(modal);
  }, [modal]);
  const onPress = () => {
    setModalVisible(false);
    props.callbackModal(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <TrustView style={styles.modalContainer}>
        <TrustTouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TrustText
            style={styles.textStyle}
          text={'hide'}/>
        </TrustTouchableOpacity>
      </TrustView>
    </Modal>
  );
};


export default PayModal;
