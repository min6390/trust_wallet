import React, {} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustView from '../components/common/TrustView';
import {useDispatch, useSelector} from 'react-redux';
import TrustText from '../components/common/TrustText';
import TrustImage from '../components/common/TrustImage';
import Images from '../common/Images';
import Dimens from '../common/Dimens';
import TrustLine from '../components/common/TrustLine';
import {styles} from './styles';

function HomeContainer(props) {
    const {navigation} = props;
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state);


    const renderItem = ({item}) => {
        return (
            cartItems.length !== 0 ? (
                    <>
                        <TrustView flexDirection={'row'}
                                   style={styles.container}>
                            <TrustView flexDirection={'row'}
                                       style={styles.content}>
                                <TrustImage
                                    style={styles.image}
                                    localSource={Images.im_xrp}
                                />
                                <TrustText
                                    style={{marginHorizontal: Dimens.scale(10)}}
                                    text={item.coin}
                                />
                            </TrustView>
                        </TrustView>
                        <TrustLine/>
                    </>
                ) : <TrustView/>
        );
    };
    return (
        <TrustContainer
            firstScreen={'Home'}
            secondScreen={'Cryt'}
            firstName={'Home'}
            secondName={'Crypt'}
            duaScreen={true}
            leftIcon={true}
            rightIcon={true}
            process={0}
            navigation={navigation}
            renderContentView={() =>
                <>
                    <Information
                        color={'white'}/>
                    <TrustFlatList
                        data={cartItems}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                    />
                </>
            }
        />
    );
}


export default HomeContainer;
