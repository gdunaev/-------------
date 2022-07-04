
import React from "react";
import {offersPropTypes} from "../../prop-types-site";
import {Link} from "react-router-dom";
import Favorite from "../favorite/favorite";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const FavoritesList = (props) => {

  const {currentCity, currentOffers} = props;
  // console.log('22', currentCity, currentOffers)
  return (
    <>
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>{currentCity}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">

          {currentOffers.map((offer) => (
            <Favorite key={offer.id} offer={offer} />
          ))}

        </div>
      </li>
    </>
  );
};


FavoritesList.propTypes = {
  currentOffers: offersPropTypes,
  currentCity: PropTypes.string.isRequired,
};


export default FavoritesList;
