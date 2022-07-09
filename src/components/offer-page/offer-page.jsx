import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {getRating, cityMap, HousingType, AppRoute, QUANTITY_IMAGES, QUANTITY_OTHER_PLACES} from "../../const";
import {useParams} from "react-router-dom";
import ReviewsList from "../reviews-list/reviews-list";
import {comments} from "../../mocks/comments";
import OfferCard from "../offer-card/offer-card";
import Map from "../map/map";
import {offersPropTypes} from "../../prop-types-site";
import {connect} from "react-redux";
import browserHistory from "../../browser-history";
import ImagesOffer from "../images-offer/images-offer";
import PropTypes from "prop-types";
import {fetchOffers} from "../../services/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";
import NotFoundPage from "../not-found-page/not-found-page";


const getImagesSection = (images) => {
  if (images.length !== 0) {
    const currentImages = images.length >= QUANTITY_IMAGES ? images.slice(0, QUANTITY_IMAGES) : images.slice();
    return (
      <div className="property__gallery">
        {currentImages.map((image) => (
          <ImagesOffer key={image} image={image} />
        ))}
      </div>
    );
  }
  return (
    <div className="property__gallery">
    </div>
  );
};

const OfferPage = (props) => {
  const {offersAll, emailUser, isDataLoaded, onLoadData} = props;

  const {id} = useParams();


  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  // console.log("222", offersAll, isDataLoaded)

  const history = browserHistory;


  const findedOffer = offersAll.find((offer) => Number(id) === offer.id);


  if (!findedOffer) {
    // console.log("111", offers);
    return (
      <NotFoundPage />
    );
  }


  // const offer = offersAll.filter((value) => value.id === Number(id))[0];

  // console.log("111", findedOffer);

  const {
    isPremium,
    price,
    maxAdults,
    bedrooms,
    title,
    type,
    rating,
    city,
    images,
  } = findedOffer;

  const reviews = comments.filter((value) => value.id === Number(id));
  const reviewsLength = reviews ? `${reviews.length}` : ``;

  // const [userForm, setUserForm] = React.useState({
  //   rating: ``,
  //   review: ``,
  // });

  const handleFieldChange = () => {
    // const {name, value} = evt.target;
    // console.log('222', name)
    // setUserForm({...userForm, [name]: value});
  };

  const ratingStyle = getRating(rating);

  // отбираем офферы по городу исключая наш, который отрисовываем
  const otherOffers = offersAll
    .filter(
        (currentOffer) =>
          currentOffer.city.name === city.name && currentOffer !== findedOffer
    )
    .slice(0, QUANTITY_OTHER_PLACES);

  const otherOffersMap = otherOffers.slice();
  otherOffersMap.push(findedOffer);

  // выводим емайл пользователя в шапке, и переход к страницам Избранное/Логин
  const emailUserText = emailUser ? emailUser : `Sign in`;

  const handleAvatarClick = () => {
    return emailUser
      ? history.push(AppRoute.FAVORITES)
      : history.push(AppRoute.LOGIN);
  };

  const handleMouseOver = () => {
    // setActiveOffer(offer);
  };

  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            ></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            ></path>
          </symbol>
        </svg>
      </div>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li
                    className="header__nav-item user"
                    onClick={handleAvatarClick}
                  >
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to="#"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        {emailUserText}
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              {getImagesSection(images)}
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={ratingStyle}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {HousingType[type.toUpperCase()]}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    <li className="property__inside-item">Wi-Fi</li>
                    <li className="property__inside-item">Washing machine</li>
                    <li className="property__inside-item">Towels</li>
                    <li className="property__inside-item">Heating</li>
                    <li className="property__inside-item">Coffee machine</li>
                    <li className="property__inside-item">Baby seat</li>
                    <li className="property__inside-item">Kitchen</li>
                    <li className="property__inside-item">Dishwasher</li>
                    <li className="property__inside-item">Cabel TV</li>
                    <li className="property__inside-item">Fridge</li>
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src="img/avatar-angelina.jpg"
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">Angelina</span>
                    <span className="property__user-status">Pro</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      A quiet cozy and picturesque that hides behind a a river
                      by the unique lightness of Amsterdam. The building is
                      green and from 18th century.
                    </p>
                    <p className="property__text">
                      An independent House, strategically located between
                      Rembrand Square and National Opera, but where the bustle
                      of the city comes to rest in this alley flowery and
                      colorful.
                    </p>
                  </div>
                </div>

                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;{` `}
                    <span className="reviews__amount">{reviewsLength}</span>
                  </h2>

                  <ReviewsList reviews={reviews} />

                  <form className="reviews__form form" action="#" method="post">
                    <label
                      className="reviews__label form__label"
                      htmlFor="review"
                    >
                      Your review
                    </label>
                    <div className="reviews__rating-form form__rating">
                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        value="5"
                        id="5-stars"
                        type="radio"
                        onClick={handleFieldChange}
                      />
                      <label
                        htmlFor="5-stars"
                        className="reviews__rating-label form__rating-label"
                        title="perfect"
                      >
                        <svg
                          className="form__star-image"
                          width="37"
                          height="33"
                        >
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        value="4"
                        id="4-stars"
                        type="radio"
                        onClick={handleFieldChange}
                      />
                      <label
                        htmlFor="4-stars"
                        className="reviews__rating-label form__rating-label"
                        title="good"
                      >
                        <svg
                          className="form__star-image"
                          width="37"
                          height="33"
                        >
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        value="3"
                        id="3-stars"
                        type="radio"
                        onClick={handleFieldChange}
                      />
                      <label
                        htmlFor="3-stars"
                        className="reviews__rating-label form__rating-label"
                        title="not bad"
                      >
                        <svg
                          className="form__star-image"
                          width="37"
                          height="33"
                        >
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        value="2"
                        id="2-stars"
                        type="radio"
                        onClick={handleFieldChange}
                      />
                      <label
                        htmlFor="2-stars"
                        className="reviews__rating-label form__rating-label"
                        title="badly"
                      >
                        <svg
                          className="form__star-image"
                          width="37"
                          height="33"
                        >
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        value="1"
                        id="1-star"
                        type="radio"
                        onClick={handleFieldChange}
                      />
                      <label
                        htmlFor="1-star"
                        className="reviews__rating-label form__rating-label"
                        title="terribly"
                      >
                        <svg
                          className="form__star-image"
                          width="37"
                          height="33"
                          name="star"
                        >
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>
                    </div>
                    <textarea
                      className="reviews__textarea form__textarea"
                      id="review"
                      name="review"
                      placeholder="Tell how was your stay, what you like and what can be improved"
                      onChange={handleFieldChange}
                    ></textarea>
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set{` `}
                        <span className="reviews__star">rating</span> and
                        describe your stay with at least{` `}
                        <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button
                        className="reviews__submit form__submit button"
                        type="submit"
                        disabled=""
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <section className="property__map map">

              <Map cityMap={cityMap} offers={otherOffersMap} />

            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">

                {otherOffers.map((currentOffer) => (
                  <OfferCard
                    key={currentOffer.id}
                    offer={currentOffer}
                    otherOffer={true}
                    onMouseOver={handleMouseOver}
                  />
                ))}

              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

OfferPage.propTypes = {
  offersAll: offersPropTypes,
  emailUser: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offersAll: state.offersAll,
  emailUser: state.emailUser,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
