import {StyleSheet} from 'react-native';
import Dimens from '../../common/Dimens';
import FontSizes from '../../common/FontSizes';
import React from 'react';
import Colors from '../../common/Colors';

export const styles = StyleSheet.create({
    LoginContainer:{
        paddingVertical:Dimens.scale(30),
        paddingHorizontal: Dimens.scale(15),
        alignItems:'center',
        flex:1
    },
    character:{
        margin: Dimens.scale(5),
        borderRadius:Dimens.scale(5),
        borderWidth:Dimens.scale(1/3),
        padding:Dimens.scale(5),
        flexDirection:'row'
    },
    characterContain:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    txtChar:{
        marginHorizontal: Dimens.scale(20),
        color:Colors.secondBackground,
        fontWeight:'bold'
    },
    buttonChar:{
        marginTop:Dimens.verticalScale(120),
        paddingVertical: Dimens.verticalScale(8),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Dimens.scale(5)
    },
    buttonNext:{
        width:'100%',
        position:'absolute',
        bottom:0,
        marginBottom:Dimens.verticalScale(20),
        backgroundColor:Colors.thirdBackground,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Dimens.scale(5)
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
    },
});
