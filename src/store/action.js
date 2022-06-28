const ActionType = {
  CHANGE_CITY: `changeCity`,
  SELECT_OFFER: `selectOffer`,
  OFFERS_SORTING: `offersSorting`,
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
  // reset: () => ({
  //   type: ActionType.RESET,
  // })
};

export {ActionType, ActionCreator};
