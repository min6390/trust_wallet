import React, {} from 'react';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import Images from '../../common/Images';
import InformationItemList from './InformationItemList';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';


function Information() {
    const {colors} = useTheme();
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

    return (
        <TrustView style={{backgroundColor:colors.primary,alignItems: 'center'}}>
            <TrustText
                style={styles.txtMoney}
                text={'Money' + ' $'}
            />
            <TrustText
                style={styles.txtCoin}
                text={'Ví Multi-Coin 1'}
            />
            <InformationItemList
                data={data}
            />
        </TrustView>
    );
}

export default Information;
