import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getArtistReviews } from '../../store/artist';
import ReviewDetail from '../ReviewDetail';

import './Reviews.css';

function Reviews({artistId}) {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getArtistReviews(artistId));
    }, [dispatch, artistId])

    const artistReviewsObject = useSelector(state => state.artist.reviews);
    const artistReviews = Object.values(artistReviewsObject);

    return (
        <>
            <h3>Reviews</h3>
            <div className='all-reviews-container'>
                {artistReviews?.map(review => {
                    return (
                        <ReviewDetail key={review.id} review={review} />
                    )
                })}
            </div>
        </>
    )

}

export default Reviews;
