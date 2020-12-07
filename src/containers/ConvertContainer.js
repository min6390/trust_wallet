import React, {} from 'react';
import ConvertView from '../components/dex/convert/ConvertView';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import Dimens from '../common/Dimens';
import PercentList from '../components/dex/convert/PercentList';
import {styles} from './styles';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import {useTheme} from '@react-navigation/native';

function ConvertContainer(props) {
    const {navigation,} = props;
    return (
        <TrustContainer
            process={0}
            navigation={navigation}
            firstScreen={'Convert'}
            secondScreen={'Exchanges'}
            firstName={'Chuyển đổi'}
            secondName={'Sàn giao dịch'}
            headerMode={HEADER_MODE.HOME}
            renderContentView={() => {
                return (
                    <TrustView style={{alignItems: 'center'}}>
                        <ConvertView/>
                        <PercentList
                            style={{
                                height: Dimens.scale(20),
                                width: Dimens.scale(70),
                                marginHorizontal: Dimens.scale(5),
                            }}
                        />
                        <TrustTouchableOpacity
                            style={styles.btnFinish}>
                            <TrustText
                                style={{color: 'white'}}
                                text={'CHUYỂN ĐỔI'}/>
                        </TrustTouchableOpacity>
                    </TrustView>
                );
            }}
        />


    );
}

export default ConvertContainer;
