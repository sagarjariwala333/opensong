import {configureStore} from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../redux/rootReducer';
import rootSaga from '../redux/rootSaga';

export default function configureMainStore() {
    const sagaMiddleware = createSagaMiddleware();
    
    const store = configureStore({
        reducer:rootReducer,
        middleware:[sagaMiddleware,logger]
    });

    sagaMiddleware.run(rootSaga);

    return {store};
}