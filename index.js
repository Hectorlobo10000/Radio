import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);

const AppContainer = () =>
    <Provider store={store}>
        <App/>
    </Provider>

AppRegistry.registerComponent('Radio', () => AppContainer);
