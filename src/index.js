import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const Store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>
    ,document.querySelector('.container')
);