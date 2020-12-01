import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';
//import AppStyles from "../common/AppStyles";
import PropTypes from 'prop-types'
import Dimens from '../../common/Dimens';

const TrustTextInput = forwardRef((props, ref) => {
    const {style} = props;
    const inputRef = useRef();
    const [text, setText] = useState('');

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.clear();
        },
        getValue: () => {
            return text
        }
    }));

    return (
        <TextInput
            {...props}
            ref={inputRef}
            placeholderTextColor={'#AAAAAA'}
            style={[styles.container, style]}
            onChangeText={(text) => {
                setText(text);
            }}
        />
    );
});

const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.greyscale7,
        paddingHorizontal: Dimens.scale(19),
        justifyContent: 'center',
    },
});

TrustTextInput.propTypes = {
    ref: PropTypes.object,
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    autoFocus: PropTypes.bool,
    value: PropTypes.string,
    maxLength: PropTypes.number
};
TrustTextInput.defaultProps = {
    style: undefined,
};

export default TrustTextInput;
