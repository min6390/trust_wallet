import React, {} from 'react';
import TrustView from '../components/common/TrustView';
import Dimens from '../common/Dimens';
import LeftContain from '../components/dex/exchanges/LeftContain';
import BottomContain from '../components/dex/exchanges/BottomContain';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';


function ExchangesContainer(props) {
    const {navigation} = props;
    return (
        <TrustContainer
            process={1}
            navigation={navigation}
            firstScreen={'ConvertContainer'}
            secondScreen={'ExchangesContainer'}
            firstName={'Convert'}
            secondName={'Exchanges'}
            headerMode={HEADER_MODE.HOME}
            renderContentView={() => {
                return (
                    <>
                        <TrustView
                            flexDirection={'row'}
                            style={{margin: Dimens.scale(5)}}
                        >
                            <LeftContain/>
                        </TrustView>
                        <TrustView
                            style={{borderWidth: Dimens.scale(1 / 6)}}
                        />
                        <BottomContain/>
                    </>
                );
            }}
        />


    );
}

export default ExchangesContainer;
