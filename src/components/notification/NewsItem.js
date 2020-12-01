import React, {} from 'react';
import {StyleSheet} from 'react-native';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import TrustText from '../common/TrustText';
import Dimens from '../../common/Dimens';
import FontSizes from '../../common/FontSizes';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';

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

const styles = StyleSheet.create({
    txtName: {
        marginBottom: Dimens.scale(5),
        fontSize: FontSizes.size30,

    },
    txtTitle: {
        width: Dimens.scale(200),
    },
});
export default NewsItem;
