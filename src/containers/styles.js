import {StyleSheet} from 'react-native';
import Dimens from '../common/Dimens';
import FontSizes from '../common/FontSizes';

export const styles = StyleSheet.create({
  btnFinish: {
    width: Dimens.scale(320),
    borderRadius: Dimens.scale(3),
    height: Dimens.scale(40),
    marginVertical: Dimens.scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#078266',
  },
  container: {
    alignItems: 'center',
    margin: Dimens.scale(5),
    justifyContent: 'space-between',
  },
  content: {
    marginVertical: Dimens.verticalScale(3),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Dimens.scale(5),
  },
  image: {
    height: Dimens.scale(50),
    width: Dimens.scale(50),
  },
  textError: {
    fontSize: FontSizes.size20,
    color: 'red',
    position: 'absolute',
    left: Dimens.scale(30),
    top: Dimens.verticalScale(50),
  },
});
