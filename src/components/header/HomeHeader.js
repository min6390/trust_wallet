import React from 'react';
import TrustView from '../common/TrustView';
import TopTabNavigator from '../common/TopTabNavigator';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import {StyleSheet} from 'react-native';
import Dimens from '../../common/Dimens';
import Colors from '../../common/Colors';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';

const HomeHeader = (props) => {
    const {navigation, process, rightIcon, leftIcon} = props;

    const onPress = () => {
        navigation?.navigate('MoreContainer');
    };
    return (
        <TrustView
            flexDirection={'row'}
            style={styles.container}
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
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.secondBackground,
        padding: Dimens.scale(5),
        height: Dimens.scale(64),
    },
    image: {
        height: Dimens.scale(24),
        width: Dimens.scale(24),

    },
});
export default HomeHeader;
