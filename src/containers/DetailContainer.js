import React, {} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import {useSelector} from 'react-redux';
import TrustFlatList from '../components/common/TrustFlatList';
import DetailItem from '../components/home/DetaiItem';

function DetailContainer(props) {
  const {navigation, route} = props;
  const itemName = route.params;
  const {socketData} = useSelector(state => state.socket);


  const renderItem = () => {
    return (
      <>
      </>
    );
  };
  return (
    <TrustContainer
      nameScreen={'Home'}
      navigation={navigation}
      headerMode={HEADER_MODE.DETAIL}
      title={itemName}
      renderContentView={() => {
        return (
          <TrustFlatList
            data={socketData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ListHeaderComponent={() => {
              return (
                  <DetailItem/>
              );
            }
            }
          />
        );
      }}
    />
  );
}


export default DetailContainer;
