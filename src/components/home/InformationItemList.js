import React, {} from 'react';
import TrustView from '../common/TrustView';
import {styles} from './styles';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import TrustImage from '../common/TrustImage';
import Dimens from '../../common/Dimens';
import TrustText from '../common/TrustText';
import TrustFlatList from '../common/TrustFlatList';
import {useTheme} from '@react-navigation/native';

function InformationItemList(props) {
    const {colors}= useTheme();
    const {data,style}=props;
    const renderItem = ({item}) => {
        return (
            <TrustView style={styles.container}>
                <TrustTouchableOpacity style={styles.imType}>
                    <TrustImage
                        tintColor={'white'}
                        style={{width: Dimens.scale(20), height: Dimens.scale(20)}}
                        localSource={item.image}
                    />
                </TrustTouchableOpacity>
                <TrustText
                    style={[styles.txtType,{color:colors.textColor}]}
                    text={item.name}
                />
            </TrustView>
        );
    };
    return (
        <TrustFlatList
            style={style}
            data={data}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}

export default InformationItemList;
