const ActionType = {
  CHANGE_CITY: `changeCity`,
  FILL_OFFERS_LIST: `fillOffersList`,
  RESET: `reset`
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  })
};

export {ActionType, ActionCreator};
