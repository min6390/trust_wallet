// import React in our code
import React, {useEffect, useState} from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    View,
    Linking,
    PermissionsAndroid,
    Platform,
    StyleSheet,
} from 'react-native';

// import CameraKitCameraScreen
import {CameraKitCameraScreen} from 'react-native-camera-kit';
import TrustImage from './TrustImage';
import Images from '../../common/Images';

const ScanQR = () => {
    const [qrvalue, setQrvalue] = useState('');
    const [opneScanner, setOpneScanner] = useState(false);


    useEffect(() => {
        onOpneScanner();
    }, []);

    const onOpneScanner = () => {
        // To Start Scanning
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'Camera Permission',
                            message: 'App needs permission for camera access',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        // If CAMERA Permission is granted
                        setQrvalue('');
                        setOpneScanner(true);
                    } else {
                        alert('CAMERA permission denied');
                    }
                } catch (err) {
                    alert('Camera permission err', err);
                    console.warn(err);
                }
            }

            // Calling the camera permission function
            requestCameraPermission();
        } else {
            setQrvalue('');
            setOpneScanner(true);
        }
    };

    const onBarcodeScan = (qrvalue) => {
        // Called after te successful scanning of ScanQR/Barcode
        Linking.openURL(qrvalue);
      //  setQrvalue(qrvalue);
        setOpneScanner(false);
    };

    const onOpenlink = () => {
        // If scanned then function to open URL in Browser
        Linking.openURL(qrvalue);
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            {opneScanner ? (
                <View style={{flex: 1}}>
                    <CameraKitCameraScreen
                        showFrame={true}
                        // Show/hide scan frame
                        scanBarcode={true}
                        // Can restrict for the QR Code only
                        laserColor={'blue'}
                        // Color can be of your choice
                        frameColor={'yellow'}
                        // If frame is visible then frame color
                        colorForScannerFrame={'black'}
                        // Scanner Frame color
                        onReadCode={(event) =>
                            onBarcodeScan(event.nativeEvent.codeStringValue)
                        }
                    />
                </View>
            ) : null}
            {/* ) : <TouchableHighlight*/}
            {/*//     onPress={onOpneScanner}*/}
            {/*// >*/}
            {/*//     <TrustImage*/}
            {/*//         style={{height: 24, width: 25}}*/}
            {/*//         localSource={Images.im_scan}*/}
            {/*//     />*/}
            {/*// </TouchableHighlight>}*/}

            {/*/!*{qrvalue.includes('https://') ||*!/*/}
            {/*/!*qrvalue.includes('http://') ||*!/*/}
            {/*/!*qrvalue.includes('geo:') ? (*!/*/}
            {/*/!*    <TouchableHighlight onPress={onOpenlink}>*!/*/}
            {/*/!*        <Text style={styles.textLinkStyle}>*!/*/}
            {/*/!*            {*!/*/}
            {/*/!*                qrvalue.includes('geo:') ?*!/*/}
            {/*/!*                    'Open in Map' : 'Open Link'*!/*/}
            {/*/!*            }*!/*/}
            {/*/!*        </Text>*!/*/}
            {/*/!*    </TouchableHighlight>*!/*/}


        </SafeAreaView>
    );
};

export default ScanQR;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        marginTop: 16,
    },
    buttonStyle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
        padding: 5,
        minWidth: 250,
    },
    buttonTextStyle: {
        padding: 5,
        color: 'white',
        textAlign: 'center',
    },
    textLinkStyle: {
        color: 'blue',
        paddingVertical: 20,
    },
});
