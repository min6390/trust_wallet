import React, {} from 'react';
import Route from './src/route/Route';
import TrustView from './src/components/common/TrustView';

function App() {
    return (
        <TrustView style={{flex:1}}>
            <Route/>
        </TrustView>
    );
}

export default App;
