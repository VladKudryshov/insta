import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

import appSaga from './sagas/sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares),
    );

    sagaMiddleware.run(appSaga);

    return store;
};

export default configureStore;
