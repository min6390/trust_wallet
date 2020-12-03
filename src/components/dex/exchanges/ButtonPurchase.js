import React, {} from 'react';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustText from '../../common/TrustText';
import {styles} from './styles';

function ButtonPurchase(props) {
    const {style, text, onPress} = props;
    return (
        <TrustTouchableOpacity
            style={[styles.btnPurchase, style]}
            onPress={onPress}>
            <TrustText
                style={{color:'white'}}
                text={text}
            />
        </TrustTouchableOpacity>
    );
}

export default ButtonPurchase;
