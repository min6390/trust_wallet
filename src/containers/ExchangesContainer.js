import React, {} from 'react';
import TrustView from '../components/common/TrustView';
import Dimens from '../common/Dimens';
import LeftContain from '../components/dex/exchanges/LeftContain';
import BottomContain from '../components/dex/exchanges/BottomContain';
import TrustText from '../components/common/TrustText';


function ExchangesContainer() {

    return (
        <>
            <TrustView
                flexDirection={'row'}
                style={{margin: Dimens.scale(5)}}
            >
            <LeftContain/>
            </TrustView>
            <TrustView
                style={{borderWidth: Dimens.scale(1/6)}}
            />
            <BottomContain/>
        </>
    );
}

export default ExchangesContainer;
