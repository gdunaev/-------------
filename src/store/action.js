const ActionType = {
  CHANGE_CITY: `changeCity`,
  SELECT_OFFER: `selectOffer`,
  OFFERS_SORTING: `offersSorting`,
  LOAD_OFFERS: `loadOffers`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
  AUTHORIZED_USER: `authorizedUser`,
  LOAD_OFFER: `loadOffer`,
  LOAD_OTHER_OFFERS: `loadOtherOffers`,
  LOAD_FAIL: `loadFail`,
};

// возвращает объект с функциями создающими объекты для изменения
const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  selectOffer: (offer) => ({
    type: ActionType.SELECT_OFFER,
    payload: offer,
  }),
  offersSorting: (id) => ({
    type: ActionType.OFFERS_SORTING,
    payload: id,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  authorizedUser: (status) => ({
    type: ActionType.AUTHORIZED_USER,
    payload: status,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadFail: (status) => ({
    type: ActionType.LOAD_FAIL,
    payload: status,
  }),
  loadOtherOffers: (offers) => ({
    type: ActionType.LOAD_OTHER_OFFERS,
    payload: offers,
  })
};

export {ActionType, ActionCreator};
