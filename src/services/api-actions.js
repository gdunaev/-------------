import {ActionCreator} from "../store/action";
import {AuthorizationStatus} from "../const";
import {adaptToClient, adaptToServer} from "./data-adapter";

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const dataToClient = data.map((offer) => adaptToClient(offer));
      console.log(`11`, dataToClient);
      dispatch(ActionCreator.loadOffers(dataToClient));
    }
    )
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
