import React, {} from 'react';
import {StyleSheet} from 'react-native';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';

function Information(props) {
    const {navigation} = props;
    return (
        <>
            <TrustView style={{justifyContent:'center'}}>
                <TrustText
                text={'Money'+ '$'}
                />
                <TrustText
                text={'Ví Multi-Coin 1'}
                />
            </TrustView>
        </>
    );
}
export default Information
