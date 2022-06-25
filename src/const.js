
const PercentRating = 20;

const AppRoute = {
  MAIN: `/`,
  OFFER: `/offer/:id`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
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
  {name: `Paris`},
  {name: `Cologne`},
  {name: `Brussels`},
  {name: `Amsterdam`},
  {name: `Hamburg`},
  {name: `Dusseldorf`},
];

const HousingType = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`,
};

const DEFAULT_CITY = `Paris`;

export {AppRoute, getRating, cityMap, Cities, HousingType, DEFAULT_CITY};
