import TrustView from './TrustView';
import React from 'react';
import Dimens from '../../common/Dimens';
import {StyleSheet} from 'react-native';

function TrustLine() {
    return (
        <TrustView
            style={styles.borderCustom}
        />
    );
}

const styles = StyleSheet.create({
    borderCustom: {
        borderWidth: Dimens.scale(1 / 2),
        marginVertical: Dimens.scale(5),
        borderColor: '#dcdcdc',

    },
});
export default TrustLine;
