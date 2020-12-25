import React, {} from 'react';
import {Animated} from 'react-native';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {styles} from '../../containers/styles';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import Dimens from '../../common/Dimens';
import TrustText from '../common/TrustText';
import Colors from '../../common/Colors';
import {useTheme} from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import FontSizes from '../../common/FontSizes';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';

const ListCoinItem = (props) => {
    const {navigation, item,hide} = props;
    const {colors} = useTheme();
    const RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [0.7, 1],
            extrapolateLeft: 'clamp',
        });
        return (
            <Animated.View style={{backgroundColor: '#a9a9a9', justifyContent: 'center', transform: [{scale}]}}>
                <TrustText
                    style={{
                        color: 'white',
                        paddingHorizontal: 10,
                        fontSize: FontSizes.size25,
                    }}
                    text={'XÓA'}>
                </TrustText>
            </Animated.View>
        );
    };

    return (
        <Swipeable
            renderRightActions={RightActions}>
            <TrustTouchableOpacity
                style={[styles.content, {justifyContent: 'space-between'}]}
                onPress={() => navigation?.navigate(NAVIGATION_CONSTANTS.DETAIL, item.name)}
            >
                <TrustView style={styles.content}>
                    <TrustImage
                        style={styles.image}
                        localSource={Images.im_xrp}
                    />
                    <TrustView style={{marginHorizontal: Dimens.scale(10)}}>
                        <TrustText
                            style={{color: colors.textColor}}
                            text={item.name}
                        />
                        <TrustView style={{flexDirection: 'row'}}>
                            <TrustText
                                style={{color: '#8C8FBF', marginRight: Dimens.scale(10)}}
                                text={item.price + ' $'}
                            />
                            <TrustText
                                style={item.rate < 0 ? {
                                    color: 'red',
                                } : {color: Colors.secondBackground}}
                                text={item.rate < 0 ? parseFloat(item.rate).toFixed(6) + ' %'
                                    : '+' + parseFloat(item.rate).toFixed(6) + ' %'}
                            />
                        </TrustView>
                    </TrustView>
                </TrustView>
                <TrustText
                    style={{color: colors.textColor}}
                    text={hide?'******':'0 '+item.symbol}/>
            </TrustTouchableOpacity>
        </Swipeable>
    );
};
export default ListCoinItem;
