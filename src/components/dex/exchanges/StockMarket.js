import React, {} from 'react';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustView from '../../common/TrustView';
import TrustText from '../../common/TrustText';
import TrustImage from '../../common/TrustImage';
import Images from '../../../common/Images';
import Dimens from '../../../common/Dimens';
import {useTheme} from '@react-navigation/native';

function StockMarket() {
    const {colors}=useTheme();
    return (
        <TrustTouchableOpacity>
            <TrustView flexDirection={'row'}
                       style={{justifyContent:'space-between'}}
            >
                <TrustText
                    style={{color:colors.textColor}}
                    text={'ACB/BHB'}
                />
                <TrustImage
                    tintColor={colors.textColor}
                    style={{height: Dimens.scale(14), width: Dimens.scale(14)}}
                    localSource={Images.im_next}
                />
            </TrustView>
        </TrustTouchableOpacity>
    );
}

export default StockMarket;
