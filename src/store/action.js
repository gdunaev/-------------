const ActionType = {
  CHANGE_CITY: `changeCity`,
  SELECT_OFFER: `selectOffer`,
  OFFERS_SORTING: `offersSorting`,
  LOAD_OFFERS: `loadOffers`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  // RESET: `reset`
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
  })
  // reset: () => ({
  //   type: ActionType.RESET,
  // })
};

export {ActionType, ActionCreator};
