import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

import appSaga from './sagas/sagas';
import {composeWithDevTools} from "redux-devtools-extension";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(... [sagaMiddleware]),
        // other store enhancers if any
    ));

    sagaMiddleware.run(appSaga);

    return store;
};

export default configureStore;
