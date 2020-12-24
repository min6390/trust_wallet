import React, {useEffect, useState} from 'react';
import {
  Linking,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {BackHandler, } from 'react-native';
import {CameraKitCameraScreen} from 'react-native-camera-kit';
import TrustView from './TrustView';
import {NAVIGATION_CONSTANTS} from '../../common/Constants';

const ScanQR = (props) => {
  const {navigation} = props;
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
      // setQrvalue('');
      setOpneScanner(true);
    }
  };
  useEffect(() => {
    const backAction = () => {
      navigation?.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const onBarcodeScan = (qrvalue) => {
    // Called after te successful scanning of ScanQR/Barcode
    if (qrvalue.includes('https://') || qrvalue.includes('http://')) {
      Linking.openURL(qrvalue);
    } else {
      navigation?.navigate(NAVIGATION_CONSTANTS.SEND_COIN, {qrvalue});
    }
    setQrvalue(qrvalue);
    setOpneScanner(false);
  };

  return (
    opneScanner ? (
      <TrustView style={{flex: 1}}>
        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={'blue'}
          frameColor={'yellow'}
          colorForScannerFrame={'black'}
          onReadCode={(event) =>
            onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </TrustView>
    ) : null
  );
  {/* ) : <TouchableHighlight*/
  }
  {/*//     onPress={onOpneScanner}*/
  }
  {/*// >*/
  }
  {/*//     <TrustImage*/
  }
  {/*//         style={{height: 24, width: 25}}*/
  }
  {/*//         localSource={Images.im_scan}*/
  }
  {/*//     />*/
  }
  {/*// </TouchableHighlight>}*/
  }

  {/*/!*{qrvalue.includes('https://') ||*!/*/
  }
  {/*/!*qrvalue.includes('http://') ||*!/*/
  }
  {/*/!*qrvalue.includes('geo:') ? (*!/*/
  }
  {/*/!*    <TouchableHighlight onPress={onOpenlink}>*!/*/
  }
  {/*/!*        <Text style={styles.textLinkStyle}>*!/*/
  }
  {/*/!*            {*!/*/
  }
  {/*/!*                qrvalue.includes('geo:') ?*!/*/
  }
  {/*/!*                    'Open in Map' : 'Open Link'*!/*/
  }
  {/*/!*            }*!/*/
  }
  {/*/!*        </Text>*!/*/
  }
  {/*/!*    </TouchableHighlight>*!/*/
  }


};

export default ScanQR;
