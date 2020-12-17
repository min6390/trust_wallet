import React, {} from 'react';
import {} from 'react-native';
import TrustContainer from '../common/TrustContainer';
import {HEADER_MODE} from '../../common/Constants';
import TrustFlatList from '../common/TrustFlatList';

function ShowAll(props) {
    const {route, navigation} = props;
    const item = route.params;
    return (
        <TrustContainer
            rightIcon={false}
            navigation={navigation}
            headerMode={HEADER_MODE.DETAIL}
            title={'Yeahhhhhh'}
            renderContentView={() => {
                return (
                   <TrustFlatList

                   />
                );
            }}
        />

    );
}

export default ShowAll;
