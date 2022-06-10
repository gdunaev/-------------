import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Main from '../main/main';
// import Favorites from '../favorites/favorites';
// import Login from '../login/login';
// import Offer from '../offer/offer';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(props) {
  const {quantityOffers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Card quantityOffers={quantityOffers} />
        </Route>
        {/* <Route exact path="/main" component={Main}>
          <Main />
        </Route>
        <Route exact path="/favorites" component={Favorites}>
          <Favorites />
        </Route> */}
        {/* <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/offer">
          <Offer />
        </Route> */}
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
