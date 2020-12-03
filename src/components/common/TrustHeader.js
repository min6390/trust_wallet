import React from 'react';
import PropTypes from 'prop-types';
import {HEADER_MODE} from '../../common/Constants';
import HomeHeader from '../header/HomeHeader';
import TrustView from './TrustView';
import DetailHeader from '../header/DetailHeader';
import SearchHeader from '../header/SearchHeader';

TrustHeader.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    data: PropTypes.object,
    renderItem: PropTypes.func,
    keyExtractor: PropTypes.func,
    title: PropTypes.string,

};

TrustHeader.defaultProps = {
    headerMode: HEADER_MODE.HOME,
};

function TrustHeader(props) {
    const {
        headerMode,
        title,
        style,
        navigation,
        process,
        rightIcon,
        leftIcon,
        firstScreen,
        secondScreen,
        thirdScreen,
        duaScreen,
        firstName,
        secondName,
    } = props;
    switch (headerMode) {
        case HEADER_MODE.HOME:
            return <HomeHeader
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                process={process}
                navigation={navigation}
                style={style}
                firstScreen={firstScreen}
                secondScreen={secondScreen}
                thirdScreen={thirdScreen}
                duaScreen={duaScreen}
                firstName={firstName}
                secondName={secondName}
            />;
        case HEADER_MODE.DETAIL:
            return <DetailHeader
                title={title}
                navigation={navigation}
            />;
        case HEADER_MODE.SEARCH:
            return <SearchHeader
                navigation={navigation}
            />;
        default:
            return <TrustView/>;
    }
}


export default TrustHeader;

