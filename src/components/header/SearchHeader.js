import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import {styles} from './styles';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import TrustTextInput from '../common/TrustTextInput';
import {useTheme} from '@react-navigation/native';

const SearchHeader = (props) => {
    const {colors}=useTheme();
    const {navigation,nameScreen} = props;
    const onPress = () => {
        navigation?.navigate(nameScreen);
    };
    const onFocus = () => {

    };
    return (
        <TrustView flexDirection={'row'} style={[styles.container,{backgroundColor:colors.primary}]}>
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
                style={[styles.content,{backgroundColor:colors.searchHeader}]}>
                <TrustImage
                    tintColor={colors.inactiveTintColor}
                    style={styles.imageFind}
                    localSource={Images.im_find}/>
                <TrustTextInput
                    onFocus={ onFocus}
                    placeholder={'Find something or address dApp'}
                    style={[styles.searchInput,{color:colors.textColor}]}/>
            </TrustView>
        </TrustView>

    );
};

export default SearchHeader;
