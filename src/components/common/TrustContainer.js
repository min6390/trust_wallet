import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Dimens from '../../common/Dimens';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import TrustView from './TrustView';
import TrustHeader from './TrustHeader';

TrustContainer.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  hasHeader: PropTypes.bool,
  headerMode: PropTypes.string,
  navigation: PropTypes.object,
  title: PropTypes.string,
  onPressContinue:PropTypes.func
};

TrustContainer.defaultProps = {
  hasHeader: true,
};

function TrustContainer(props) {
  const {
    rightIcon,
    style,
    headerMode,
    title,
    renderContentView,
    hasHeader,
    navigation,
    nameScreen,
    text,
    onPressContinue,
  } = props;

  return <TrustView
    style={[styles.container, {
      paddingTop: Dimens.verticalScale(ifIphoneX(34, 0)),
    }, style]}
  >
    {hasHeader && <TrustHeader
      onPressContinue={onPressContinue}
      rightIcon={rightIcon}
      headerMode={headerMode}
      nameScreen={nameScreen}
      navigation={navigation}
      title={title}
      text={text}
    />}
    {renderContentView()}
  </TrustView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrustContainer;
