import React from 'react';
import PropTypes from 'prop-types';
import {HEADER_MODE} from '../../common/Constants';
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
    rightIcon : PropTypes.bool,
    text: PropTypes.string,
    onPressContinue:PropTypes.func
};

TrustHeader.defaultProps = {
    headerMode: HEADER_MODE.HOME,
};

function TrustHeader(props) {
    const {
        text,
        rightIcon,
        headerMode,
        title,
        navigation,
        nameScreen,
        onPressContinue,
    } = props;
    switch (headerMode) {
        case HEADER_MODE.DETAIL:
            return <DetailHeader
              onPressContinue={onPressContinue}
                text={text}
                rightIcon={rightIcon}
                title={title}
                navigation={navigation}
            />;
        case HEADER_MODE.SEARCH:
            return <SearchHeader
                nameScreen={nameScreen}
                navigation={navigation}
            />;
        default:
            return <TrustView/>;
    }
}


export default TrustHeader;

