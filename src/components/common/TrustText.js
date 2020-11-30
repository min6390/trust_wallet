import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

TrustText.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]),
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};
TrustText.defaultProps = {
    text: '',
};

function TrustText(props) {
    const {style, text} = props;
    return (
        <Text
            {...props}
            style={[styles.text, style]}>
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {},
});
export default TrustText
