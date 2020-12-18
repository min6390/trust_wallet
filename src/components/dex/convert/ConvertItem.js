import React, {} from 'react';
import {TextInput} from 'react-native';
import TrustView from '../../common/TrustView';
import Dimens from '../../../common/Dimens';
import TrustText from '../../common/TrustText';
import FontSizes from '../../../common/FontSizes';
import TrustImage from '../../common/TrustImage';
import Images from '../../../common/Images';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import {useTheme} from '@react-navigation/native';

function ConvertItem(props) {
    const {colors} = useTheme();
    const {text} = props;
    return (
        <TrustView flexDirection={'row'} style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <TrustView style={{padding: Dimens.scale(10)}}>
                <TrustText
                    style={{color:colors.textConvert}}
                    text={text}
                />
                <TextInput
                    keyboardType={'number-pad'}
                    style={{fontSize: FontSizes.size35,width:Dimens.scale(200),color:colors.textColor}}
                    placeholder={'0'}
                />
                <TrustView flexDirection={'row'}>
                    <TrustText
                        style={{color:colors.textConvert}}
                        text={'Số dư : '}/>
                    <TrustText
                        style={{color:colors.textConvert}}
                        text={'000000000' + ' VND'}/>
                </TrustView>
            </TrustView>
            <TrustTouchableOpacity>
                <TrustImage
                    style={{height: Dimens.scale(20),
                        width: Dimens.scale(20),
                        marginHorizontal: Dimens.scale(5)}}
                    tintColor={colors.textConvert}
                    localSource={Images.im_right_arrow}
                />
            </TrustTouchableOpacity>
        </TrustView>
    );
}

export default ConvertItem;
