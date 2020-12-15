import React, {useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import {useSelector} from 'react-redux';
import TrustFlatList from '../components/common/TrustFlatList';
import DetailItem from '../components/home/DetaiItem';

function DetailContainer(props) {
  const {navigation, route} = props;
  let itemName = route.params;
  const {socketData} = useSelector(state => state.socket);
  const [data]=useState(socketData.filter(item=>item.name === itemName));
  const renderItem = () => {
    return (
      <>
      </>
    );
  };
  return (
    <TrustContainer
      navigation={navigation}
      headerMode={HEADER_MODE.DETAIL}
      title={itemName}
      renderContentView={() => {
        return (
          <TrustFlatList
            data={data}
            keyExtractor={item => item.name}
            renderItem={renderItem}
            ListHeaderComponent={() => {
              return (
                <DetailItem price={itemName}/>
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
