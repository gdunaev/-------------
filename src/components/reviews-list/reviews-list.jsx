import React, {useEffect} from "react";
import Reviews from "../reviews/reviews";
import {reviewPropTypes} from "../../prop-types-site";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchCommentsOffer} from "../../services/api-actions";

const ReviewsList = (props) => {

  const {commentsOffer, onLoadCommentsOffer, commentsId, id} = props;

  useEffect(() => {
    if (id !== commentsId) {
      onLoadCommentsOffer(id);
    }
  }, []);

  const getReviewsComponent = () => {
    if (commentsOffer.length === 0) {
      return ``;
    }
    return commentsOffer.map((comment) => (
      <Reviews key={`${comment.id}-${comment.date}`} review={comment} />
    ))
  }
  // console.log('222', commentsOffer)

  const commentsQuantity = commentsOffer.length !== 0 ? `${commentsOffer.length}` : ``;

  return (
    <>
    <h2 className="reviews__title">
      Reviews &middot;{` `}
      <span className="reviews__amount">{commentsQuantity}</span>
    </h2>
    <ul className="reviews__list">
      {getReviewsComponent()}
    </ul>
    </>
  );
};

ReviewsList.propTypes = {
  commentsOffer: PropTypes.arrayOf(reviewPropTypes).isRequired,
  onLoadCommentsOffer: PropTypes.func.isRequired, 
  commentsId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  commentsOffer: state.commentsOffer,
  commentsId: state.commentsId,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCommentsOffer(id) {
    dispatch(fetchCommentsOffer(id));
  }
});

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

