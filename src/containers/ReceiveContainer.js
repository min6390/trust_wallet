import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import TrustView from '../components/common/TrustView';
import {styles} from './styles';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import TrustText from '../components/common/TrustText';
import RoundButton from '../components/common/RoundButton';
import Images from '../common/Images';
import {useTheme} from '@react-navigation/native';
import Colors from '../common/Colors';
import Clipboard from '@react-native-community/clipboard';
import {Share} from 'react-native';


function ReceiveContainer(props) {
    const {navigation, route} = props;
    const {price} = route.params;
    const [qr,setQR] = useState( '9xfegFEGWEvhggh9i34lkgewgjwfwfawfwa645674j49ji59');
    const {colors} = useTheme();

    const onPressClipboard = () => {
        Clipboard.setString(qr);
    };

    const onPressShare = async () => {
        try {
            const result = await Share.share({
                message: qr,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <TrustContainer
            navigation={navigation}
            title={'Nhận ' + price}
            headerMode={HEADER_MODE.DETAIL}
            renderContentView={() => {
                return (
                    <TrustView style={styles.containQRSVG}>
                        <TrustView style={styles.containQR}>
                            <QRCode
                                value={qr}
                                size={200}
                                backgroundColor={'white'}
                            />
                            <TrustText
                                numberOfLines={2}
                                style={[styles.txtQR]}
                                text={qr}
                            />
                        </TrustView>
                        <TrustView style={styles.roundContain}>
                            <RoundButton
                                onPress={onPressClipboard}
                                style={{backgroundColor: Colors.thirdBackground}}
                                tintColor={true}
                                img={Images.im_coppy}
                                txt={'Sao chép'}
                            />
                            <RoundButton
                                style={{backgroundColor: colors.buttonRound}}
                                img={Images.im_tag}
                                txt={'Nhập số lượng'}
                            />
                            <RoundButton
                                onPress={onPressShare}
                                style={{backgroundColor: colors.buttonRound}}
                                img={Images.im_share}
                                txt={'Chia sẽ'}
                            />
                        </TrustView>
                    </TrustView>
                );
            }}
        />
    );
}

export default ReceiveContainer;
