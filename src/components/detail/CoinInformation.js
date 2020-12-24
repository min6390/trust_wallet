import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import {styles} from './styles';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import TrustLine from '../common/TrustLine';
import Dimens from '../../common/Dimens';
import {useTheme} from '@react-navigation/native';

const CoinInformation = () => {
  const {colors}=useTheme();
  return (
    <TrustView style={{width:Dimens.widthScreen,}}>
      <TrustView style={styles.modalContain}>
        <TrustView style={styles.borderArrowContain}>
          <TrustImage
            tintColor={'#dcdcdc'}
            style={styles.imageArrow}
            localSource={Images.im_arrow_up}/>
        </TrustView>
        <TrustText
          style={[styles.textModal,{color:colors.textColor}]}
          text={'0 ' + 'BCH'}
        />
        <TrustText
          style={{color: '#AAAAAA'}}
          text={'(0,00 $)'}
        />
      </TrustView>
      <TrustLine/>
    </TrustView>
  );
};


export default CoinInformation;
