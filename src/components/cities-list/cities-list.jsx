import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {city} = props;

  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
};

export default CitiesList;
