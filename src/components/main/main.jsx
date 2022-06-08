import React from "react";
import PropTypes from 'prop-types';
import PlaceCard from "../place-card/place-card";
import {nanoid} from "nanoid";

const Main = (props) => {

  const {quantityOffers} = props;

  const arr = new Array(quantityOffers).fill(1);

  return (
    arr.map(() => (<PlaceCard key={nanoid()} />))
  );
};


Main.propTypes = {
  quantityOffers: PropTypes.number.isRequired,
};


export default Main;
