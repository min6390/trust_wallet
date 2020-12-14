import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

TrustFlatList.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    renderItem: PropTypes.func,
    keyExtractor: PropTypes.func,

};

TrustFlatList.defaultProps = {
    data: [],
};

function TrustFlatList(props) {
    const {
        style,
    } = props;
    return <FlatList
        {...props}
        style={[styles.flatList, style]}
        keyboardShouldPersistTaps={'always'}
    />;
};

const styles = StyleSheet.create({
    flatList: {},
});

export default TrustFlatList;
