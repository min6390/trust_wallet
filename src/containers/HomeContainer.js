import React, {} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustView from '../components/common/TrustView';
import {useSelector} from 'react-redux';
import TrustText from '../components/common/TrustText';
import TrustImage from '../components/common/TrustImage';
import Images from '../common/Images';
import Dimens from '../common/Dimens';
import TrustLine from '../components/common/TrustLine';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import Colors from '../common/Colors';


function HomeContainer(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  const {socketData} = useSelector(state => state.socket);
  props.callbackIcon(true);

  const renderItem = ({item}) => {
    return (
      <>
        <TrustTouchableOpacity
          style={[styles.content]}
          onPress={() => navigation?.navigate('Detail', item.name)}
        >
          <TrustImage
            style={styles.image}
            localSource={Images.im_xrp}
          />
          <TrustView style={{marginHorizontal: Dimens.scale(10)}}>
            <TrustText
              style={{color: colors.textColor}}
              text={item.name}
            />
            <TrustView style={{flexDirection: 'row'}}>
              <TrustText
                style={{color: '#8C8FBF',marginRight:Dimens.scale(10)}}
                text={item.price+' $'}
              />
              <TrustText
                style={item.rate < 0 ? {
                  color: 'red',
                } :{ color: Colors.secondBackground}}
                text={parseFloat(item.rate).toFixed(6)+' %'}
              />
            </TrustView>
          </TrustView>
        </TrustTouchableOpacity>
        <TrustLine/>
      </>
    );
  };
  return (
    <TrustContainer
      style={{backgroundColor: colors.primary}}
      hasHeader={false}
      navigation={navigation}
      renderContentView={() =>
        <>
          <TrustFlatList
            style={{backgroundColor: colors.background}}
            data={socketData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ListHeaderComponent={() => {
              return (
                <Information/>
              );
            }
            }
          />
        </>
      }
    />
  );
}


export default HomeContainer;
