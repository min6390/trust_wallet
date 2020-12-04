import React, {} from 'react';
import {} from 'react-native';
import TrustView from '../../common/TrustView';
import Dimens from '../../../common/Dimens';
import TrustText from '../../common/TrustText';
import TrustTextInput from '../../common/TrustTextInput';
import FontSizes from '../../../common/FontSizes';
import TrustImage from '../../common/TrustImage';
import Images from '../../../common/Images';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';

function ConvertItem(props) {
    const {text} = props;
    return (
        <TrustView flexDirection={'row'} style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <TrustView style={{padding: Dimens.scale(10)}}>
                <TrustText
                    text={text}
                />
                <TrustTextInput
                    keyboardType={'number-pad'}
                    style={{fontSize: FontSizes.size35}}
                    placeholder={'0'}
                />
                <TrustView flexDirection={'row'}>
                    <TrustText text={'Số dư : '}/>
                    <TrustText text={'000000000' + ' VND'}/>
                </TrustView>
            </TrustView>
            <TrustTouchableOpacity>
                <TrustImage
                    style={{height: Dimens.scale(20),
                        width: Dimens.scale(20),
                        marginHorizontal: Dimens.scale(5)}}
                    localSource={Images.im_right_arrow}
                />
            </TrustTouchableOpacity>
        </TrustView>
    );
}

export default ConvertItem;
