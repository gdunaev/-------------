import React from "react";
import {offersPropTypes} from "../../prop-types-site";
import Offer from "../offer/offer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import FavoritesPage from "../favorites-page/favorites-page";
import {AppRoute} from "../../const";
import NotFoundPage from "../not-found-page/not-found-page";
import LoginPage from "../login-page/login-page";


function App(props) {
  const {offers} = props;
  // console.log(offers[0])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.FAVORITES} render={() => <FavoritesPage offers={offers}/>} />
        <Route exact path={AppRoute.OFFER} render={() => <Offer/>} />
        <Route exact path={AppRoute.LOGIN} render={() => <LoginPage/>} />
        <Route exact path={AppRoute.MAIN}>
          <MainPage offers={offers} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: offersPropTypes,
};

export default App;


