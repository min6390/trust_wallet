import React, {useEffect, useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {HEADER_MODE} from '../common/Constants';
import TrustContainer from '../components/common/TrustContainer';
import TrustView from '../components/common/TrustView';
import TrustText from '../components/common/TrustText';
import {styles} from '../components/login/styles';
import ButtonAttention from '../components/login/ButtonAttention';

function QRCodeContainer(props) {
    const {navigation, route} = props;
    const [qr, setQR] = useState();
    const items = route.params;

    useEffect(() => {
        let index='';
        items.forEach((item) => {index += item.title + ' ' });
        setQR(index.trim())
    }, []);

    return (
        <TrustContainer
            navigation={navigation}
            title={'QR Code'}
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
                                text={'Mã QR này chứa cụm từ khôi phục'}
                            />
                        </TrustView>
                        <ButtonAttention/>
                    </TrustView>
                );
            }}
        />
    );
}

export default QRCodeContainer;
