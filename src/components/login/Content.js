import React from 'react'
import TrustText from '../common/TrustText';
import FontSizes from '../../common/FontSizes';
import Dimens from '../../common/Dimens';

function Content(props) {
    const {txtTitle,txtContent}=props;
    return(
        <>
            <TrustText
                style={{fontSize: FontSizes.size35}}
                text={txtTitle}
            />
            <TrustText
                style={{textAlign: 'center', marginVertical: Dimens.scale(15)}}
                text={txtContent}
            />
        </>
    )
}

export default Content
