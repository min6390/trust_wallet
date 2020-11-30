import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import PropTypes from "prop-types";

TrustView.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
}

TrustView.defaultProps = {}

function TrustView(props) {
    const {
        style,
    } = props;
    return (
        <View
            {...props}
            style={[styles.view, style]}
        />
    );
};

const styles = StyleSheet.create({
    view: {}
});

export default TrustView;
