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
    const {navigation, title, } = props;
    const onPress = () => {
        navigation?.navigate('Home');
    };
    return (
      <TrustView
        style={[styles.container,{backgroundColor:colors.primary}]}
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
          <TrustView flexDirection={'row'} style={{alignItems: 'center'}}>
              <TrustText
                style={styles.txtBuy}
                text={'MUA'}
              />
              <TrustImage
                style={styles.image}
                tintColor={'white'}
                localSource={Images.im_chart}
              />
          </TrustView>
      </TrustView>
    );
};

export default DetailHeader;
