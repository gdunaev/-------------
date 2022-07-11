import {ActionType} from './action';
import {DEFAULT_CITY} from "../const";
import {getOffersSorting} from "../utils";
import {SortingType, AuthorizationStatus} from "../const";

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  offersAll: [],
  activeOfferId: 0,
  offersSortingId: SortingType.POPULAR,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  emailUser: null,
  loadedOffer: {},
  isLoadedOffer: true,
  otherOffers: [],
  commentsOffer: [],
  currentId: 0,
};

// offers.filter((currentOffer) => currentOffer.city.name === DEFAULT_CITY)

const reducer = (state = initialState, action) => {
  // console.log(`00`, state.offers);
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      // console.log(`33`, state.offersAll.filter((currentOffer) => currentOffer.city.name === action.payload));
      return {
        ...state,
        offers: state.offersAll.filter((currentOffer) => currentOffer.city.name === action.payload),
        city: action.payload,
      };

    case ActionType.SELECT_OFFER:
      // console.log(`11`, action)
      return {
        ...state,
        activeOfferId: action.payload
      };
      case ActionType.CURRENT_ID:
        // console.log(`11`, action)
        return {
          ...state,
          currentId: action.payload
        };
    case ActionType.OFFERS_SORTING:
      // console.log(`11`, getOffersSorting(action.payload, state.offers))
      return {
        ...state,
        offersSortingId: action.payload,
        offers: getOffersSorting(action.payload, state.offers)
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offersAll: action.payload,
        isDataLoaded: true
      };
    case ActionType.LOAD_OTHER_OFFERS:
        return {
          ...state,
          otherOffers: action.payload,
          isLoadedOtherOffers: true
        };
    case ActionType.LOAD_COMMENTS_OFFER:
          return {
            ...state,
            commentsOffer: action.payload,
          };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        loadedOffer: action.payload,
        isLoadedOffer: true,
      };
    case ActionType.LOAD_FAIL:
        return {
          ...state,
          isLoadedOffer: action.payload,
        };
    case ActionType.REQUIRED_AUTHORIZATION:
      //  console.log('22', action.payload)
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.AUTHORIZED_USER:
      // console.log('11', action.payload)
      return {
        ...state,
        emailUser: action.payload,
      };

  }

  return state;
};


export {reducer};
