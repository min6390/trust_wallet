import React, {} from 'react';
import {Provider, } from 'react-redux';
import store from './src/redux/store/store';
import AppContainer from './AppContainers';

function App() {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
}

export default App;
