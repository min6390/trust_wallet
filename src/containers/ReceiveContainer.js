import React, {} from 'react';
import QRCode from 'react-native-qrcode-svg';
import TrustView from '../components/common/TrustView';
import {styles} from './styles';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';

function ReceiveContainer(props) {
  const {navigation,route}=props;
  const {price}=route.params;
  return (
    <TrustContainer
      navigation={navigation}
      title={price}
      headerMode={HEADER_MODE.DETAIL}
      renderContentView={() => {
        return (
          <TrustView style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <TrustView style={styles.containQR}>
              <QRCode
                value="http://awesome.link.qr"
                size={200}
                backgroundColor={'white'}
              />
            </TrustView>
          </TrustView>
        );
      }}
    />
  );
}

export default ReceiveContainer;
