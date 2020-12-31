import React from 'react'
import TrustText from '../common/TrustText';
import FontSizes from '../../common/FontSizes';
import Dimens from '../../common/Dimens';
import {useTheme} from '@react-navigation/native';

function Content(props) {
    const {colors}=useTheme();
    const {txtTitle,txtContent}=props;
    return(
        <>
            <TrustText
                style={{fontSize: FontSizes.size35,color:colors.textColor}}
                text={txtTitle}
            />
            <TrustText
                style={{textAlign: 'center', marginVertical: Dimens.scale(15),color:colors.textColor}}
                text={txtContent}
            />
        </>
    )
}

export default Content
