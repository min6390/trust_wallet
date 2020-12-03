import React from 'react';
import PropTypes from 'prop-types';
import {HEADER_MODE} from '../../common/Constants';
import HomeHeader from '../header/HomeHeader';

TrustHeader.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    data: PropTypes.object,
    renderItem: PropTypes.func,
    keyExtractor: PropTypes.func,

};

TrustHeader.defaultProps = {
    headerMode: HEADER_MODE.HOME
}

function TrustHeader(props) {
    const {
        headerMode,
        title,
        style,
        navigation,
        process,
        rightIcon,
        leftIcon
    } = props;
    switch (headerMode) {
        case HEADER_MODE.HOME:
            return <HomeHeader
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                process={process}
                navigation={navigation}
                style={style}
            />;
        case HEADER_MODE.DETAIL:
            return <>

            </>;
        default:
            return<></>
    }
}


export default TrustHeader;
