import React, {} from 'react';
import {
  StyleSheet,
} from 'react-native';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import Dimens from '../common/Dimens';
import FontSizes from '../common/FontSizes';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import Images from '../common/Images';
import {useTheme} from '@react-navigation/native';
import TrustImage from '../components/common/TrustImage';
import TrustLine from '../components/common/TrustLine';
import Colors from '../common/Colors';
import HeaderTest from '../components/header/HeaderTest';

const data = [
  {
    id: 1,
    title: 'Tezos',
    content: 'Lãi hằng năm',
    image: Images.im_ele,
  },
  {
    id: 2,
    title: 'Tron',
    content: 'Lãi hằng năm',
    image: Images.im_ele,
  },
  {
    id: 3,
    title: 'Cosmos',
    content: 'Lãi hằng năm',
    image: Images.im_ele,
  },
  {
    id: 4,
    title: 'Kava',
    content: 'Lãi hằng năm',
    image: Images.im_bitcoin,
  },
];

function CryptocurrencyContainer(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  const renderItem = ({item}) => {
    return (
      <>
        <TrustTouchableOpacity style={styles.container}>
          <TrustImage
            style={{height: Dimens.scale(50), width: Dimens.scale(50), borderRadius: Dimens.scale(25)}}
            localSource={item.image}/>
          <TrustView style={{marginHorizontal: Dimens.scale(10)}}>
            <TrustText
              style={[styles.txtTitle, {color: colors.textColor}]}
              text={item.title}
            />
            <TrustText
              style={{color: colors.content}}
              text={item.content}
            />
          </TrustView>
        </TrustTouchableOpacity>
        <TrustLine
          style={{borderColor: colors.lineBackground}}
        />
      </>

    );
  };
  return (
    <TrustContainer
      hasHeader={false}
      navigation={navigation}
      renderContentView={() => {
        return (
          <>
            <TrustText
              style={{
                color: Colors.secondBackground,
                margin: Dimens.scale(5), fontSize: FontSizes.size28,
              }}
              text={'Đặt cược'}/>
            <TrustFlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </>
        );
      }}
    />


  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: Dimens.scale(5),
    marginVertical: Dimens.scale(8),
  },
  txtTitle: {
    marginBottom: Dimens.scale(10),
    fontSize: FontSizes.size35,
  },
});
export default CryptocurrencyContainer;
