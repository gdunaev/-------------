import React from 'react';
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../prop-types-site";

const PercentRating = 20;

const getRating = (rating) => {
  return {
    width: `${Math.round(rating) * PercentRating}%`,
  };
};

const Offer = (props) => {

  const {offer} = props;

  const rating = getRating(offer.rating);
  // console.log(`11`, rating);

  const isFavorite = offer.isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;
  const isPremium = offer.isPremium ? `place-card__mark` : `place-card__mark visually-hidden`;

  return (
    <article className="cities__place-card place-card">
      <div className= {isPremium}>
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
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className= {isFavorite} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={rating}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = offerPropTypes;

export default Offer;
