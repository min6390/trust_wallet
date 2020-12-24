import React from 'react';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import TrustText from '../common/TrustText';
import {styles} from './styles';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {useTheme} from '@react-navigation/native';

const DetailHeader = (props) => {
  const {colors} = useTheme();
  const {navigation, title, rightIcon, text,onPressContinue} = props;
  const onPress = () => {
    navigation?.goBack();
  };
  return (
    <TrustView
      style={[styles.container, {backgroundColor: colors.primary}]}
      flexDirection={'row'}
    >
      <TrustView flexDirection={'row'} style={{alignItems: 'center'}}>
        <TrustTouchableOpacity style={styles.image}
                               onPress={onPress}>

          <TrustImage
            style={{flex: 1}}
            tintColor={'white'}
            localSource={Images.im_left_arrow}
          />
        </TrustTouchableOpacity>
        <TrustText
          style={styles.txtHeader}
          text={title}
        />
      </TrustView>
      {rightIcon ? <TrustView flexDirection={'row'} style={{alignItems: 'center'}}>
          <TrustText
            style={styles.txtBuy}
            text={'MUA'}/>
          <TrustImage
            style={styles.image}
            tintColor={'white'}
            localSource={Images.im_chart}
          />
        </TrustView>
        : <TrustTouchableOpacity
        onPress={onPressContinue}>
          <TrustText
            style={[styles.text, {color: 'white'}]}
            text={text}
          />
        </TrustTouchableOpacity>}
    </TrustView>
  );
};

export default DetailHeader;
