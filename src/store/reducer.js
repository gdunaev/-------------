import {offers} from "../mocks/offers-mock";
import {ActionType} from '../action';

const initialState = {
  city: offers[0].city,
  offers: offers.filter((currentOffer) => currentOffer.city.name === offers[0].city.name),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state,
        offers: action.payload
      };
    case ActionType.RESET:
        return {
          ...initialState
        };
  }

  return state;
};

// console.log('11', initialState)

export {reducer};
