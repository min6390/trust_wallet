import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import Colors from '../../common/Colors';
import Images from '../../common/Images';
import TrustFlatList from '../common/TrustFlatList';
import TrustImage from '../common/TrustImage';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {styles} from './styles';
import Dimens from '../../common/Dimens';

const data = [
    {
        id: 1,
        image: Images.im_arrow_up,
        name: 'Gửi',
    },
    {
        id: 2,
        image: Images.im_arrow_down,
        name: 'Nhận',
    },
    {
        id: 3,
        image: Images.im_sale,
        name: 'Mua',
    },
];


function Information(props) {
    const {navigation} = props;
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
                    style={styles.txtType}
                    text={item.name}
                />
            </TrustView>
        );
    };
    return (
        <TrustView style={{backgroundColor: Colors.secondBackground, alignItems: 'center'}}>
            <TrustText
                style={styles.txtMoney}
                text={'Money' + ' $'}
            />
            <TrustText
                style={styles.txtCoin}
                text={'Ví Multi-Coin 1'}
            />
            <TrustFlatList
                data={data}
                horizontal={true}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
            />
        </TrustView>
    );
}

export default Information;
