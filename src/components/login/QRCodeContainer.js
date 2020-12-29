import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {Share} from 'react-native';
import {HEADER_MODE} from '../../common/Constants';
import TrustContainer from '../common/TrustContainer';
import TrustView from '../common/TrustView';
import TrustText from '../common/TrustText';
import {styles}from './styles'

function QRCodeContainer(props) {
    const {navigation,route } = props;
    const item = route.params;
    const [qr,setQR] = useState( item);

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
            title={'QR COde'}
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
                    </TrustView>
                );
            }}
        />
    );
}

export default QRCodeContainer;
