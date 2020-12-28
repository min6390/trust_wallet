import React,{} from 'react'
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {styles} from '../../containers/styles';
import TrustText from '../common/TrustText';
import Dimens from '../../common/Dimens';

function ButtonLogin(props) {
    const {onPress,txtLogin}=props

    return(
        <TrustTouchableOpacity
            onPress={onPress}
            style={[styles.buttonNext]}>
            <TrustText
                style={{margin: Dimens.scale(10), color: 'white'}}
                text={txtLogin}
            />
        </TrustTouchableOpacity>
    )
}
export default ButtonLogin
