
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
  {name: `Paris`, id: 1},
  {name: `Cologne`, id: 2},
  {name: `Brussels`, id: 3},
  {name: `Amsterdam`, id: 4},
  {name: `Hamburg`, id: 5},
  {name: `Dusseldorf`, id: 6},
];

const HousingType = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`,
};

export {AppRoute, getRating, cityMap, Cities, HousingType};
