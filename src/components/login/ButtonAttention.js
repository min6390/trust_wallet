import React, {} from 'react';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {styles} from '../../containers/styles';
import TrustText from '../common/TrustText';
import Dimens from '../../common/Dimens';
import TrustImage from '../common/TrustImage';
import Colors from '../../common/Colors';
import Images from '../../common/Images';

function ButtonAttention(props) {
    const onPress = () => {

    };
    return (
        <TrustTouchableOpacity
            style={[styles.buttonChar, {backgroundColor: '#DFEDEA'}]}
            onPress={onPress}>
            <TrustImage
                tintColor={Colors.thirdBackground}
                style={{height: Dimens.scale(20), width: Dimens.scale(20)}}
                localSource={Images.im_attention}
            />
            <TrustText
                style={{textAlign: 'center', margin: Dimens.scale(10), color: Colors.secondBackground}}
                text={'Không bao giờ chia sẽ cụm từ phục hồi với bất vứ ai, phải lưu trữ chúng an toàn và bí mật'}
            />
        </TrustTouchableOpacity>
    );
}

export default ButtonAttention;
