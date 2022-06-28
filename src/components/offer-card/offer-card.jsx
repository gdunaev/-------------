import React from 'react';
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../prop-types-site";
import {getRating, HousingType} from '../../const';
import PropTypes from 'prop-types';

const OfferCard = (props) => {

  const {offer, otherOffer, onMouseOver} = props;
  const {id, price, isFavorite, isPremium, title, type, rating, previewImage} = offer;

  const ratingStyle = getRating(rating);

  const handleMouseOver = () => {
    onMouseOver(id);
  };

  return (
    <article className={`${otherOffer ? `near-places__card` : `cities__place-card`} ${`place-card`}`} onMouseOver={handleMouseOver}>
      <div className= {`place-card__mark ${!isPremium && `visually-hidden`}`}>
        <span>Premium</span>
      </div>
      <div className={`${otherOffer ? `near-places__image-wrapper` : `cities__image-wrapper`} ${`place-card__image-wrapper`}`}>
        <Link to="#">
          <img className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"/>
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button className= {`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">`${otherOffer ? `In` : `To`} ${`bookmarks`}</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{HousingType[type.toUpperCase()]}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  onMouseOver: PropTypes.func,
  otherOffer: PropTypes.bool,
};

export default OfferCard;

