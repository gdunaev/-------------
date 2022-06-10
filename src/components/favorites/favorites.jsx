import React from "react";
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

const Favorites = () => {
  return (
<>
    <div style={{display: `none`}}>
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewbox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewbox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewbox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
    </div>

    <div class="page">
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <div class="header__left">
              <Link class="header__logo-link" to="#">
                <img class="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav class="header__nav">
              <ul class="header__nav-list">
                <li class="header__nav-item user">
                  <Link class="header__nav-link header__nav-link--profile" to="#">
                    <div class="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span class="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main class="page__main page__main--favorites">
        <div class="page__favorites-container container">
          <section class="favorites">
            <h1 class="favorites__title">Saved listing</h1>
            <ul class="favorites__list">
              <li class="favorites__locations-items">
                <div class="favorites__locations locations locations--current">
                  <div class="locations__item">
                    <Link class="locations__item-link" to="#">
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div class="favorites__places">
                  <article class="favorites__card place-card">
                    <div class="favorites__image-wrapper place-card__image-wrapper">
                      <Link to="#">
                        <img class="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image"/>
                      </Link>
                    </div>
                    <div class="favorites__card-info place-card__info">
                      <div class="place-card__price-wrapper">
                        <div class="place-card__price">
                          <b class="place-card__price-value">&euro;180</b>
                          <span class="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg class="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span class="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div class="place-card__rating rating">
                        <div class="place-card__stars rating__stars">
                          <span style={{width: `100%`}}></span>
                          <span class="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 class="place-card__name">
                        <Link to="#">Nice, cozy, warm big bed apartment</Link>
                      </h2>
                      <p class="place-card__type">Apartment</p>
                    </div>
                  </article>

                  <article class="favorites__card place-card">
                    <div class="favorites__image-wrapper place-card__image-wrapper">
                      <Link to="#">
                        <img class="place-card__image" src="img/room-small.jpg" width="150" height="110" alt="Place image"/>
                      </Link>
                    </div>
                    <div class="favorites__card-info place-card__info">
                      <div class="place-card__price-wrapper">
                        <div class="place-card__price">
                          <b class="place-card__price-value">&euro;80</b>
                          <span class="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg class="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span class="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div class="place-card__rating rating">
                        <div class="place-card__stars rating__stars">
                          <span style={{width: `80%`}}></span>
                          <span class="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 class="place-card__name">
                        <Link to="#">Wood and stone place</Link>
                      </h2>
                      <p class="place-card__type">Private room</p>
                    </div>
                  </article>
                </div>
              </li>

              <li class="favorites__locations-items">
                <div class="favorites__locations locations locations--current">
                  <div class="locations__item">
                    <Link class="locations__item-link" to="#">
                      <span>Cologne</span>
                    </Link>
                  </div>
                </div>
                <div class="favorites__places">
                  <article class="favorites__card place-card">
                    <div class="favorites__image-wrapper place-card__image-wrapper">
                      <Link to="#">
                        <img class="place-card__image" src="img/apartment-small-04.jpg" width="150" height="110" alt="Place image"/>
                      </Link>
                    </div>
                    <div class="favorites__card-info place-card__info">
                      <div class="place-card__price-wrapper">
                        <div class="place-card__price">
                          <b class="place-card__price-value">&euro;180</b>
                          <span class="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg class="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span class="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div class="place-card__rating rating">
                        <div class="place-card__stars rating__stars">
                          <span style={{width: `100%`}}></span>
                          <span class="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 class="place-card__name">
                        <Link to="#">White castle</Link>
                      </h2>
                      <p class="place-card__type">Apartment</p>
                    </div>
                  </article>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer class="footer container">
        <Link class="footer__logo-link" to="main.html">
          <img class="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  </>
  );
};


export default Favorites;
