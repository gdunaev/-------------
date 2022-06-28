import {offers} from "../mocks/offers-mock";
import {ActionType} from './action';
import {DEFAULT_CITY} from "../const";
import {getOffersSorting} from "../utils";
import {SortingType} from "../const";

const initialState = {
  city: DEFAULT_CITY,
  offers: offers.filter((currentOffer) => currentOffer.city.name === DEFAULT_CITY),
  activeOfferId: 0,
  offersSortingId: SortingType.POPULAR,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      // console.log(`11`, );
      return {
        ...state,
        offers: offers.filter((currentOffer) => currentOffer.city.name === action.payload),
        city: action.payload,
      };

    case ActionType.SELECT_OFFER:
      // console.log(`11`, action)
      return {
        ...state,
        activeOfferId: action.payload
      };
    case ActionType.OFFERS_SORTING:
      // console.log(`11`, getOffersSorting(action.payload, state.offers))
      return {
        ...state,
        offersSortingId: action.payload,
        offers: getOffersSorting(action.payload, state.offers)
      };
    // case ActionType.RESET:
    //   return {
    //     ...initialState
    //   };

  }

  return state;
};


export {reducer};
