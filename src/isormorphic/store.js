import { History } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { rootReducer } from '../modules';

export const configureStore = (initialState, history) => {
    const middleWare = applyMiddleware(routerMiddleware(history));
    const store = createStore(connectRouter(history)(rootReducer), initialState, middleWare);
    return {
        history,
        store,
    }
};
