import React, {} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';
import TrustFlatList from '../components/common/TrustFlatList';
import {useSelector} from 'react-redux';
import TrustLine from '../components/common/TrustLine';
import {useTheme} from '@react-navigation/native';
import ListCoinItem from '../components/home/ListCoinItem';


function HomeContainer(props) {
    const {colors} = useTheme();
    const {navigation} = props;
    const {socketData} = useSelector(state => state.socket);
    props.callbackIcon(true);

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
                        renderItem={({item,index}) => <ListCoinItem navigation={navigation} item={item} index={index}/>}
                        ItemSeparatorComponent={() => <TrustLine/>}
                        ListHeaderComponent={() => {
                            return (
                                <Information/>
                            );
                        }
                        }
                    />
            }
        />
    );
}


export default HomeContainer;
