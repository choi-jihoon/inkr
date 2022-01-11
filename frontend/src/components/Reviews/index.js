import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getArtistReviews } from '../../store/artist';

import './Reviews.css';

function Reviews({artistId}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
            <h3>Reviews</h3>
        </>
    )

}

export default Reviews;
