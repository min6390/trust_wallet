import React, {} from 'react';
import {StyleSheet} from 'react-native';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import Dimens from '../common/Dimens';
import TrustImage from '../components/common/TrustImage';
import Images from '../common/Images';
import InformationItemList from '../components/home/InformationItemList';
import FontSizes from '../common/FontSizes';
import TrustLine from '../components/common/TrustLine';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import {useTheme} from '@react-navigation/native';

function DetailContainer(props) {
    const {colors} =useTheme();
    const {navigation,route} = props;
    const item = route.params;
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
      <TrustContainer
        nameScreen={'Home'}
        navigation={navigation}
        headerMode={HEADER_MODE.DETAIL}
        title={item.name}
        renderContentView={() => {
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
                        style={[styles.txtCoin,{color: colors.textColor}]}
                        text={' 0 BTC '}/>
                      <InformationItemList
                        style={styles.itemList}
                        data={data}/>
                  </TrustView>
                  <TrustLine/>
              </>
            );
        }}
      />
    );
}

const styles = StyleSheet.create({
    imageCoin: {
        color:'black',
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
export default DetailContainer;
