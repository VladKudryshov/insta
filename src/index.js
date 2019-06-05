import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from "./components/MainComponent";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import asd from './reducers'

const store = createStore(asd)


ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById('root')
);
