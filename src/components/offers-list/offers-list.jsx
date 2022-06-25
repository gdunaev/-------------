
import React, {useState} from "react";
import OfferCard from '../offer-card/offer-card';
import {offersPropTypes} from "../../prop-types-site";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

const OffersList = (props) => {
  const {offers, city} = props;

  const [, setActiveOffer] = useState(0);

  const handleMouseOver = (offer) => {
    setActiveOffer(offer);
  };
  // console.log('22' city)

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
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">
              Popular
            </li>
            <li className="places__option" tabIndex="0">
              Price: low to high
            </li>
            <li className="places__option" tabIndex="0">
              Price: high to low
            </li>
            <li className="places__option" tabIndex="0">
              Top rated first
            </li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onMouseOver = {handleMouseOver}/>
          ))}
        </div>
      </section>
    </>
  );
};


OffersList.propTypes = {
  offers: offersPropTypes,
  city: PropTypes.string
};

const mapStateToProps = (state) => (
  {offers: state.offers,
    city: state.city
  });

export {OffersList};
export default connect(mapStateToProps, null)(OffersList);
