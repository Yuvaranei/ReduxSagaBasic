import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './RootReducer';
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//npm i redux react-redux redux-saga -S
//npm i node-sass -D