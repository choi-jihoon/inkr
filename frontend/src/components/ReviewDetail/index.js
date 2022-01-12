import { useSelector } from 'react-redux';

import DeleteReviewModal from '../DeleteReviewModal';
import './ReviewDetail.css';

const ReviewDetail = ({ review }) => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='review-container'>
            <div className='reviewed-by'>
                {review.User.username}
            </div>
            <div className='review-rating'>
                Rating: {review.rating} <span><i className="fas fa-star review-star"></i></span>
            </div>
            <div className='review-text'>
                {review.reviewText}
            </div>
            { sessionUser.id === review.userId && <DeleteReviewModal review={review} />}
        </div>
    )
}

export default ReviewDetail;
