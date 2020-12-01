import {StyleSheet} from 'react-native';
import Dimens from '../../../common/Dimens';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: Dimens.scale(320),
        marginVertical: Dimens.scale(30),
        borderRadius: Dimens.scale(10),
        borderWidth: Dimens.scale(1 / 3),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    },
    btnSwap: {
        height: Dimens.scale(40), width: Dimens.scale(40),
        borderRadius: Dimens.scale(30),
        borderWidth: Dimens.scale(1),
        borderColor: '#dcdcdc',
        position: 'absolute',
        top: Dimens.scale(80),
        left: Dimens.scale(250),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
