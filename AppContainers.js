import React, {} from 'react';
import Route from './src/route/Route';
import TrustView from './src/components/common/TrustView';
import AppLoading from './src/components/common/AppLoading';
import { useSelector} from 'react-redux';

function AppContainer() {
    // const {loading} = useSelector(state => state.app);
    return (
            <TrustView style={{flex: 1}}>
                <Route/>
             {/*//   {loading &&  <AppLoading/>}*/}
            </TrustView>
    );
}

export default AppContainer;
