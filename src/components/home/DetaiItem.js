import TrustView from '../common/TrustView';
import Dimens from '../../common/Dimens';
import TrustText from '../common/TrustText';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import InformationItemList from './InformationItemList';
import TrustLine from '../common/TrustLine';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {styles} from '../../containers/styles';

function DetailItem(props) {
  const {dataItem}=props
  const {colors}=useTheme()
  const data = [
    {
      id: 1,
      image: Images.im_arrow_up,
      name: 'Gửi',
    },
    {
      id: 2,
      image: Images.im_arrow_down,
      name: 'Nhận',
    },
    {
      id: 3,
      image: Images.im_paste,
      name: 'Sao chép',
    },
  ];
  return (
    <>
      <TrustView flexDirection={'row'}
                 style={{justifyContent: 'space-between', margin: Dimens.scale(5)}}>
        <TrustText
          style={{color: colors.textColor}}
          text={'COIN'}/>
        <TrustText
          style={{color: colors.textColor}}
          text={item.price}/>
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
}
export default DetailItem
