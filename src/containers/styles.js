import {StyleSheet} from 'react-native';
import Dimens from '../common/Dimens';
import FontSizes from '../common/FontSizes';
import React from 'react';

export const styles = StyleSheet.create({
    btnFinish: {
        width: Dimens.scale(320),
        borderRadius: Dimens.scale(3),
        height: Dimens.scale(40),
        marginVertical: Dimens.scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#078266',
    },
    container: {
        alignItems: 'center',
        margin: Dimens.scale(5),
        justifyContent: 'space-between',
    },
    content: {
        marginVertical: Dimens.verticalScale(3),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: Dimens.scale(5),
    },
    image: {
        height: Dimens.scale(50),
        width: Dimens.scale(50),
    },
    textError: {
        fontSize: FontSizes.size20,
        color: 'red',
        position: 'absolute',
        left: Dimens.scale(30),
        top: Dimens.verticalScale(50),
    },
    containQR: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: Dimens.verticalScale(240),
        width: Dimens.scale(240),
        borderRadius: Dimens.scale(8),
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    txtQR: {
        marginHorizontal: Dimens.scale(5),
        fontSize: FontSizes.size20,
        marginVertical: Dimens.scale(8),
        position: 'absolute',
        left: 0,
        bottom: 0,
        textAlign:'center'
    },
    containQRSVG: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    roundContain:{
        width:Dimens.scale(240),
        flexDirection: 'row',
        justifyContent:'space-between',
        position:'absolute',
        bottom: Dimens.verticalScale(10),
    }
});
