import {ActionCreator} from "../store/action";
import {AuthorizationStatus} from "../const";
import {adaptToClient} from "./data-adapter";
import {ApiPaths} from "../const";

const fetchQuestionList = () => (dispatch, getState, api) => (
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

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiPaths.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export {fetchQuestionList, checkAuth, login};
