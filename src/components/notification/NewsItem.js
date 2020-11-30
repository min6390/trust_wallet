import React, {} from 'react';
import {StyleSheet} from 'react-native'
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import TrustText from '../common/TrustText';

function NewsItem(props) {
    const {navigation, item} = props;
    return (
        <TrustView flexDirection={'row'}>
            <TrustImage
                style={{height: 100, width: 100}}
                localSource={Images.im_bitcoin}
            />
            <TrustView >
                <TrustText text={item.title}/>
                <TrustText
                    style={styles.txtTitle}
                    text={item.content}/>
            </TrustView>
        </TrustView>
    );
}
const styles=StyleSheet.create({
    txtTitle:{

    }
})
export default NewsItem;
