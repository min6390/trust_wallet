import {StyleSheet} from 'react-native';
import Dimens from '../common/Dimens';
import Colors from '../common/Colors';

export const styles = StyleSheet.create({
    btnFinish: {
        width: Dimens.scale(320),
        borderRadius: Dimens.scale(3),
        height: Dimens.scale(40),
        marginVertical: Dimens.scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondBackground,
    },
    container: {
        alignItems: 'center',
        margin: Dimens.scale(5),
        justifyContent: 'space-between',
    },
    content: {
        marginVertical: Dimens.verticalScale(5),
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal:Dimens.scale(5)
    },
    image: {
        height: Dimens.scale(50),
        width: Dimens.scale(50),
    },
});
