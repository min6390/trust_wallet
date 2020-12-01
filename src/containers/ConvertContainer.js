import React, {} from 'react';
import {StyleSheet} from 'react-native';
import ConvertView from '../components/dex/convert/ConvertView';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import Dimens from '../common/Dimens';
import Colors from '../common/Colors';
import PercentList from '../components/dex/convert/PercentList';

function ConvertContainer() {
    return (
        <TrustView style={{alignItems: 'center'}}>
            <ConvertView/>
            <PercentList
                style={{
                    height: Dimens.scale(20),
                    width: Dimens.scale(70),
                    marginHorizontal: Dimens.scale(5),
                }}
            />
            <TrustTouchableOpacity
                style={styles.btnFinish}>
                <TrustText
                    style={{color:'white'}}
                    text={'CHUYỂN ĐỔI'}/>
            </TrustTouchableOpacity>
        </TrustView>

    );
}

const styles = StyleSheet.create({
    btnFinish: {
        width: Dimens.scale(320),
        borderRadius: Dimens.scale(10),
        height: Dimens.scale(40),
        marginVertical:Dimens.scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondBackground
    },
});
export default ConvertContainer;
