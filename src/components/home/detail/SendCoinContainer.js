import React, {} from 'react';
import TrustContainer from '../../common/TrustContainer';
import {HEADER_MODE} from '../../../common/Constants';

function SendCoinContainer(props) {
    const {navigation,route} = props;
    const price=route.params;
    return (
        <TrustContainer
            title={price}
            rightIcon={false}
            navigation={navigation}
            headerMode={HEADER_MODE.DETAIL}
            renderContentView={() => {
                return (
                    <>
                    </>
                );
            }}
        />
    );
}

export default SendCoinContainer;
