import React from "react";
import PropTypes from 'prop-types';
import PlaceCard from "../place-card/place-card";
import {nanoid} from "nanoid";

const Card = (props) => {

  const {quantityOffers} = props;

  const arr = new Array(quantityOffers).fill(1);

  return (
    arr.map(() => (<PlaceCard key={nanoid()} />))
  );
};


Card.propTypes = {
  quantityOffers: PropTypes.number.isRequired,
};


export default Card;
