import React, {} from 'react';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustView from '../../common/TrustView';
import TrustText from '../../common/TrustText';
import TrustImage from '../../common/TrustImage';
import Images from '../../../common/Images';
import Dimens from '../../../common/Dimens';

function StockMarket() {
    return (
        <TrustTouchableOpacity>
            <TrustView flexDirection={'row'}
                       style={{justifyContent:'space-between'}}
            >
                <TrustText
                    text={'ACB/BHB'}
                />
                <TrustImage
                    style={{height: Dimens.scale(14), width: Dimens.scale(14)}}
                    localSource={Images.im_next}
                />
            </TrustView>
        </TrustTouchableOpacity>
    );
}

export default StockMarket;
