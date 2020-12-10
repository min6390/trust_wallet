import React, {useState} from 'react';
import {TextInput} from 'react-native'
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import {styles} from '../header/styles';
import TrustTextInput from '../common/TrustTextInput';
import {useTheme} from '@react-navigation/native';

const Search = (props) => {
    const {colors}=useTheme();
    const {navigation,style} = props;
    const [text,setText]=useState()
    const onChangeText=(text)=>{
        setText(text)

    }
    const onEndEditing=()=>{
        props.parentCallBack(text)
    }
    return (
        <TrustView style={[styles.container,{backgroundColor:colors.primary,justifyContent:'center'}]}>
            <TrustView
                flexDirection={'row'}
                style={[styles.content,{backgroundColor:colors.searchHeader}]}>
                <TrustImage
                    tintColor={colors.inactiveTintColor}
                    style={styles.imageFind}
                    localSource={Images.im_find}/>
                <TextInput
                    placeholderTextColor={colors.content}
                    onEndEditing={onEndEditing}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={'Find something or address dApp'}
                    style={[styles.searchInput,{color:colors.textColor}]}/>
            </TrustView>
        </TrustView>

    );
};

export default Search;
