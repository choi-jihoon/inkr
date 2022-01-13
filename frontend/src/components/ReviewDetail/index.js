import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import DeleteReviewModal from '../DeleteReviewModal';
import './ReviewDetail.css';

const ReviewDetail = ({ review }) => {
    const sessionUser = useSelector(state => state.session.user);

    const date = new Date(review.createdAt).toDateString();

    let ratingStars;
    if (review.rating === 1) {
        ratingStars = (
            <>
                <span><i className="fas fa-star review-star"></i></span>
            </>
        )
    } else if (review.rating === 2) {
        ratingStars = (
            <>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
            </>
        )
    } else if (review.rating === 3) {
        ratingStars = (
            <>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
            </>
        )
    } else if (review.rating === 4) {
        ratingStars = (
            <>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
            </>
        )
    } else {
        ratingStars = (
            <>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
            </>
        )
    }

        return (
            <div className='review-container'>
                <div className='reviewed-by-and-rating'>
                    <NavLink to={`/artists/${review.User.id}`}>
                        <div className='reviewed-by'>
                            {review.User.username}
                        </div>
                    </NavLink>
                </div>
                    <div className='review-rating'>
                        {ratingStars}
                    </div>
                <div className='review-text'>
                    {review.reviewText}
                </div>
                <div className='reviewed-on'>
                    {date}
                </div>
                {sessionUser.id === review.userId && <DeleteReviewModal review={review} />}
            </div>
        )
}

export default ReviewDetail;
