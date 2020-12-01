import {StyleSheet} from 'react-native';
import Dimens from '../common/Dimens';
import Colors from '../common/Colors';
import FontSizes from '../common/FontSizes';

export const styles = StyleSheet.create({
    btnFinish: {
        width: Dimens.scale(320),
        borderRadius: Dimens.scale(10),
        height: Dimens.scale(40),
        marginVertical: Dimens.scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondBackground,
    },
});
