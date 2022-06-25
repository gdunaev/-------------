const ActionType = {
  CHANGE_CITY: `changeCity`,
  FILL_OFFERS_LIST: `fillOffersList`,
  RESET: `reset`
};

// возвращает объект с функциями создающими объекты для изменения
const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  reset: () => ({
    type: ActionType.RESET,
  })
};

export {ActionType, ActionCreator};
