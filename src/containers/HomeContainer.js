import React, {useEffect, useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustView from '../components/common/TrustView';
import {useSelector} from 'react-redux';
import TrustText from '../components/common/TrustText';
import TrustImage from '../components/common/TrustImage';
import Images from '../common/Images';
import Dimens from '../common/Dimens';
import TrustLine from '../components/common/TrustLine';
import {styles} from './styles';
import ServiceApis from '../services/apis/ServiceApis';
import {useTheme} from '@react-navigation/native';

function HomeContainer(props) {
    const {colors} = useTheme();
    const {navigation} = props;
    const [dataItem, setDataItem] = useState([]);
    const {cryptData} = useSelector(state => state.crypt);


    useEffect(() => {
        ServiceApis.getService(res => {
            setDataItem(res.data);
        }, err => {
            alert('fail', err);
        });
    }, []);


    const renderItem = ({item}) => {
        return (
            <>
                <TrustView flexDirection={'row'}
                           style={[styles.container,]}>
                    <TrustView flexDirection={'row'}
                               style={[styles.content]}>
                        <TrustImage
                            style={styles.image}
                            localSource={Images.im_xrp}
                        />
                        <TrustText
                            style={{marginHorizontal: Dimens.scale(10), color: colors.textColor}}
                            text={item.coin}
                        />
                    </TrustView>
                </TrustView>
                <TrustLine/>
            </>
        );
    };
    return (
        <TrustContainer
            style={{backgroundColor: colors.background}}
            routeData={dataItem}
            firstScreen={'Home'}
            secondScreen={'Cryt'}
            thirdScreen={'Collection'}
            firstName={'Tiền mã hóa'}
            secondName={'Tài chính'}
            duaScreen={true}
            leftIcon={true}
            rightIcon={true}
            process={0}
            navigation={navigation}
            renderContentView={() =>
                <>
                    <Information/>
                    <TrustFlatList
                        data={cryptData}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                    />
                </>
            }
        />
    );
}


export default HomeContainer;
