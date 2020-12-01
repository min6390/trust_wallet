import {StyleSheet} from 'react-native';
import Dimens from '../../../common/Dimens';

export const styles = StyleSheet.create({
    btnPurchase: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        height: Dimens.scale(30),
        flex: 1,
    },
    btnBuy: {
        borderTopStartRadius: Dimens.scale(8),
        borderBottomStartRadius: Dimens.scale(8),
    },
    btnSell: {
        borderTopEndRadius: Dimens.scale(8),
        borderBottomEndRadius: Dimens.scale(8),
    },
    inputText: {
        borderRadius: Dimens.scale(5),
        borderWidth: 1,
    },
    btnFinish: {
        height: Dimens.scale(40),
        width: Dimens.widthScreen / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderRadius: Dimens.scale(10),
        marginVertical: Dimens.scale(10),
    },
})
