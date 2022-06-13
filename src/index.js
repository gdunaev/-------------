import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

// const QUANTITY_OFFERS = 3;

ReactDOM.render(
    <App
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
