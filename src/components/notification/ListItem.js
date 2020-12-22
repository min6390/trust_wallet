import React, {useState} from 'react';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';
import Colors from '../../common/Colors';
import TrustFlatList from '../common/TrustFlatList';
import NewsItem from './NewsItem';
import {StyleSheet} from 'react-native';
import Dimens from '../../common/Dimens';
import FontSizes from '../../common/FontSizes';
import {useTheme} from '@react-navigation/native';

function ListItem(props) {
    const {colors} = useTheme();
    const {data,navigation,text} = props;
    const handleItems = (items) => {
        const newsItems = [];
        let index = 0;
        for (let i = 0; i < items.length; i += 1) {
            if (newsItems[index] === undefined) {
                newsItems[index] = [];
            }
            newsItems[index].push(items[i]);
            if (newsItems[index].length === 2) {
                index += 1;
            }
        }
        return newsItems;
    };

    const renderItem = (item) => {
        console.log('item=================----------',item.item)
        return (
            <TrustView>
                <NewsItem item={item.item[0]}
                          navigation={navigation}
                />
                 <NewsItem
                    item={item.item[1]}
                    navigation={navigation}
                />
            </TrustView>
        );
    };

    return (
        <>
            <TrustView
                flexDirection={'row'}
                style={styles.container}
            >
                <TrustText
                    style={[styles.txtTitle, {color: colors.textColor}]}
                    text={text}
                />
                <TrustTouchableOpacity
                    onPress={() => {
                        navigation?.navigate(NAVIGATION_CONSTANTS.SHOW_ALL);
                    }}>
                    <TrustText
                        style={[styles.txtShowAll, {color: Colors.secondBackground}]}
                        text={' Show all '}
                    />
                </TrustTouchableOpacity>
            </TrustView>
            <TrustFlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={handleItems(data)}
                renderItem={renderItem}
                keyExtractor={item => item.id?.toString()}
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
        fontSize: FontSizes.size28,

    },
    txtShowAll: {
        color: 'blue',
        fontSize: FontSizes.size28,
    },
});

export default ListItem;
