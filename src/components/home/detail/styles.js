import {StyleSheet} from 'react-native';
import FontSizes from '../../../common/FontSizes';
import Dimens from '../../../common/Dimens';
export const styles = StyleSheet.create({
    container: {
        borderRadius: Dimens.scale(8),
        borderWidth:1,
        width: Dimens.widthScreen -30,
        padding:Dimens.scale(5),
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        margin:Dimens.scale(5),
        fontSize: FontSizes.size25,
    },
   image:{
        marginHorizontal:Dimens.scale(8),
        height: Dimens.verticalScale(18),
       width:Dimens.scale(18)
   },
    txtRight: {
        margin:Dimens.scale(5),
        fontSize: FontSizes.size25,
    },
    txtType: {
        color: 'white',
    },
});
