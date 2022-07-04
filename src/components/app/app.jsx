import React from "react";
import Offer from "../offer/offer";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import FavoritesPage from "../favorites-page/favorites-page";
import {AppRoute} from "../../const";
import NotFoundPage from "../not-found-page/not-found-page";
import LoginPage from "../login-page/login-page";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";


const App = () => {
  // const {offers} = props;
  // console.log(offers[0])
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route exact path={AppRoute.OFFER} render={() => <Offer/>} />
        <Route exact path={AppRoute.LOGIN} render={() => <LoginPage/>} />
        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

// App.propTypes = {
//   offers: offersPropTypes,
// };
// <Route exact path={AppRoute.FAVORITES} render={() => <FavoritesPage/>} />

export default App;


