import React, {} from 'react';
import {} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import {styles} from '../../containers/styles';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import Dimens from '../../common/Dimens';
import TrustText from '../common/TrustText';
import Colors from '../../common/Colors';
import {useTheme} from '@react-navigation/native';

const ListCoinItem = (props) => {
    const {navigation,item,index}=props
    const {colors}=useTheme()
    return (
            <TrustTouchableOpacity
                style={[styles.content, {justifyContent: 'space-between'}]}
                onPress={() => navigation?.navigate('Detail', item.name)}
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
                    text={item.symbol}/>
            </TrustTouchableOpacity>
    );
};
export default ListCoinItem
