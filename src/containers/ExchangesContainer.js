import React, {} from 'react';
import TrustView from '../components/common/TrustView';
import Dimens from '../common/Dimens';
import LeftContain from '../components/dex/exchanges/LeftContain';
import BottomContain from '../components/dex/exchanges/BottomContain';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import TrustLine from '../components/common/TrustLine';
import {useTheme} from '@react-navigation/native';


function ExchangesContainer(props) {
    const {colors}=useTheme();
    const {navigation} = props;
    return (
        <TrustContainer
            process={1}
            navigation={navigation}
            firstScreen={'Convert'}
            secondScreen={'Exchanges'}
            firstName={'Chuyển đổi'}
            secondName={'Sàn giao dịch'}
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
                        <TrustLine
                            style={{borderColor:colors.lineBackground}}
                        />
                        <BottomContain/>
                    </>
                );
            }}
        />


    );
}

export default ExchangesContainer;
