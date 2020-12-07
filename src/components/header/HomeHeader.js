import React from 'react';
import TrustView from '../common/TrustView';
import TopTabNavigator from '../common/TopTabNavigator';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import {StyleSheet} from 'react-native';
import Dimens from '../../common/Dimens';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {useTheme} from '@react-navigation/native';

const HomeHeader = (props) => {
    const {colors}=useTheme();
    const {
        navigation, process, rightIcon, leftIcon,
        firstScreen, secondScreen, thirdScreen, duaScreen,
        firstName,secondName,routeData
    } = props;
    const onPress = () => {
        navigation?.navigate('More',{routeData});
    };
    return (
        <TrustView
            flexDirection={'row'}
            style={[styles.container,{backgroundColor:colors.primary}]}
            navigation={navigation}>
            {leftIcon ? <TrustTouchableOpacity
            >
                <TrustImage
                    tintColor={'white'}
                    style={styles.image}
                    localSource={Images.im_noti}
                />
            </TrustTouchableOpacity> : <TrustView/>}
            <TopTabNavigator
                firstName={firstName}
                secondName={secondName}
                firstScreen={firstScreen}
                secondScreen={secondScreen}
                thirdScreen={thirdScreen}
                duaScreen={duaScreen}
                process={process}
                navigation={navigation}
            />
            {rightIcon ? <TrustTouchableOpacity
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
export default HomeHeader;
