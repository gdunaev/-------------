import { ActionCreator } from "../store/action";
import { AuthorizationStatus } from "../const";
import { adaptToClient, adaptCommentsToClient } from "./data-adapter";
import { ApiPaths, AppRoute } from "../const";

const fetchOffers = () => (dispatch, getState, api) => (
  api.get(ApiPaths.HOTELS)
    .then(({ data }) => {
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
    .then(() => {
    console.log('Успешно');
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    })
    .catch(() => {
      console.log('НЕ Успешно');
    })
);

// при открытии Favorites, если нет авторизации перекидывает на SignIn, и там после
// авторизации перекидывает на Главную.
const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(ApiPaths.LOGIN, { email, password })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.authorizedUser(email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN)))
);

const fetchOffer = (id) => (dispatch, _getState, api) => {
  api.get(`${ApiPaths.LOAD_OFFER}${id}`)
    .then(({ data }) => {
      const offer = adaptToClient(data);
      // console.log(`11`, offer.city.name);
      dispatch(ActionCreator.loadOffer(offer));

      //меняет город если id вдруг ввели в адресную строку
      dispatch(ActionCreator.changeCity(offer.city.name));

    }
    )
    .catch(() => dispatch(ActionCreator.loadFail(false)));
};

const fetchOtherOffers = (id) => (dispatch, _getState, api) => (
  api.get(ApiPaths.NEARBY_OFFERS.replace(`id`, id))
    .then(({ data }) => {
      const offers = data.map((offer) => adaptToClient(offer));
      dispatch(ActionCreator.loadOtherOffers(offers));

      //запоминаем id, при его изменении будем получать новые офферы поблизости
      dispatch(ActionCreator.setOtherOffersId(id));
    }
    ).catch()
);

const fetchCommentsOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiPaths.COMMENTS}${id}`)
    .then(({ data }) => {
      const comments = data.map((comment) => adaptCommentsToClient(comment));
      // const state = getState();
      // console.log(`11`, id);
      dispatch(ActionCreator.loadCommentsOffer(comments));

      //запоминаем id, при его изменении будем получать новые комментарии
      dispatch(ActionCreator.setCommentsId(id));
    }
    )
);

const commentsSend = (id, comment) => (dispatch, _getState, api) => (
  api.post(`${ApiPaths.COMMENTS}${id}`, comment)
    .then(({ data }) => {
      console.log('11', data)
      const comments = data.map((comment) => adaptCommentsToClient(comment));
      dispatch(ActionCreator.loadCommentsOffer(comments))
      dispatch(ActionCreator.setRating(0));
    })
    .catch(() => {
      console.log('222', )
    })
);

export { fetchOffers, checkAuth, login, fetchOffer, fetchCommentsOffer, fetchOtherOffers, commentsSend };
