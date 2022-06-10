import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
// import Favorites from '../favorites/favorites';
// import Login from '../login/login';
// import Offer from '../offer/offer';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(props) {
  const {quantityOffers} = props;
  // console.log('11')
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/card">
        <Card />
      </Route>
      <Route exact path="/">
        <MainPage quantityOffers = {quantityOffers}/>
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

App.propTypes = {
  quantityOffers: PropTypes.number.isRequired,
};

export default App;