import React, {useState} from 'react';
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



const FeatureTextInput = (props) => {
    const {label} = props;
    FeatureTextInput.propTypes = {
        ref: PropTypes.object,
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
        ]),
        placeholder: PropTypes.string,
        keyboardType: PropTypes.string,
        onChangeText: PropTypes.func,
        onSubmitEditing: PropTypes.func,
        autoFocus: PropTypes.bool,
        value: PropTypes.string,
        maxLength: PropTypes.number,
    };
    FeatureTextInput.defaultProps = {
        style: undefined,
    };
    const {colors} = useTheme();
    const [isFocused, setIsFocused] = useState(false);

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
        fontSize: !isFocused ? FontSizes.size25: FontSizes.size22,
        color: !isFocused ? '#aaa' : Colors.secondBackground,
    };
    return (
        <TrustView style={[styles.container,!isFocused ? {borderColor: colors.borderColor} : {borderColor: Colors.secondBackground}]}>
            <TrustView
                style={labelStyle}>
                <TrustText
                    onPress={handleBlur}
                    style={textColor}
                    text={label}
                />
            </TrustView>
            <TextInput
                {...props}
                style={styles.content}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </TrustView>
    );
};



export default FeatureTextInput;
