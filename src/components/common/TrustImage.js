import React from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";

TrustImage.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    uri: PropTypes.string,
    localSource: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

TrustImage.defaultProps = {}

function TrustImage(props) {
    const {
        style,
        uri,
        localSource
    } = props;
    return <FastImage
        {...props}
        style={[styles.image, style]}
        source={uri ? {uri: uri} : localSource}
        resizeMode={FastImage.resizeMode.cover}
    />
};

const styles = StyleSheet.create({
    image: {}
});

export default TrustImage;
