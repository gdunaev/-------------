import {ActionCreator} from "../store/action";
import {AuthorizationStatus} from "../const";
import {adaptToClient} from "./data-adapter";
import {ApiPaths, AppRoute} from "../const";

const fetchOffers = () => (dispatch, getState, api) => (
  api.get(ApiPaths.HOTELS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptToClient(offer));
      const state = getState();
      // console.log(`11`, offers);
      dispatch(ActionCreator.loadOffers(offers));
      dispatch(ActionCreator.changeCity(state.city));
      // console.log(`44`, state.offers);
    }
    )
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

// при открытии Favorites, если нет авторизации перекидывает на SignIn, и там после
// авторизации перекидывает на Главную.
const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiPaths.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.authorizedUser(email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN)))
);

const fetchOffer = (id) => (dispatch, _getState, api) => {

  // const test = ;
  api.get(`${ApiPaths.LOAD_OFFER}${id}`)
    .then(({data}) => {
      const offer = adaptToClient(data);
      // const state = getState();
      // console.log(`11`, offer);
      dispatch(ActionCreator.loadOffer(offer));
      // dispatch(ActionCreator.changeCity(state.city));
      // console.log(`44`, state.offers);
    }
    )
    .catch(() => dispatch(ActionCreator.loadFail(false)));

};
// console.log(`00`, id)
const fetchOtherOffers = (id) => (dispatch, getState, api) => (
  api.get(ApiPaths.NEARBY_OFFERS.replace(`id`, id))
      .then(({data}) => {
        const offers = data.map((offer) => adaptToClient(offer));

        // console.log(`333`, offers);
        dispatch(ActionCreator.loadOtherOffers(offers));
        // console.log(`44`, state.offers);
      }
      ).catch()
);


const fetchComments = () => (dispatch, getState, api) => (
  api.get(ApiPaths.HOTELS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptToClient(offer));
      const state = getState();
      // console.log(`11`, offers);
      dispatch(ActionCreator.loadOffers(offers));
      // dispatch(ActionCreator.changeCity(state.city));
      // console.log(`44`, state.offers);
    }
    )
);
export {fetchOffers, checkAuth, login, fetchOffer, fetchComments, fetchOtherOffers};
