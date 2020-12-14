import React, {useState} from 'react';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import {StyleSheet} from 'react-native';
import Dimens from '../../common/Dimens';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {useTheme} from '@react-navigation/native';
import TopTabNavigator from '../common/TopTabNavigator';

const HeaderTest = (props) => {
    const {colors}=useTheme();
    const [message, setMessage] = useState('Home');
    const {
        navigation, process,  duaScreen,
        firstName,secondName,routeData,firstScreen,secondScreen
    } = props;
    const onPress = () => {
        navigation?.navigate('More',{routeData});
    };
    props.parentCallBack(message);
    const callbackFunction = (childData) => {
        setMessage(childData);
    };
    return (
        <TrustView
            flexDirection={'row'}
            style={[styles.container,{backgroundColor:colors.primary}]}
            navigation={navigation}>
            {message ==='Home' ? <TrustTouchableOpacity
            >
                <TrustImage
                    tintColor={'white'}
                    style={styles.image}
                    localSource={Images.im_noti}
                />
            </TrustTouchableOpacity> : <TrustView/>}
            <TopTabNavigator
                firstScreen={firstScreen}
                secondScreen={secondScreen}
                parentCallBack={callbackFunction}
                firstName={firstName}
                secondName={secondName}
                duaScreen={duaScreen}
                process={process}
                navigation={navigation}
            />
            {message ==='Home'? <TrustTouchableOpacity
                onPress={onPress}
            >
                <TrustImage
                    tintColor={'white'}
                    style={styles.image}
                    localSource={Images.im_control}
                />
            </TrustTouchableOpacity> : <TrustView/>}
        </TrustView>
    )
        ;
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Dimens.scale(5),
        height: Dimens.scale(64),
    },
    image: {
        height: Dimens.scale(24),
        width: Dimens.scale(24),

    },
});
export default HeaderTest;
