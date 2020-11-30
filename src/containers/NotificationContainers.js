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

const data = [
    {
        id: 1,
        title: 'History',
        contents: [
            {
                id: 1,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
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
    {
        id: 2,
        title: 'New DAPps',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ]
    },
    {
        id: 3,
        title: 'Defi',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ]
    },
    {
        id: 4,
        title: 'Smart Chain',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ]
    },
    {
        id: 5,
        title: 'Popular',
        image: Images.im_bitcoin,
        contents: [
            {
                id: 1,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 2,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 3,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 4,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
            {
                id: 5,
                image: Images.im_bitcoin,
                content: 'Hello guys Hello guysHello guysHello guysHello guysHello guysHello guys',
            },
        ]
    },


];

function NotificationContainer(props) {
    const {navigation} = props;

    const handleItems = (items) => {
        const foodItems = [];
        let index = 0;
        for (let i = 0; i < items.length; i += 1) {
            if (foodItems[index] === undefined) {
                foodItems[index] = []
            }
            foodItems[index].push(items[i]);
            if (foodItems[index].length === 2) {
                index += 1
            }
        }
        return foodItems;
    }

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
                keyExtractor={item=> item.id}
                renderItem={({item}) =>
                    <>
                        <TrustText
                            text={item.title}/>
                        <TrustFlatList
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

export default NotificationContainer;
