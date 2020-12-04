import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustText from '../../common/TrustText';
import Colors from '../../../common/Colors';
import React from 'react';
import TrustFlatList from '../../common/TrustFlatList';
import Dimens from '../../../common/Dimens';
import TrustView from '../../common/TrustView';
import {StyleSheet} from 'react-native';
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
    const dataItem=[
        {
            id:1,
            name : 100
        },
        {
            id:2,
            name : 300
        }
    ]
    const {style}=props
    return (
        <TrustFlatList
            style={{width: Dimens.scale(320)}}
            data={data}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item})=>
                <TrustTouchableOpacity style={[styles.btnPercent,style]}>
                    <TrustText
                        style={{color: Colors.secondBackground}}
                        text={item.percent + '%'}
                    />
                </TrustTouchableOpacity>
            }/>

    );
};
const styles = StyleSheet.create({
    btnPercent: {
        backgroundColor: '#b0c4de',
        justifyContent: 'center',
        borderRadius: Dimens.scale(5),
        alignItems: 'center',
    },

});
export default PercentList
