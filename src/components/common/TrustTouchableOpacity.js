import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const TrustTouchableOpacity = (props) => {
    const {
        style,
        onPress
    } = props;
    return (
        <TouchableOpacity
            {...props}
            style={[styles.view, style]}
            onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({
    view: {}
});

export default TrustTouchableOpacity;
