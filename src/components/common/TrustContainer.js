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
    leftIcon: PropTypes.bool,
    rightIcon: PropTypes.bool,
    title: PropTypes.string,
    firstScreen :PropTypes.string,
    secondScreen :PropTypes.string,
    thirdScreen :PropTypes.string,
    duaScreen :PropTypes.bool,
    firstName:PropTypes.string,
    secondName:PropTypes.string,
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
        process,
        firstScreen,
        secondScreen,
        thirdScreen,
        duaScreen,
        firstName,
        secondName,
    } = props;

    return <TrustView
        style={[styles.container, {
            paddingTop: Dimens.verticalScale(ifIphoneX(34, 0)),
        }, style]}
    >
        {hasHeader && <TrustHeader
            firstName={firstName}
            secondName={secondName}
            firstScreen={firstScreen}
            secondScreen={secondScreen}
            thirdScreen={thirdScreen}
            duaScreen={duaScreen}
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
