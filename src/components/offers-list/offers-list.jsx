
import React, {useState} from "react";
import Offer from '../offer/offer';
import {offersPropTypes} from "../../prop-types-site";

const OffersList = (props) => {

  const {offers} = props;

  const [stateOffer, setStateOffer] = useState(0);

  const getActiveOffer = (target) => {

    let checkedParent = target.parentElement;
    let id = null;
    while(true) {
      if(checkedParent === null) {
        break;
      }
      if(typeof checkedParent.className === 'string' && checkedParent.className.includes(`cities__place-card`)) {
        id = checkedParent.id;
        break;
      } else {
        checkedParent = checkedParent.parentElement;
      }
    }
    if (id) {
      setStateOffer(id);
    }
    // console.log('000', id, stateOffer)
  };


  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">312 places to stay in Amsterdam</b>
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
            <Offer key={offer.id} offer={offer} getActiveOffer = {getActiveOffer}/>
          ))}
        </div>
      </section>
    </>
  );
};


OffersList.propTypes = offersPropTypes;


export default OffersList;