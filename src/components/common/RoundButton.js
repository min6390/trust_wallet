import React, {} from 'react';
import TrustView from './TrustView';
import TrustImage from './TrustImage';
import {StyleSheet} from 'react-native';
import Dimens from '../../common/Dimens';
import PropTypes from 'prop-types';
import TrustText from './TrustText';
import Colors from '../../common/Colors';
import TrustTouchableOpacity from './TrustTouchableOpacity';


RoundButton.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    img: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    txt:PropTypes.string
};

RoundButton.defaultProps = {};

function RoundButton(props) {
    const {img, style,txt,tintColor,onPress} = props;
    return (
        <TrustTouchableOpacity style={{alignItems: 'center'}}
        onPress={onPress}
        >
            <TrustView
                {...props}
                style={[style, styles.contain]}
            >
                <TrustImage
                    {...props}
                    tintColor={tintColor?'white':Colors.secondBackground}
                    style={styles.img}
                    localSource={img}
                />
            </TrustView>
            <TrustText
                {...props}
                style={[{marginVertical:Dimens.verticalScale(3),color:Colors.secondBackground}]}
                text={txt}
            />
        </TrustTouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contain: {
        height: Dimens.scale(30),
        width: Dimens.scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Dimens.scale(20),
    },
    img: {
        height: Dimens.scale(16),
        width: Dimens.scale(16),
    },
});
export default RoundButton;
