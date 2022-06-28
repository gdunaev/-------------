import React from 'react';
// import {Link} from "react-router-dom";
// import {offerPropTypes} from "../../prop-types-site";
// import {getRating, HousingType} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const OffersSorting = (props) => {

  const {offersSortingId, onSortingClick} = props;

  const handleSortingClick = (evt) => {
    // onSortingClick(evt.target);

    evt.preventDefault();
    onSortingClick(evt.target.id);

    // console.log(`33`, evt.target.id);
  // const liAll =
  };


  return (
    <ul className="places__options places__options--custom places__options--opened" onClick = {handleSortingClick}>
      <li className={`places__option ${offersSortingId === `1` ? `places__option--active` : ``}`} tabIndex="0" id = "1">
        Popular
      </li>
      <li className={`places__option ${offersSortingId === `2` ? `places__option--active` : ``}`} tabIndex="0" id = "2">
        Price: low to high
      </li>
      <li className={`places__option ${offersSortingId === `3` ? `places__option--active` : ``}`} tabIndex="0" id = "3">
        Price: high to low
      </li>
      <li className={`places__option ${offersSortingId === `4` ? `places__option--active` : ``}`} tabIndex="0" id = "4">
        Top rated first
      </li>
    </ul>
  );
};

OffersSorting.propTypes = {
  // offer: offerPropTypes,
  onSortingClick: PropTypes.func,
  offersSortingId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offersSortingId: state.offersSortingId
});

export {OffersSorting};
export default connect(mapStateToProps, null)(OffersSorting);


