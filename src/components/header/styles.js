import {StyleSheet} from 'react-native';
import Dimens from '../../common/Dimens';
import FontSizes from '../../common/FontSizes';
import React from 'react';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Dimens.scale(5),
    height: Dimens.scale(64),
  },
  image: {
    height: Dimens.scale(24),
    width: Dimens.scale(24),

  },
  txtHeader: {
    fontSize: FontSizes.size45,
    color: 'white',
    marginHorizontal: Dimens.scale(20),
  },
  txtBuy: {
    color: 'white',
    marginRight: Dimens.scale(30),
    fontSize: FontSizes.size28,
    top: Dimens.scale(5),
  },
  searchInput: {
    marginHorizontal: Dimens.scale(10),
    right: Dimens.scale(15),
    width: Dimens.widthScreen - Dimens.scale(90),
  },
  imageFind: {
    marginHorizontal: Dimens.scale(8),
    height: Dimens.scale(20),
    width: Dimens.scale(20),
  },
  content: {
    borderRadius: Dimens.scale(8),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: Dimens.scale(15),
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimens.widthScreen,
    padding: Dimens.scale(8),

  },
});
