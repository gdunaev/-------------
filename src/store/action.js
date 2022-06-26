const ActionType = {
  CHANGE_CITY: `changeCity`,
  SELECT_OFFER: `selectOffer`,
  RESET: `reset`
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
  reset: () => ({
    type: ActionType.RESET,
  })
};

export {ActionType, ActionCreator};
