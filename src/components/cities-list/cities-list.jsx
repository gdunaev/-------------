import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
// import {offersPropTypes} from "../../prop-types-site";


const CitiesList = (props) => {
  const {city, onCityClick, activ} = props;

  const activClassName = activ ? `tabs__item--active` : ``;

  // console.log('22', city)
  const handleCityChange = (evt) => {
    // const {name, value} = evt.target.textContent;
    onCityClick(evt.target.textContent);
    // console.log(evt.target.parentElement)
  };


  //   let offersList = offers.slice();
  //  let offersLength = offersList.length;

  //   const onCityClick = (evt) => {
  //     //TEST
  //     console.log('111', evt.target.textContent)
  //     offersList = offers.filter((offer)=> offer.city.name === evt.target.textContent);
  //     offersLength = offersList.length;
  //     console.log('222', )
  //   };

  // style={{fontWeight: `400`}}

  return (
    <li className="locations__item" onClick={handleCityChange}>
      <Link className={`locations__item-link tabs__item ${activClassName}`} to="#" >
        <span>{city}</span>
      </Link>
    </li>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  activ: PropTypes.bool,
  onCityClick: PropTypes.func,
};

export default CitiesList;
