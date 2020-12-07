import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustText from '../../common/TrustText';
import React from 'react';
import TrustFlatList from '../../common/TrustFlatList';
import Dimens from '../../../common/Dimens';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
const data = [
    {
        id: 1,
        percent: '25',
    },
    {
        id: 2,
        percent: '50',
    },
    {
        id: 3,
        percent: '75',
    },
    {
        id: 4,
        percent: '100',
    },
];
function PercentList (props){
    const {colors}=useTheme()
    const {style}=props;
    return (
        <TrustFlatList
            style={{width: Dimens.scale(320)}}
            data={data}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item})=>
                <TrustTouchableOpacity style={[styles.btnPercent,style,{backgroundColor:colors.percentBackground}]}>
                    <TrustText
                        style={{color: colors.percentText}}
                        text={item.percent + '%'}
                    />
                </TrustTouchableOpacity>
            }/>

    );
}
const styles = StyleSheet.create({
    btnPercent: {
        justifyContent: 'center',
        borderRadius: Dimens.scale(5),
        alignItems: 'center',
    },

});
export default PercentList
