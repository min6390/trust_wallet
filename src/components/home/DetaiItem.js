import TrustView from '../common/TrustView';
import Dimens from '../../common/Dimens';
import TrustText from '../common/TrustText';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import InformationItemList from './InformationItemList';
import TrustLine from '../common/TrustLine';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import FontSizes from '../../common/FontSizes';
import {useSelector} from 'react-redux';
import Colors from '../../common/Colors';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';


function DetailItem(props) {
  const {colors} = useTheme();
  const {price,symbol,navigation} = props;
  const {socketData} = useSelector(state => state.socket);
  const [dataSocket] = useState(socketData.filter(item => item.name === price));

  const data = [
    {
      id: 1,
      image: Images.im_arrow_up,
      name: 'Gửi',
      onPress:()=>{
        navigation?.navigate(NAVIGATION_CONSTANTS.SEND_COIN,{price,symbol})
      }

    },
    {
      id: 2,
      image: Images.im_arrow_down,
      name: 'Nhận',
      onPress:()=>{
        navigation?.navigate(NAVIGATION_CONSTANTS.RECEIVE_COIN,{price})
      }
    },
    {
      id: 3,
      image: Images.im_paste,
      name: 'Sao chép',
    },
  ];

  return (
    dataSocket.map((item, index) => {
      return (
        <>
          <TrustView
            key={index}
            flexDirection={'row'}
            style={{justifyContent: 'space-between', margin: Dimens.scale(5)}}>
            <TrustText
              style={{color: colors.textColor}}
              text={'COIN'}/>
            <TrustView flexDirection={'row'}>
              <TrustText
                style={{color: colors.textColor,marginRight:Dimens.scale(10)}}
                text={item.price +' $'}/>
              <TrustText
                style={item.rate < 0 ? {
                  color: 'red',
                } : {color: Colors.secondBackground}}
                text={item.rate < 0 ? parseFloat(item.rate).toFixed(6) + ' %'
                  : '+' + parseFloat(item.rate).toFixed(6) + ' %'}
              />
            </TrustView>
          </TrustView>
          <TrustView style={{alignItems: 'center'}}>
            <TrustImage
              style={styles.imageCoin}
              localSource={Images.im_ele}/>
            <TrustText
              style={[styles.txtCoin, {color: colors.textColor}]}
              text={' 0 BTC '}/>
            <InformationItemList
              style={styles.itemList}
              data={data}/>
          </TrustView>
          <TrustLine/>
        </>
      );
    })
  );
}

const styles = StyleSheet.create({
  imageCoin: {
    color: 'black',
    height: Dimens.scale(80),
    width: Dimens.scale(80),
    borderRadius: Dimens.scale(40),
  },
  txtCoin: {
    fontSize: FontSizes.size45,
  },
  itemList: {
    marginTop: Dimens.scale(30),
  },
});
export default DetailItem;
