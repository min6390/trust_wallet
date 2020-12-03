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
    leftIcon : PropTypes.bool,
    rightIcon : PropTypes.bool

};

TrustContainer.defaultProps = {
    hasHeader: true,
};

function TrustContainer(props) {
    const {
        leftIcon,
        rightIcon,
        style,
        title,
        renderContentView,
        hasHeader,
        headerMode,
        navigation,
        process
    } = props;

    return <TrustView
        style={[styles.container, {
            paddingTop: Dimens.verticalScale(ifIphoneX(34, 0)),
        }, style]}
    >
        {hasHeader && <TrustHeader
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            title={title}
            process={process}
            headerMode={headerMode}
            navigation={navigation}
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
