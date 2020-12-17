import React, {} from 'react';
import {} from 'react-native';
import TrustText from '../../common/TrustText';
import TrustView from '../../common/TrustView';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';
import TrustImage from '../../common/TrustImage';
import PropTypes from 'prop-types';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import {NAVIGATION_CONSTANTS} from '../../../common/Constants';

FeatureItem.propTypes = {
    hasImage: PropTypes.bool,
    content: PropTypes.string,
    txtRight: PropTypes.string,
    txtLeft: PropTypes.string,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

function FeatureItem(props) {
    const {hasImage, image, content, txtLeft, txtRight,navigation,nameScreen} = props;
    const {colors} = useTheme();
    const onPress = () => {
        navigation?.navigate(NAVIGATION_CONSTANTS.SCAN_QR)

    };

    return (
        <TrustView style={[styles.container, {borderColor: colors.content}]}>
            <TrustText
                style={[{color: colors.text}, styles.text]}
                text={content}/>
            <TrustView style={{flexDirection: 'row', alignItems: 'center'}}>
                {hasImage ?
                    <TrustTouchableOpacity
                        onPress={onPress}>
                        <TrustImage
                            tintColor={colors.activeTintColor}
                            style={[styles.image]}
                            localSource={image}/>
                    </TrustTouchableOpacity>
                    : <TrustText
                        style={[{color: colors.activeTintColor}, styles.txtRight]}
                        text={txtLeft}
                    />}
                <TrustText
                    style={[{color: colors.activeTintColor}, styles.txtRight]}
                    text={txtRight}
                />
            </TrustView>
        </TrustView>
    );
}

export default FeatureItem;
