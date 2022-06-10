import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main/main';

const QUANTITY_OFFERS = 6;

ReactDOM.render(
    <App
      quantityOffers = {QUANTITY_OFFERS}
    />,
    document.querySelector(`#root`)
);

console.log('11')