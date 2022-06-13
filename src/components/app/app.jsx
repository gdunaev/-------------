import React from "react";
import {offersPropTypes} from "../../prop-types-site";
import Card from "../offer/offer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import {AppRoute} from "../../const";
import NotFoundScreen from "../not-found-screen/not-found-screen";

function App(props) {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.FAVORITES} render={() => <Favorites offers={offers}/>} />
        <Route exact path={AppRoute.OFFER}>
          <Card />
        </Route>
        <Route exact path={AppRoute.LOGIN} component={Login} />
        <Route exact path={AppRoute.MAIN}>
          <MainPage offers={offers} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.PropTypes = offersPropTypes;

export default App;
