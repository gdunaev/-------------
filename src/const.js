
const PercentRating = 20;

const AppRoute = {
  MAIN: `/`,
  OFFER: `/offer/:id`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  NOT_FOUND_PAGE: `/not_found`
};

const getRating = (rating) => {
  return {
    width: `${Math.round(rating) * PercentRating}%`,
  };
};

const cityMap = {
  location: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 11,
  },
  name: `Amsterdam`
};

const Cities = [
  {name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    }},
  {name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    }},
  {name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    }},
  {name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    }},
  {name: `Hamburg`,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    }},
  {name: `Dusseldorf`,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    }}
];

const HousingType = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`,
};

const SortingType = {
  POPULAR: `popular`,
  LOW_TO_HIGH: `lowToHigh`,
  HIGH_TO_LOW: `highToLow`,
  TOP_RATED: `topRated`,
};

const DEFAULT_CITY = `Paris`;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const ApiPaths = {
  HOTELS: `/hotels`,
  LOGIN: `/login`
};


const QUANTITY_OTHER_PLACES = 3;

const QUANTITY_IMAGES = 6;

const TEXT_SIGN_IN = `Sign In`;

export {AppRoute, getRating, cityMap, Cities, HousingType, DEFAULT_CITY, SortingType, AuthorizationStatus, TEXT_SIGN_IN, ApiPaths, QUANTITY_OTHER_PLACES, QUANTITY_IMAGES};
