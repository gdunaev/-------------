import {SortingType} from "./const";

let typeLowHigh = true;

const comparePrice = (elementA, elementB) => {
  const rankA = +elementA.price;
  const rankB = +elementB.price;
  return typeLowHigh ? rankA - rankB : rankB - rankA;
};

const compareRated = (elementA, elementB) => {
  const rankA = elementA.rating;
  const rankB = elementB.rating;
  return rankB - rankA;
};

const getOffersSorting = (sortingType, offers) => {
  switch (sortingType) {
    case SortingType.POPULAR:
      return offers.slice();
    case SortingType.LOW_TO_HIGH:
      typeLowHigh = true;
      return offers.slice().sort(comparePrice);
    case SortingType.HIGH_TO_LOW:
      typeLowHigh = false;
      return offers.slice().sort(comparePrice);
    case SortingType.TOP_RATED:
      return offers.slice().sort(compareRated);
  }
  return offers;
};

export {getOffersSorting};
