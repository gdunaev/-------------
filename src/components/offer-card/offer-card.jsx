import React from 'react';
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../prop-types-site";
import {getRating} from '../../const';
import PropTypes from 'prop-types';


const OfferCard = (props) => {

  const {offer, onMouseOver, otherOffer} = props;
  const {id, price, isFavorite, isPremium, title, type, rating, previewImage} = offer;

  const ratingStyle = getRating(rating);

  const handleMouseOver = () => {
    onMouseOver(offer);
  };

  return (
    <article className={`${otherOffer ? `near-places__card` : `cities__place-card`} ${`place-card`}`} id = {id} onMouseOver={handleMouseOver}>
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
            <span className="visually-hidden">{otherOffer ? `In` : `To` ` bookmarks`}</span>
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
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  setStateActiveOffer: PropTypes.func,
  onMouseOver: PropTypes.func,
  otherOffer: PropTypes.bool
};


export default OfferCard;


{ /* <article className="near-places__card place-card">
  <div className="near-places__image-wrapper place-card__image-wrapper">
    <Link to="#">
      <img
        className="place-card__image"
        src="img/room.jpg"
        width="260"
        height="200"
        alt="Place image"
      />
    </Link>
  </div>


  <div className="place-card__info">
    <div className="place-card__price-wrapper">

    <div className="place-card__price">
        <b className="place-card__price-value">&euro;80</b>
        <span className="place-card__price-text">&#47;&nbsp;night</span>
      </div>
      <button
        className="place-card__bookmark-button place-card__bookmark-button--active button"
        type="button"
      >
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    </div>

    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={ratingStyle}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>

    <h2 className="place-card__name">
      <Link to="#">Wood and stone place</Link>
    </h2>
    <p className="place-card__type">Private room</p>
  </div>
</article>; */ }
