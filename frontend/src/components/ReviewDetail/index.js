
import './ReviewDetail.css';

const ReviewDetail = ({ review }) => {

    return (
        <div className='review-container'>
            <div className='reviewed-by'>
                {review.User.username}
            </div>
            <div className='review-rating'>
                {review.rating}
            </div>
            <div className='review-text'>
                {review.reviewText}
            </div>
        </div>
    )
}

export default ReviewDetail;
