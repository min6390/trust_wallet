import React, {useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import {useTheme} from '@react-navigation/native';
import TrustView from '../components/common/TrustView';
import Dimens from '../common/Dimens';
import AddressItem from '../components/home/detail/AddressItem';
import AmountCoinItem from '../components/home/detail/AmountCoinItem';

function SendCoinContainer(props) {
  const {colors} = useTheme();
  const {navigation, route} = props;
  const {price, qrvalue} = route.params;
  const [coin,setCoin]=useState();
  const onPressCoinSwap = () => {

  };

  return (
    <TrustContainer
      title={price}
      text={'Tiếp Tục'}
      rightIcon={false}
      navigation={navigation}
      headerMode={HEADER_MODE.DETAIL}
      renderContentView={() => {
        return (
          <TrustView style={{alignItems: 'center', marginVertical: Dimens.verticalScale(10)}}>
            <AddressItem
              qrvalue={qrvalue}
              navigation={navigation}
            />
            <AmountCoinItem
              coin={coin}
              onPressCoinSwap={onPressCoinSwap}
              keyboardType={'number-pad'}
              label={'Số lượng ' + price}
              txtLeft={'TỐI ĐA'}
              txtRight={price}
            />
          </TrustView>
        );
      }}
    />
  );
}

export default SendCoinContainer;
