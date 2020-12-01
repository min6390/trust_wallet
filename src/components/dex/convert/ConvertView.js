import React, {} from 'react';
import {StyleSheet} from 'react-native';
import TrustView from '../../common/TrustView';
import TrustText from '../../common/TrustText';
import TrustTextInput from '../../common/TrustTextInput';
import Dimens from '../../../common/Dimens';
import FontSizes from '../../../common/FontSizes';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import TrustImage from '../../common/TrustImage';
import Images from '../../../common/Images';
import Colors from '../../../common/Colors';


function ConvertView() {
    return (
        <TrustView style={styles.container}>
            <TrustView style={{padding: Dimens.scale(10)}}>
                <TrustText
                    text={'Bạn trả'}
                />
                <TrustTextInput
                    keyboardType={'number-pad'}
                    style={styles.txtInput}
                    placeholder={'0'}
                />
                <TrustView flexDirection={'row'}>
                    <TrustText text={'Số dư : '}/>
                    <TrustText text={'000000000' + ' VND'}/>
                </TrustView>
            </TrustView>
            <TrustView style={{borderWidth: Dimens.scale(1 / 3)}}/>
            <TrustTouchableOpacity
                activeOpacity={10}
                style={styles.btnSwap}>
                <TrustImage
                    style={{height: Dimens.scale(24), width: Dimens.scale(24)}}
                    localSource={Images.im_swap}
                    tintColor={Colors.secondBackground}/>
            </TrustTouchableOpacity>
            <TrustView style={{padding: Dimens.scale(10)}}>
                <TrustText
                    text={'Bạn trả'}
                />
                <TrustTextInput
                    keyboardType={'number-pad'}
                    style={styles.txtInput}
                    placeholder={'0'}
                />
                <TrustView flexDirection={'row'}>
                    <TrustText text={'Số dư : '}/>
                    <TrustText text={'000000000' + ' VND'}/>
                </TrustView>
            </TrustView>
        </TrustView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: Dimens.scale(320),
        marginVertical: Dimens.scale(30),
        borderRadius: Dimens.scale(10),
        borderWidth: Dimens.scale(1 / 3),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    },
    txtView: {},
    txtInput: {
        fontSize: FontSizes.size35,
    },
    btnSwap: {
        height: Dimens.scale(40), width: Dimens.scale(40),
        borderRadius: Dimens.scale(30),
        borderWidth: Dimens.scale(1),
        borderColor: '#dcdcdc',
        position: 'absolute',
        top: Dimens.scale(80),
        left: Dimens.scale(250),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default ConvertView;
