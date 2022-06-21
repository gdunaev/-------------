import React from "react";
import Reviews from "../reviews/reviews";

const ReviewsList = (props) => {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      <Reviews reviews={reviews} />
    </ul>
  );
};


export default ReviewsList;
