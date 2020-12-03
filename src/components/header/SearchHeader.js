import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import {styles} from './styles';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import TrustTextInput from '../common/TrustTextInput';

const SearchHeader = (props) => {
    const {navigation,} = props;
    const onPress = () => {
        navigation?.goBack();
    };
    const onFocus = () => {

    };
    return (
        <TrustView flexDirection={'row'} style={styles.container}>
            <TrustTouchableOpacity style={styles.image}
                                   onPress={onPress}>
                <TrustImage
                    style={{flex: 1}}
                    tintColor={'white'}
                    localSource={Images.im_left_arrow}
                />
            </TrustTouchableOpacity>
            <TrustView
                flexDirection={'row'}
                style={styles.content}>
                <TrustImage
                    tintColor={'#dcdcdc'}
                    style={styles.imageFind}
                    localSource={Images.im_find}/>
                <TrustTextInput
                    onFocus={() => onFocus}
                    placeholder={'Find something or address dApp'}
                    style={styles.searchInput}/>
            </TrustView>
        </TrustView>

    );
};

export default SearchHeader;
