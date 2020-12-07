import React, {useState} from 'react';
import Images from '../common/Images';
import TrustFlatList from '../components/common/TrustFlatList';
import TrustImage from '../components/common/TrustImage';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import Dimens from '../common/Dimens';
import ToggleSwitch from 'toggle-switch-react-native';
import Colors from '../common/Colors';
import TrustTouchableOpacity from '../components/common/TrustTouchableOpacity';
import TrustLine from '../components/common/TrustLine';
import {styles} from './styles';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE, } from '../common/Constants';
import {useTheme} from '@react-navigation/native';
import {setCryptData} from '../redux/actions/CryptAction';
import {useDispatch} from 'react-redux';
import store from '../redux/store/store';


function MoreContainer(props) {
    const {colors} = useTheme();
    const {navigation, route} = props;
    const item = route.params;
    const [data, setData] = useState(item.routeData);
    const state = store.getState();

    const handleToggle = (index) => {
        data[index].toggle = !data[index].toggle;
        setData(Object.assign([], data));
        const {cryptData} = state.crypt;
        if (data[index].toggle !== false) {
            cryptData.push(data[index]);
            store.dispatch(setCryptData(cryptData));
        }
    };
    const renderItem = ({item, index}) => {
        return (
            <>
                <TrustView flexDirection={'row'}
                           style={styles.container}>
                    <TrustTouchableOpacity style={{flex: 1}}
                                           onPress={() => {
                                               navigation.navigate('Detail', item);
                                           }}
                    >
                        <TrustView flexDirection={'row'}
                                   style={styles.content}>
                            <TrustImage
                                style={styles.image}
                                localSource={Images.im_xrp}
                            />
                            <TrustText
                                style={{marginHorizontal: Dimens.scale(10), color: colors.textColor}}
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
                <TrustLine style={{borderColor: colors.lineBackground}}/>
            </>
        );
    };
    return (
        <TrustContainer
            nameScreen={'Home'}
            navigation={navigation}
            headerMode={HEADER_MODE.SEARCH}
            renderContentView={() => {
                return (
                    <TrustFlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                    />
                );
            }}
        />

    );
}

export default MoreContainer;
