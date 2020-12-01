import React, {} from 'react';
import {
    StyleSheet,
} from 'react-native';
import HomeContainer from './HomeContainer';
import Images from '../common/Images';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import NewsItem from '../components/notification/NewsItem';
import FontSizes from '../common/FontSizes';
import Dimens from '../common/Dimens';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';

const data = [
    {
        id: 1,
        title: 'History',
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },
    {
        id: 2,
        title: 'New DAPps',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },
    {
        id: 3,
        title: 'Defi',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },
    {
        id: 4,
        title: 'Smart Chain',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },
    {
        id: 5,
        title: 'Popular',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                name: 'TESSSTER',
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ],
    },


];

function NotificationContainer(props) {
    const {navigation} = props;

    const handleItems = (items) => {
        const foodItems = [];
        let index = 0;
        for (let i = 0; i < items.length; i += 1) {
            if (foodItems[index] === undefined) {
                foodItems[index] = [];
            }
            foodItems[index].push(items[i]);
            if (foodItems[index].length === 2) {
                index += 1;
            }
        }
        return foodItems;
    };

    const renderItem = ({item}) => {
        return (
            <TrustView>
                <NewsItem item={item[0]}
                          navigation={navigation}
                />
                {item[1] && <NewsItem
                    item={item[1]}
                    navigation={navigation}
                />}
            </TrustView>
        );
    };


    return (
        <>
            <TrustFlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                    <>
                        <TrustView
                            flexDirection={'row'}
                            style={styles.container}
                        >
                            <TrustText
                                style={styles.txtTitle}
                                text={item.title}
                            />
                            <TrustTouchableOpacity>
                                <TrustText
                                    style={styles.txtShowAll}
                                    text={' Show all '}
                                />
                            </TrustTouchableOpacity>
                        </TrustView>
                        <TrustFlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={handleItems(item.contents)}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                        />
                    </>
                }
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: Dimens.scale(5),
        justifyContent: 'space-between',
    },
    txtTitle: {
        fontWeight: 'bold',
        fontSize: FontSizes.size35,

    },
    txtShowAll: {
        color: 'blue',
        fontSize: FontSizes.size35,
    },
});
export default NotificationContainer;
