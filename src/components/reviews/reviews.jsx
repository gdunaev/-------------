import React from "react";
import {reviewPropTypes} from "../../prop-types-site";
import {getRating} from '../../const';
import dayjs from "dayjs";

const Reviews = (props) => {

  const {review} = props;
  const {user, rating, comment, date} = review;
  const {avatarUrl, name} = user;
  const ratingStyle = getRating(rating);

  const monthDay = dayjs(date).format(`MMM DD`);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {monthDay}
        </time>
      </div>
    </li>
  );
};

Reviews.propTypes = {
  review: reviewPropTypes,
};

export default Reviews;
