import React, {useState} from 'react';
import {StyleSheet, TextInput,} from 'react-native';
import PropTypes from 'prop-types';
import Dimens from '../../common/Dimens';
import TrustView from './TrustView';
import TrustText from './TrustText';
import FontSizes from '../../common/FontSizes';
import Colors from '../../common/Colors';
import {useTheme} from '@react-navigation/native';

const TrustTextInput = (props) => {
    const {label,style} = props;
    TrustTextInput.propTypes = {
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
    TrustTextInput.defaultProps = {
        style: undefined,
    };
    const {colors} = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [borderColor, setBorderColor] = useState(false);

    const handleBlur = () => setIsFocused(false);
    const handleFocus = () => {
        setIsFocused(true);
        setBorderColor(!borderColor);
    };
    const labelStyle = {
        position: 'absolute',
        left: !isFocused ? Dimens.scale(10) : Dimens.scale(10),
        top: !isFocused ? Dimens.verticalScale(14) : Dimens.verticalScale(-5),
        zIndex: 2,
    };
    const textColor = {
        fontWeight: 'bold',
        fontSize: !isFocused ? FontSizes.size25 : FontSizes.size23,
        color: !isFocused ? '#aaa' : Colors.secondBackground,
        backgroundColor: colors.background,
    };
    return (
        <TrustView>
            {isFocused ? <TrustView
                style={labelStyle}>
                <TrustText
                    style={textColor}
                    text={label}
                />
            </TrustView> : <></>}
            <TextInput
                {...props}
                placeholderTextColor={'#AAAAAA'}
                placeholder={isFocused ? '' : label}
                blurOnSubmit
                style={[style,styles.container, !isFocused ? {borderColor: colors.borderColor} : {borderColor: Colors.secondBackground}]}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </TrustView>
    );
};


const styles = StyleSheet.create({
    container: {
        marginVertical: Dimens.scale(3),
        paddingHorizontal: Dimens.scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: Dimens.scale(1 / 2),
        borderRadius: Dimens.scale(3),
    },
});


export default TrustTextInput;
