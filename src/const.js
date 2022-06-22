
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
  {PARIS: `Paris`, id: 1},
  {COLOGNE: `Cologne`, id: 2},
  {BRUSSELS: `Brussels`, id: 3},
  {AMSTERDAM: `Amsterdam`, id: 4},
  {HAMBURG: `Hamburg`, id: 5},
  {DUSSELDORF: `Dusseldorf`, id: 6},
];

const HousingType = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`,
};

export {AppRoute, getRating, cityMap, Cities, HousingType};
