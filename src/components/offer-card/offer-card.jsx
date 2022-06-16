import React from 'react';
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../prop-types-site";
import {getRating} from '../../const';
import PropTypes from 'prop-types';

const getActiveOffer = (target, setStateActiveOffer) => {

  let checkedParent = target.parentElement;
  let id = null;
  while (checkedParent) {
    // if(checkedParent === null) {
    //   break;
    // }
    if(typeof checkedParent.className === 'string' && checkedParent.className.includes(`cities__place-card`)) {
      id = checkedParent.id;
      break;
    } else {
      checkedParent = checkedParent.parentElement;
    }
  }
  if (id) {
    setStateActiveOffer(id);
  }
};

const OfferCard = (props) => {

  const {offer, setStateActiveOffer} = props;
  const {id, price, isFavorite, isPremium, title, type, rating} = offer;

  const ratingStyle = getRating(rating);
  // console.log(`11`, offer);

  const isFavoriteClassName = isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;
  const isPremiumClassName = isPremium ? `place-card__mark` : `place-card__mark visually-hidden`;

  return (
    <article className="cities__place-card place-card" id = {id} onMouseOver={(evt) => {
        getActiveOffer(evt.target, setStateActiveOffer);
      }}>

      <div className= {isPremiumClassName}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className= {isFavoriteClassName} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {...offerPropTypes, setStateActiveOffer: PropTypes.func};


export default OfferCard;
