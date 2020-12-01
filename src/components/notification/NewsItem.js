import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import TrustText from '../common/TrustText';
import Dimens from '../../common/Dimens';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {styles} from './styles';

function NewsItem(props) {
    const {navigation, item} = props;
    return (
        <TrustTouchableOpacity>
            <TrustView flexDirection={'row'} style={{margin: Dimens.scale(5)}}>
                <TrustImage
                    style={{height: 100, width: 100, borderRadius: Dimens.scale(30)}}
                    localSource={Images.im_bitcoin}
                />
                <TrustView style={{marginHorizontal: Dimens.scale(5)}}>
                    <TrustText
                        style={styles.txtName}
                        numberOfLines={1}
                        text={item.name}/>
                    <TrustText
                        numberOfLines={3}
                        style={styles.txtTitle}
                        text={item.content}/>
                </TrustView>
            </TrustView>
        </TrustTouchableOpacity>

    );
}


export default NewsItem;
