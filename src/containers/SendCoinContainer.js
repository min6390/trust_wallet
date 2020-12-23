import React, {} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE, NAVIGATION_CONSTANTS} from '../common/Constants';
import FeatureItem from '../components/home/detail/FeatureItem';
import {useTheme} from '@react-navigation/native';
import TrustView from '../components/common/TrustView';
import Images from '../common/Images';
import Dimens from '../common/Dimens';

function SendCoinContainer(props) {
    const {colors} = useTheme();
    const {navigation, route} = props;
   // const {price} = route.params;
    const itemID = route.params;
    return (
        <TrustContainer
            title={'ahii'}
            text={'Tiếp Tục'}
            rightIcon={false}
            navigation={navigation}
            headerMode={HEADER_MODE.DETAIL}
            renderContentView={() => {
                return (
                    <TrustView style={{alignItems: 'center', marginVertical: Dimens.verticalScale(10)}}>
                        <FeatureItem
                            itemID={itemID}
                            image={Images.im_scan}
                            txtRight={'Dán'}
                            navigation={navigation}
                            nameScreen={NAVIGATION_CONSTANTS.SCAN_QR}
                            hasImage={true}
                            label={'Địa chỉ người nhận'}
                        />
                    </TrustView>
                );
            }}
        />
    );
}

export default SendCoinContainer;
