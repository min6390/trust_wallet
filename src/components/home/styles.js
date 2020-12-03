import {StyleSheet} from 'react-native';
import FontSizes from '../../common/FontSizes';
import Dimens from '../../common/Dimens';
import Colors from '../../common/Colors';
export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: Dimens.scale(20),
        marginVertical: Dimens.scale(5),
    },
    txtMoney: {
        marginTop: Dimens.scale(30),
        color: 'white',
        fontSize: FontSizes.size45,
        fontWeight: 'bold',
    },
    txtCoin: {
        marginVertical: Dimens.scale(10),
        color: '#dcdc',
        fontSize: FontSizes.size30,

    },
    imType: {
        backgroundColor: Colors.thirdBackground,
        width: Dimens.scale(40),
        height: Dimens.scale(40),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtType: {
        color: 'white',
    },
})
