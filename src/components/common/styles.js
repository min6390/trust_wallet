import {StyleSheet} from 'react-native';
import Dimens from '../../common/Dimens';
import Colors from '../../common/Colors';
import FontSizes from '../../common/FontSizes';

export const styles = StyleSheet.create({
    container: {
        borderWidth:Dimens.scale(1/2),
        borderRadius: Dimens.scale(5),
        backgroundColor: Colors.thirdBackground,
        justifyContent: 'center',
        height:Dimens.scale(24)
    },
    txtType: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Dimens.scale(3),
        backgroundColor: '#8a2be2',
        width: Dimens.scale(90),
        margin:Dimens.scale(1),
        marginVertical:Dimens.scale(3),

    },
    text:{
        fontSize:FontSizes.size22,
        color:'white'
    }
});
