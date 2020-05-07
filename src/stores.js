
import { createBrowserHistory } from "history";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter } from "connected-react-router";
import rootReducers from "./reducers";
import rootSagas from "./sagas";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

if (devMode) {
    middleware.push(logger)
}

export const history = createBrowserHistory()

export default () => {
    const store = configureStore({
        reducer: connectRouter(history)({ ...rootReducers, router: connectRouter(history) }),
        middleware,
    })
    sagaMiddleware.run(rootSagas)
    return { store, history }
}