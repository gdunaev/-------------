
import React from "react";
import OfferCard from '../offer-card/offer-card';
import {offersPropTypes} from "../../prop-types-site";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {ActionCreator} from '../../store/action';
import OffersSorting from "../offers-sorting/offers-sorting";

const OffersList = (props) => {
  const {offers, city, handleOfferIconOver, handleSortingClick} = props;


  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>

          <OffersSorting onSortingClick={handleSortingClick} />

        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onMouseOver = {handleOfferIconOver}/>
          ))}
        </div>
      </section>
    </>
  );
};


OffersList.propTypes = {
  offers: offersPropTypes,
  city: PropTypes.string,
  handleOfferIconOver: PropTypes.func,
  handleSortingClick: PropTypes.func
};

const mapStateToProps = (state) => (
  {offers: state.offers,
    city: state.city
  });

const mapDispatchToProps = (dispatch) => ({
  handleOfferIconOver(offer) {
    // console.log('22', offer)
    dispatch(ActionCreator.selectOffer(offer));
  },
  handleSortingClick(id) {
    // console.log('11', id)
    dispatch(ActionCreator.offersSorting(id));
  }
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
