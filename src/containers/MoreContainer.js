import React, {useEffect, useState} from 'react';
import Images from '../common/Images';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustImage from '../components/common/TrustImage';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import Dimens from '../common/Dimens';
import ToggleSwitch from 'toggle-switch-react-native';
import Colors from '../common/Colors';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import ServiceApis from '../services/apis/ServiceApis';
import TrustLine from '../components/common/TrustLine';
import {useDispatch} from 'react-redux';
import {styles} from './styles';


function MoreContainer(props) {
    const {navigation}=props;
    const [data, setData] = useState([]);

    const dispatch = useDispatch()
    const addItemToCart = item => dispatch({ type: "ADD_TO_CART", payload: item })

    useEffect(() => {
        ServiceApis.getService(res => {
            setData(res.data);
        }, err => {
            alert('fail',err);
        });
    }, []);

    const handleToggle = (index) => {
        data[index].toggle = !data[index].toggle;
        setData(Object.assign([], data));
        if (data[index].toggle == true){
            addItemToCart(data[index])
        }
    };
    const renderItem = ({item, index}) => {
        return (
            <>
                <TrustView flexDirection={'row'}
                           style={styles.container}>
                    <TrustTouchableOpacity style={{flex:1}}
                    onPress={()=>{navigation.navigate('DetailContainer',item)}}
                    >
                        <TrustView flexDirection={'row'}
                                   style={styles.content}>
                            <TrustImage
                                style={styles.image}
                                localSource={Images.im_xrp}
                            />
                            <TrustText
                                style={{marginHorizontal:Dimens.scale(10)}}
                                text={item.coin}
                            />
                        </TrustView>
                    </TrustTouchableOpacity>
                    <ToggleSwitch
                        isOn={item.toggle}
                        onColor={Colors.secondBackground}
                        offColor="#dcdcdc"
                        size="small"
                        onToggle={() => handleToggle(index)}
                    />
                </TrustView>
               <TrustLine/>
            </>
        );
    };
    return (
        <TrustFlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}

export default MoreContainer;
