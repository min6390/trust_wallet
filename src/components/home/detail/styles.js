import {StyleSheet} from 'react-native';
import FontSizes from '../../../common/FontSizes';
import Dimens from '../../../common/Dimens';
export const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        borderRadius: Dimens.scale(5),
        borderWidth:1,
        width: Dimens.widthScreen -30,
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
    content: {
        paddingHorizontal: Dimens.scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        width:Dimens.widthScreen-150,

    },
});
