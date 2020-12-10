import React, {useState} from 'react';
import TrustView from '../../common/TrustView';
import Dimens from '../../../common/Dimens';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustImage from '../../common/TrustImage';
import Images from '../../../common/Images';
import ConvertItem from './ConvertItem';
import {styles} from './styles';
import TrustText from '../../common/TrustText';
import TrustFlatList from '../../common/TrustFlatList';
import {useTheme} from '@react-navigation/native';

function ConvertView() {
    const {colors}=useTheme();
    const dataItem = [
        {
            id: 1,
            title: 'ELE',
            image:Images.im_ele
        },
        {
            id: 2,
            title: 'XRP',
            image:Images.im_xrp
        },
    ];

    const [data, setData] = useState(dataItem);
    const handleItem = () => {
        const temp = [data[0], data[1]] = [data[1], data[0]];
        setData(temp);
    };
    return (
        <TrustView style={[styles.container,{backgroundColor:colors.deal}]}>
            <ConvertItem
                keyboardType={'number-pad'}
                text={'Bạn trả'}
            />
            <TrustView style={{borderWidth: Dimens.scale(1 / 3)}}/>
            <TrustFlatList
                style={{position: 'absolute', left: Dimens.scale(200)}}
                keyExtractor={item => item.id}
                data={data}
                renderItem={({item}) =>
                    <TrustView
                        flexDirection={'row'}
                        style={[styles.txtSwap]}>
                        <TrustImage
                            style={styles.image}
                            localSource={item.image}
                        />
                        <TrustText
                            style={{marginHorizontal:Dimens.scale(5),color:colors.textColor}}
                           text={item.title}
                        />
                    </TrustView>

                }
            />
            <TrustTouchableOpacity
                onPress={handleItem}
                activeOpacity={10}
                style={[styles.btnSwap,{backgroundColor: colors.deal,borderColor:colors.border}]}>
                <TrustImage
                    style={{height: Dimens.scale(16), width: Dimens.scale(16)}}
                    localSource={Images.im_up_down_arrow}
                    tintColor={colors.textConvert}/>
            </TrustTouchableOpacity>
            <ConvertItem
                text={'Bạn nhận'}
            />
        </TrustView>

    );
}

export default ConvertView;
