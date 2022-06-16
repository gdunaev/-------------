
const PercentRating = 20;

const AppRoute = {
  MAIN: `/`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
};

const getRating = (rating) => {
  return {
    width: `${Math.round(rating) * PercentRating}%`,
  };
};

export {AppRoute, getRating};
