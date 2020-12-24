import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import TrustLine from '../common/TrustLine';
import Dimens from '../../common/Dimens';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';

const PayItem = (props) => {
  const {colors}=useTheme();
  const {text,backgound,money,txtColor} = props;
  return (
    <TrustView style={{width: Dimens.widthScreen, backgroundColor:backgound}}>
      <TrustView
        style={styles.payItem}
      >
        <TrustText
          style={[styles.exchangesText,{color: colors.textColor}]}
          text={text}
        />
        <TrustText
          style={{ color:txtColor,marginTop: Dimens.verticalScale(3)}}
          text={money}
        />
      </TrustView>
      <TrustLine/>
    </TrustView>
  );
};


export default PayItem;
