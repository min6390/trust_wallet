import React, {useEffect, useState} from 'react';
import {
    TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import Dimens from '../../../common/Dimens';
import {useTheme} from '@react-navigation/native';
import TrustView from '../../common/TrustView';
import TrustText from '../../common/TrustText';
import Colors from '../../../common/Colors';
import FontSizes from '../../../common/FontSizes';
import {styles} from './styles';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustImage from '../../common/TrustImage';
import {NAVIGATION_CONSTANTS} from '../../../common/Constants';


const FeatureTextInput = (props) => {
    const {label, qrvalue} = props;
    const {hasImage, image, txtLeft, txtRight, navigation, keyboardType} = props;
    FeatureTextInput.propTypes = {
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
        ]),
        keyboardType: PropTypes.string,
        onChangeText: PropTypes.func,
        onSubmitEditing: PropTypes.func,
        value: PropTypes.string,
        maxLength: PropTypes.number,
    };
    FeatureTextInput.defaultProps = {
        style: undefined,
    };
    const {colors} = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [address, setAddress] = useState();
    const handleBlur = () => setIsFocused(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const labelStyle = {
        position: 'absolute',
        left: !isFocused ? Dimens.scale(10) : Dimens.scale(10),
        top: !isFocused ? Dimens.verticalScale(11) : Dimens.verticalScale(-8),
        backgroundColor: colors.background,
        zIndex: 2,
    };
    const textColor = {
        fontSize: !isFocused ? FontSizes.size25 : FontSizes.size22,
        color: !isFocused ? '#aaa' : Colors.secondBackground,
    };
    useEffect(() => {
        setAddress(qrvalue);
    }, []);

    const onPress = () => {
        navigation?.navigate(NAVIGATION_CONSTANTS.SCAN_QR);
    };
    const onChangeText = (text) => {
        setAddress(text);
    };
    return (
        <TrustView
            style={[styles.container,
                !isFocused ? {borderColor: colors.borderColor} : {borderColor: Colors.secondBackground},
            ]}>
            {isFocused ?
                <TrustView
                    style={labelStyle}>
                    <TrustText
                        style={textColor}
                        text={label}
                    />
                </TrustView> : <></>}
            <TextInput
                keyboardType={keyboardType}
                placeholderTextColor={'#AAAAAA'}
                placeholder={isFocused ? '' : label}
                blurOnSubmit
                {...props}
                style={[styles.content, {color: colors.textColor}]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={onChangeText}
                value={address}
            />
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
                    />
                }
                <TrustText
                    style={[{color: colors.activeTintColor}, styles.txtRight]}
                    text={txtRight}
                />
            </TrustView>
        </TrustView>
    );
};


export default FeatureTextInput;
