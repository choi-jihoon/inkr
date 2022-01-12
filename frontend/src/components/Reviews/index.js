import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getArtistReviews } from '../../store/artist';
import ReviewDetail from '../ReviewDetail';

import './Reviews.css';

function Reviews({ artistId }) {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getArtistReviews(artistId));
    }, [dispatch, artistId])

    const artistReviewsObject = useSelector(state => state.artist);
    const artistReviews = Object.values(artistReviewsObject.reviews);

    return (
        <>
            {artistReviews.length ? <div className='all-reviews-container'>{/* <h3 id='reviews-title'>Reviews</h3> */}
                {artistReviews?.map(review => {
                    return (
                        <ReviewDetail key={review.id} review={review} />
                    )
                })}
            </div> : null}

        </>
    )

}

export default Reviews;
