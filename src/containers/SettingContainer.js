import React, {} from 'react';
import {
    StyleSheet,
} from 'react-native';
import TrustView from '../components/common/TrustView';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';


function SettingContainer() {

    return (
      <TrustContainer
          headerMode={HEADER_MODE.HOME}
          renderContentView={()=>{
              return(
                  <TrustView>

                  </TrustView>
              )
          }}
      />
    );
}

export default SettingContainer;
