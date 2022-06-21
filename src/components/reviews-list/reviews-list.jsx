import React from "react";
import Reviews from "../reviews/reviews";
import {reviewPropTypes} from "../../prop-types-site";
import PropTypes from 'prop-types';

const ReviewsList = (props) => {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Reviews key={`${review.user.id}-${review.date}`} review={review} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};


export default ReviewsList;
