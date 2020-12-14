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


function HomeContainer(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  const {socketData} = useSelector(state => state.socket);
  props.callbackIcon(true);


  const renderItem = ({item,}) => {
    return (
      <>
        <TrustTouchableOpacity
          style={[styles.content]}
          onPress={() => navigation?.navigate('Detail', item)}
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
            <TrustText
              style={{color: '#8C8FBF'}}
              text={item.price}
            />
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
