import React, { useState} from 'react';
import {
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from '@react-navigation/native';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import Colors from '../../common/Colors';
import {styles} from './styles';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import Dimens from '../../common/Dimens';

const AmountCoinItem = (props) => {
  const {txtRight, keyboardType, label,onPressCoinSwap,} = props;
  AmountCoinItem.propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    keyboardType: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    maxLength: PropTypes.number,
    onPressAmount: PropTypes.func,
    onPressCoinSwap: PropTypes.func,
  };
  AmountCoinItem.defaultProps = {
    style: undefined,
  };
  const {colors} = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [amount, setAmount] = useState('');
  const handleBlur = () => setIsFocused(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const onChangeAmount = (amount) => {
    setAmount(amount);
  };
  const onPressAmount = () => {
   setAmount(Number(amount)+1);
    setIsFocused(true);
  };
  return (
    <TrustView
      style={[styles.container,
        !isFocused ?
          {borderColor: colors.borderColor} : {borderColor: Colors.secondBackground},
      ]}>
      {isFocused ?
        <TrustView
          style={[styles.labelStyle, {backgroundColor: colors.background}]}>
          <TrustText
            style={styles.textColor}
            text={label}
          />
        </TrustView> : <></>}
      <TextInput
        keyboardType={keyboardType}
        placeholderTextColor={'#AAAAAA'}
        placeholder={isFocused ? '' : label}
        blurOnSubmit
        {...props}
        style={[styles.content, {color: colors.textColor}]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeAmount}
        value={amount.toString()}
      />
      <TrustView style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Dimens.scale(5),
      }}>
        <TrustTouchableOpacity
          {...props}
          onPress={onPressAmount}>
          <TrustText
            style={[{color: colors.activeTintColor}, styles.txtRight]}
            text={'TỐI ĐA'}
          />
        </TrustTouchableOpacity>
        <TrustTouchableOpacity
          onPress={onPressCoinSwap}>
          <TrustText
            style={[{color: colors.activeTintColor}, styles.txtRight]}
            text={txtRight}
          />
        </TrustTouchableOpacity>
      </TrustView>
    </TrustView>
  );
};

export default AmountCoinItem;
