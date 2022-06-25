
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
  {name: `Paris`,
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 11,
    }},
  {name: `Cologne`,
    location: {
      latitude: 45.5774872,
      longitude: 9.939068899999999,
      zoom: 13,
    }},
  {name: `Brussels`,
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 11,
    }},
  {name: `Amsterdam`,
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 11,
    }},
  {name: `Hamburg`,
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 11,
    }},
  {name: `Dusseldorf`,
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 11,
    }}
];

const HousingType = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`,
};

const DEFAULT_CITY = `Paris`;

export {AppRoute, getRating, cityMap, Cities, HousingType, DEFAULT_CITY};
