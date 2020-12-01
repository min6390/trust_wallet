import React, {} from 'react';
import {StyleSheet} from 'react-native';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import Dimens from '../../../common/Dimens';
import TrustText from '../../common/TrustText';
import TrustView from '../../common/TrustView';

function ButtonPurchase(props) {
    const {style, text, onPress} = props;
    return (
        <TrustTouchableOpacity
            style={[styles.btnPurchase, style]}
            onPress={onPress}>
            <TrustText
                text={text}
            />
        </TrustTouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnPurchase: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        height: Dimens.scale(30),
        flex: 1,

    },
});
export default ButtonPurchase;
