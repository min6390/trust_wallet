import React, {} from 'react';
import {
    StyleSheet,
} from 'react-native';
import TrustTouchableOpacity from './TrustTouchableOpacity';
import TrustView from './TrustView';
import TrustText from './TrustText';
import Dimens from '../../common/Dimens';
import Colors from '../../common/Colors';
import FontSizes from '../../common/FontSizes';


const TopTabNavigator = (props) => {
    const {navigation,process} = props;
    const onPressHome = () => {
        navigation?.navigate('Home');
    };
    const onPressCrypt = () => {
        navigation?.navigate('Cryt');
    };
    const onPressCollection = () => {
        navigation?.navigate('Collection');
    };
    return (
        <TrustView flexDirection={'row'} style={styles.container}>
            <TrustTouchableOpacity
                style={[styles.txtType,
                    process === 0 ? {backgroundColor: Colors.secondBackground} : {backgroundColor: Colors.thirdBackground}]}
                onPress={onPressHome}>
                <TrustText
                    style={styles.text}
                    text={'HOME'}
                />
            </TrustTouchableOpacity>
            <TrustTouchableOpacity
                style={[styles.txtType,
                    process === 1 ? {backgroundColor: Colors.secondBackground} : {backgroundColor: Colors.thirdBackground}]}
                onPress={onPressCrypt}
            >
                <TrustText
                    style={styles.text}
                    text={'CRYPT'}/>
            </TrustTouchableOpacity>
            <TrustTouchableOpacity
                style={[styles.txtType,
                    process ===2 ? {backgroundColor:  Colors.secondBackground} : {backgroundColor: Colors.thirdBackground}]}
                onPress={onPressCollection}
            >
                <TrustText
                    style={styles.text}
                    text={'COLLECTION'}/>
            </TrustTouchableOpacity>
        </TrustView>
    );
};


const styles = StyleSheet.create({
    container: {
        borderWidth:Dimens.scale(1/2),
        borderRadius: Dimens.scale(5),
        width: Dimens.scale(280),
        backgroundColor: Colors.thirdBackground,
        justifyContent: 'center',
        height:Dimens.scale(24)
    },
    txtType: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#8a2be2',
        width: Dimens.scale(90),
        margin:Dimens.scale(1),
        marginVertical:Dimens.scale(3),

    },
    text:{
        fontSize:FontSizes.size22,
        color:'white'
    }
});
export default TopTabNavigator;
