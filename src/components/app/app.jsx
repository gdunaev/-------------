import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import {AppRoute} from "../../const";
import NotFoundScreen from "../not-found-screen/not-found-screen";

function App(props) {
  const {quantityOffers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.FAVORITES} render={() => <Favorites />} />
        <Route exact path={AppRoute.OFFER}>
          <Card />
        </Route>
        <Route exact path={AppRoute.LOGIN} component={Login} />
        <Route exact path={AppRoute.MAIN}>
          <MainPage quantityOffers={quantityOffers} />
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
