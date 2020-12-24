import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import TrustLine from '../common/TrustLine';
import Dimens from '../../common/Dimens';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';

const ExchangesItem = (props) => {
  const {colors}=useTheme();
  const {text} = props;
  return (
    <TrustView style={{width: Dimens.widthScreen,}}>
      <TrustView
        style={{marginHorizontal:Dimens.scale(8),
        marginVertical:Dimens.verticalScale(12)}}
      >
        <TrustText
          style={[styles.exchangesText,{color:colors.textColor}]}
          text={text}
        />
        <TrustText
          style={{ color: '#AAAAAA',marginTop:Dimens.verticalScale(3)}}
          text={'AHihi'}
        />
      </TrustView>
      <TrustLine/>
    </TrustView>
  );
};


export default ExchangesItem;
