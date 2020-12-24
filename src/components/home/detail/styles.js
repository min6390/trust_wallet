import {StyleSheet} from 'react-native';
import FontSizes from '../../../common/FontSizes';
import Dimens from '../../../common/Dimens';
import Colors from '../../../common/Colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: Dimens.verticalScale(10),
    borderRadius: Dimens.scale(5),
    borderWidth: Dimens.scale(1 / 2),
    width: Dimens.widthScreen - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    margin: Dimens.scale(5),
    fontSize: FontSizes.size25,
  },
  image: {
    marginHorizontal: Dimens.scale(8),
    height: Dimens.verticalScale(18),
    width: Dimens.scale(18),
  },
  txtRight: {
    margin: Dimens.scale(5),
    fontSize: FontSizes.size25,
  },
  txtType: {
    color: 'white',
  },
  content: {
    paddingHorizontal: Dimens.scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimens.widthScreen - 160,

  },
  labelStyle: {
    position: 'absolute',
    left: Dimens.scale(10),
    top: Dimens.verticalScale(-8),
    zIndex: 2,
  },

  textColor: {
    fontSize: FontSizes.size22,
    color: Colors.secondBackground,
  },
  modalContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:Dimens.verticalScale(22),
    height: Dimens.heightScreen,
    width:Dimens.widthScreen,
    backgroundColor:'white',
    borderRadius: Dimens.scale(15)
  },
});
