import React from 'react';
// import {Link} from "react-router-dom";
// import {offerPropTypes} from "../../prop-types-site";
import {SortingType} from '../../const';
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
      <li className={`places__option ${offersSortingId === SortingType.POPULAR ? `places__option--active` : ``}`} tabIndex="0" id = {SortingType.POPULAR}>
        Popular
      </li>
      <li className={`places__option ${offersSortingId === SortingType.LOW_TO_HIGH ? `places__option--active` : ``}`} tabIndex="0" id = {SortingType.LOW_TO_HIGH}>
        Price: low to high
      </li>
      <li className={`places__option ${offersSortingId === SortingType.HIGH_TO_LOW ? `places__option--active` : ``}`} tabIndex="0" id = {SortingType.HIGH_TO_LOW}>
        Price: high to low
      </li>
      <li className={`places__option ${offersSortingId === SortingType.TOP_RATED ? `places__option--active` : ``}`} tabIndex="0" id = {SortingType.TOP_RATED}>
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


