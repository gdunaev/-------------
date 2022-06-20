
import React from "react";
import {offersPropTypes} from "../../prop-types-site";
import {Link} from "react-router-dom";
import Favorite from "../favorite/favorite";
import PropTypes from 'prop-types';


const FavoritesList = (props) => {

  const {city, offers} = props;

  return (
    <>
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>{city}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">

          {offers.map((offer) => (
            <Favorite key={offer.id} offer={offer} />
          ))}

        </div>
      </li>
    </>
  );
};


FavoritesList.propTypes = {
  offers: offersPropTypes,
  city: PropTypes.string.isRequired,
};


export default FavoritesList;
