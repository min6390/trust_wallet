import React, {} from 'react';
import {StyleSheet} from 'react-native';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import Colors from '../../common/Colors';
import FontSizes from '../../common/FontSizes';
import Images from '../../common/Images';
import TrustFlatList from '../common/TrustFlatList';
import TrustImage from '../common/TrustImage';
import Dimens from '../../common/Dimens';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';

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
                keyExtractor={(item) => {
                    item.id;
                }}
                renderItem={renderItem}
            />
        </TrustView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: Dimens.scale(20),
        marginVertical: Dimens.scale(5),
    },
    txtMoney: {
        marginTop: Dimens.scale(30),
        color: 'white',
        fontSize: FontSizes.size45,
        fontWeight: 'bold',
    },
    txtCoin: {
        marginVertical: Dimens.scale(10),
        color: '#dcdc',
        fontSize: FontSizes.size30,

    },
    imType: {
        backgroundColor: '#87cefa',
        width: Dimens.scale(32),
        height: Dimens.scale(32),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtType: {
        color: 'white',
    },
});
export default Information;
