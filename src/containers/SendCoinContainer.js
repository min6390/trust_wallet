import React, {useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import TrustView from '../components/common/TrustView';
import Dimens from '../common/Dimens';
import AddressItem from '../components/home/detail/AddressItem';
import AmountCoinItem from '../components/home/detail/AmountCoinItem';
import TrustText from '../components/common/TrustText';
import {styles} from './styles';

function SendCoinContainer(props) {
  const {navigation, route} = props;
  const {price, qrvalue, symbol} = route.params;
  const [address, setAddress] = useState('');
  const [textError, setTextError] = useState(false);
  const callbackAddress = (childData) => {
    setAddress(childData);
  };
  const onPressCoinSwap = () => {

  };
  const onPressContinue = () => {
    if (address) {
      setTextError(false);
    } else {
      setTextError(true);
    }

  };
  return (
    <TrustContainer
      onPressContinue={onPressContinue}
      title={price}
      text={'Tiếp Tục'}
      rightIcon={false}
      navigation={navigation}
      headerMode={HEADER_MODE.DETAIL}
      renderContentView={() => {
        return (
          <TrustView style={{alignItems: 'center', marginVertical: Dimens.verticalScale(10)}}>
            <AddressItem
              style={textError?{borderColor:'red'}:{borderColor:'blue'}}
              callbackAddress={callbackAddress}
              qrvalue={qrvalue}
              navigation={navigation}
            />
            {textError ? <TrustText
              text={'Địa chỉ không hợp lệ'}
              style={styles.textError}
            /> : <></>}
            <AmountCoinItem
              onPressCoinSwap={onPressCoinSwap}
              keyboardType={'number-pad'}
              label={'Số lượng ' + price}
              txtLeft={'TỐI ĐA'}
              txtRight={symbol}
            />
          </TrustView>
        );
      }}
    />
  );
}

export default SendCoinContainer;
