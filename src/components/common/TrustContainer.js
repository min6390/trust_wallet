import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import PropTypes from "prop-types";
import Images from "../../common/Images";
import Dimens from "../../common/Dimens";
import {ifIphoneX} from "react-native-iphone-x-helper";
import TrustView from './TrustView';
import TrustHeader from './TrustHeader';

TrustContainer.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    // hasHeader: PropTypes.bool,
    // headerMode: PropTypes.string,
    navigation: PropTypes.object
}

TrustContainer.defaultProps = {
   // hasHeader: true
}

function TrustContainer(props) {
    const {
        style,
        title,
        renderContentView,
        hasHeader,
        headerMode,
        navigation
    } = props;

    return <TrustView
        style={[styles.container, {
            paddingTop: Dimens.verticalScale(ifIphoneX(34, 0))
        }, style]}
    >
        {/*{hasHeader && <TrustHeader*/}
        {/*    title={title}*/}
        {/*    headerMode={headerMode}*/}
        {/*    navigation={navigation}*/}
        {/*/>}*/}
        {renderContentView()}
    </TrustView>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10665a'
    }
});

export default TrustContainer;
