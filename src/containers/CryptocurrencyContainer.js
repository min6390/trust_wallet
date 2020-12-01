import React, {} from 'react';
import {
    StyleSheet,
} from 'react-native';
import HomeContainer from './HomeContainer';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import Dimens from '../common/Dimens';
import FontSizes from '../common/FontSizes';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';

const data = [
    {
        id: 1,
        title: 'Tezos',
        content: 'Lãi hằng năm',

    },
    {
        id: 2,
        title: 'Tron',
        content: 'Lãi hằng năm',

    },
    {
        id: 3,
        title: 'Cosmos',
        content: 'Lãi hằng năm',

    },
    {
        id: 4,
        title: 'Kava',
        content: 'Lãi hằng năm',

    },
];

function CryptocurrencyContainer(props) {
    const {navigation} = props;
    const renderItem = ({item}) => {
        return (
            <TrustTouchableOpacity>
                <TrustText
                    style={styles.txtTitle}
                    text={item.title}
                />
                <TrustText
                    text={item.content}
                />
                <TrustView
                    style={{borderWidth:Dimens.scale(1/4),
                        flex:1,
                        marginVertical:Dimens.scale(8)}}
                />
            </TrustTouchableOpacity>

        );
    };
    return (
        <>
            <TrustText text={'Đặt cược'}/>
            <TrustFlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </>
    );
}

const styles = StyleSheet.create({
    txtTitle: {
        marginBottom: Dimens.scale(10),
        fontSize: FontSizes.size35,
    },
});
export default CryptocurrencyContainer;
