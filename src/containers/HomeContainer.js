import React, {} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';
import TrustFlatList from '../components/common/TrustFlatList';
import {useDispatch, useSelector} from 'react-redux';
import TrustLine from '../components/common/TrustLine';
import {useTheme} from '@react-navigation/native';
import ListCoinItem from '../components/home/ListCoinItem';
import {setHide} from '../redux/actions/HideAction';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeContainer(props) {
    const {colors} = useTheme();
    const {navigation} = props;
    const {socketData} = useSelector(state => state.socket);
    props.callbackIcon(true);

    const dispatch = useDispatch();
    const currentHide = useSelector(state => {
        return state.hasHide.hideMoney;
    });
    console.log('socketData================',socketData)
    const onPressHide = async (value) => {
        // try {
        //     dispatch(setHide(!currentHide));
        //     await AsyncStorage.setItem('HasHide', JSON.stringify(value));
        // } catch (e) {
        //     console.log('err=============', e);
        // }
    };


    return (
        <TrustContainer
            style={{backgroundColor: colors.primary}}
            hasHeader={false}
            navigation={navigation}
            renderContentView={() =>
                <TrustFlatList
                    style={{backgroundColor: colors.background}}
                    data={socketData}
                    keyExtractor={item => item.name}
                    renderItem={({item, index}) =>
                        <ListCoinItem
                            hide={currentHide}
                            navigation={navigation}
                            item={item}
                            index={index}
                        />}
                    ItemSeparatorComponent={() => <TrustLine/>}
                    ListHeaderComponent={() => {
                        return (
                            <Information
                                currentHide={currentHide}
                                onPressHide={onPressHide}
                            />
                        );
                    }
                    }
                />
            }
        />
    );
}


export default HomeContainer;
