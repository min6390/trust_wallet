import React, {useEffect, useState} from 'react';
import {
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from '@react-navigation/native';
import TrustView from '../../common/TrustView';
import TrustText from '../../common/TrustText';
import Colors from '../../../common/Colors';
import {styles} from './styles';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustImage from '../../common/TrustImage';
import {NAVIGATION_CONSTANTS} from '../../../common/Constants';
import Dimens from '../../../common/Dimens';
import Images from '../../../common/Images';

const AddressItem = (props) => {
  const {navigation, keyboardType, qrvalue,style} = props;
  AddressItem.propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    keyboardType: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    value: PropTypes.string,
    maxLength: PropTypes.number,
  };
  AddressItem.defaultProps = {
    style: undefined,
  };
  const {colors} = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [address, setAddress] = useState('');
  const handleBlur = () => setIsFocused(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  useEffect(() => {
    setAddress(qrvalue);
    setIsFocused(true)
  }, [qrvalue]);
  props.callbackAddress(address);

  const onPress = () => {
    navigation?.navigate(NAVIGATION_CONSTANTS.SCAN_QR);
  };
  const onChangeText = (text) => {
    setAddress(text);
  };
  return (
    <TrustView
      {...props}
      style={[style,styles.container,
        !isFocused ?
          {borderColor: colors.borderColor} : {borderColor: Colors.secondBackground},
      ]}>
      {isFocused ?
        <TrustView
          style={[styles.labelStyle, {backgroundColor: colors.background}]}>
          <TrustText
            style={styles.textColor}
            text={'Địa chỉ người nhận'}
          />
        </TrustView> : <></>}
      <TextInput
        keyboardType={keyboardType}
        placeholderTextColor={'#AAAAAA'}
        placeholder={isFocused ? '' : 'Địa chỉ người nhận'}
        blurOnSubmit
        {...props}
        style={[styles.content, {color: colors.textColor}]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        value={address}
      />
      <TrustView style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Dimens.scale(5),
      }}>
        <TrustTouchableOpacity
          onPress={onPress}>
          <TrustImage
            tintColor={colors.activeTintColor}
            style={[styles.image]}
            localSource={Images.im_scan}/>
        </TrustTouchableOpacity>
        <TrustTouchableOpacity>
          <TrustText
            style={[{color: colors.activeTintColor}, styles.txtRight]}
            text={'Dán'}
          />
        </TrustTouchableOpacity>
      </TrustView>
    </TrustView>
  );
};


export default AddressItem;
