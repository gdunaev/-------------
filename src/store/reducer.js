import {offers} from "../mocks/offers-mock";
import {ActionType} from './action';
import {DEFAULT_CITY} from "../const";

const initialState = {
  city: DEFAULT_CITY,
  offers: offers.filter((currentOffer) => currentOffer.city.name === DEFAULT_CITY),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      // console.log(`11`, offers.filter((currentOffer) => currentOffer.city.name === action.payload));
      return {
        ...state,
        offers: offers.filter((currentOffer) => currentOffer.city.name === action.payload),
        city: action.payload,
      };

    // case ActionType.FILL_OFFERS_LIST:
    //   return {
    //     ...state,
    //     offers: action.payload
    //   };
    case ActionType.RESET:
      return {
        ...initialState
      };
  }

  return state;
};


export {reducer};
