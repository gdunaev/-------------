import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {offersPropTypes} from "../../prop-types-site";
import OffersList from "../offers-list/offers-list";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import {Cities, AppRoute, TEXT_SIGN_IN} from "../../const";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from "prop-types";
import {fetchOffers} from "../../services/api-actions";
import LoadingScreen from "../loading-screen/loading-screen";
import browserHistory from "../../browser-history";

const MainPage = (props) => {

  const {offers, handleCityChange, city, isDataLoaded, onLoadData, emailUser} = props;
  const emailUserText = emailUser ? emailUser : TEXT_SIGN_IN;
  const history = browserHistory;

  // console.log("111", offers);

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

  const handleAvatarClick = () => {
    return (
      emailUser ? history.push(AppRoute.FAVORITES) : history.push(AppRoute.LOGIN)
    );
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

      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link
                  className="header__logo-link header__logo-link--active"
                  to="#"
                >
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
                  <li className="header__nav-item user" onClick={handleAvatarClick}>
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

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">

                {Cities.map((element) => (
                  <CitiesList key={element.name} city={element.name} offers={offers} onCityClick={handleCityChange} activ={element.name === city}/>
                ))}

              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">

              <OffersList />

              <div className="cities__right-section">

                <Map main={true} offers={offers}/>

              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
  emailUser: state.emailUser,
});


// при смене города в диспатч передаем название города,
// редьюсер связанный с диспатчем отберет нужные офферы по названию города,
// и отрисует название города и кол-во офферов в OffersList. Там они выводятся.
// -------------------------
// fetchOffers - функция которую можно передать в диспатч благодаря thunk-y,
// иначе можно передать только объект.
// --------------------------
// в onLoadData вызывается первый диспатч, затем когда выполнится получение
// офферов будет вызван второй диспатч (в fetchOffers)
const mapDispatchToProps = (dispatch) => ({
  handleCityChange(cityName) {
    dispatch(ActionCreator.changeCity(cityName));
  },
  onLoadData() {
    dispatch(fetchOffers());
  },
  // handleAvatarClick() {
  //   console.log('2233')
  // }
});

MainPage.propTypes = {
  offers: offersPropTypes,
  handleCityChange: PropTypes.func,
  city: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  emailUser: PropTypes.string,
};

// handleCityChange

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
