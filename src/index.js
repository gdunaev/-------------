import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const QUANTITY_OFFERS = 3;
// console.log('11', QUANTITY_OFFERS)
ReactDOM.render(
    <App
      quantityOffers = {QUANTITY_OFFERS}
    />,
    document.querySelector(`#root`)
);
