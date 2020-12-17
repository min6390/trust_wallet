import TrustView from './TrustView';
import React from 'react';
import Dimens from '../../common/Dimens';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

function TrustLine(props) {
    const {style}=props;
    const {colors}=useTheme();
    return (
        <TrustView
            style={[styles.borderCustom,{borderColor:colors.line},style]}
        />
    );
}

const styles = StyleSheet.create({
    borderCustom: {
        borderWidth: Dimens.scale(1 / 2),


    },
});
export default TrustLine;
