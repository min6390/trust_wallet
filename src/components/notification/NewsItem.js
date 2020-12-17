import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import TrustText from '../common/TrustText';
import Dimens from '../../common/Dimens';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';

function NewsItem(props) {
    const {colors} = useTheme();
    const {item} = props;
    return (
        <TrustTouchableOpacity>
            <TrustView flexDirection={'row'} style={{margin: Dimens.scale(5)}}>
                <TrustImage
                    style={{
                        height: Dimens.scale(64),
                        width: Dimens.scale(64),
                        borderRadius: Dimens.scale(20),
                    }}
                    localSource={Images.im_ele}
                />
                <TrustView style={{marginHorizontal: Dimens.scale(5)}}>
                    <TrustText
                        style={[styles.txtName, {color: colors.textColor}]}
                        numberOfLines={1}
                        text={item.name}/>
                    <TrustText
                        numberOfLines={3}
                        style={[styles.txtTitle, {color: colors.content}]}
                        text={item.content}/>
                </TrustView>
            </TrustView>
        </TrustTouchableOpacity>

    );
}


export default NewsItem;
