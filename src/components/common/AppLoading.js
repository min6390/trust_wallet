import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Dimens from '../../common/Dimens';

const AppLoading = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="white"/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: Dimens.widthScreen,
        height: Dimens.heightScreen,
        backgroundColor: 'black',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        opacity: 0.6,

    },
});
export default AppLoading;
