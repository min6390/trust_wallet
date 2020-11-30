import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

TrustHeader.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    data: PropTypes.object,
    renderItem: PropTypes.func,
    keyExtractor: PropTypes.func,

};



function TrustHeader(props) {
    const {
        style,
        headerMode
    } = props;
    return <FastImage
        {...props}
        style={[styles.flatList, style]}
        keyboardShouldPersistTaps={'always'}
    />;
};

const styles = StyleSheet.create({
    flatList: {},
});

export default TrustHeader;
