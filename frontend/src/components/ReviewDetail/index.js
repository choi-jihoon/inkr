import { useSelector } from 'react-redux';

import DeleteReviewModal from '../DeleteReviewModal';
import './ReviewDetail.css';

const ReviewDetail = ({ review }) => {
    const sessionUser = useSelector(state => state.session.user);

    const date = new Date(review.createdAt).toDateString();

    let ratingStars;
    if (Math.floor(review.rating) === 1) {
        ratingStars = (
            <>
                <span><i className="fas fa-star review-star"></i></span>
            </>
        )
    } else if (Math.floor(review.rating) === 2) {
        ratingStars = (
            <>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
            </>
        )
    } else if (Math.floor(review.rating) === 3) {
        ratingStars = (
            <>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
                <span><i className="fas fa-star review-star"></i></span>
            </>
        )
    } else if (Math.floor(review.rating) === 4) {
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
                    <div className='reviewed-by'>
                        {review.User.username}
                    </div>
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
