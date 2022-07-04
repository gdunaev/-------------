import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reducer} from '../src/store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth} from './services/api-actions';
import {redirect} from './store/middlewares/redirect';


// создает api для связи с сервером посредством axios
const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

// создает хранилище
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

// делает авторизацию
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);


//ДЛЯ ТЕСТИРОВАНИЯ! 
//1. Избранных офферов - добавить  - !offer.isFavorite вместо - offer.isFavorite в getFavorites.
//2. вопрос по авторизации, что это за хрень такая?