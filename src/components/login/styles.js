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

});
