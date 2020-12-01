import React, {} from 'react';
import {} from 'react-native';
import TrustView from '../../common/TrustView';
import Dimens from '../../../common/Dimens';
import TrustText from '../../common/TrustText';
import TrustTextInput from '../../common/TrustTextInput';
import FontSizes from '../../../common/FontSizes';

function ConvertItem(props) {
    const {text}=props
    return (
        <>
            <TrustView style={{padding: Dimens.scale(10)}}>
                <TrustText
                    text={text}
                />
                <TrustTextInput
                    keyboardType={'number-pad'}
                    style={{ fontSize:FontSizes.size35,}}
                    placeholder={'0'}
                />
                <TrustView flexDirection={'row'}>
                    <TrustText text={'Số dư : '}/>
                    <TrustText text={'000000000' + ' VND'}/>
                </TrustView>
            </TrustView>
        </>
    );
}
export default ConvertItem
