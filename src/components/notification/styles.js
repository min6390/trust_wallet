import {StyleSheet} from 'react-native';
import FontSizes from '../../common/FontSizes';
import Dimens from '../../common/Dimens';
export const styles = StyleSheet.create({
    txtName: {
        marginBottom: Dimens.scale(5),
        fontSize: FontSizes.size26,

    },
    txtTitle: {
        fontSize: FontSizes.size23,
        width: Dimens.scale(200),
    },
});
