import React, {} from 'react';
import TrustView from '../../common/TrustView';
import Dimens from '../../../common/Dimens';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustImage from '../../common/TrustImage';
import Images from '../../../common/Images';
import Colors from '../../../common/Colors';
import ConvertItem from './ConvertItem';
import {styles} from './styles';

function ConvertView() {
    return (
        <TrustView style={styles.container}>
            <ConvertItem
                text={'Bạn trả'}
            />
            <TrustView style={{borderWidth: Dimens.scale(1 / 3)}}/>
            <TrustTouchableOpacity
                activeOpacity={10}
                style={styles.btnSwap}>
                <TrustImage
                    style={{height: Dimens.scale(24), width: Dimens.scale(24)}}
                    localSource={Images.im_swap}
                    tintColor={Colors.secondBackground}/>
            </TrustTouchableOpacity>
            <ConvertItem
                text={'Bạn nhận'}
            />
        </TrustView>

    );
}

export default ConvertView;
