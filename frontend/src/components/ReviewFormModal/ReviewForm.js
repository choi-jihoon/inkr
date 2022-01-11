import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArtistReview } from '../../store/artist';

import './ReviewForm.css';

function ReviewForm({ showModal, artistId }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [rating, setRating] = useState(5)
    const [reviewText, setReviewText] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            artistId,
            reviewText,
            rating
        }

        dispatch(addArtistReview(payload))
        showModal(false)
    };


    useEffect(() => {
        const errors = [];
        if (!reviewText.length) errors.push('Please provide a description of your experience.');
        if (rating <= 0 || rating > 5) errors.push('Rating must be a number between 1 and 5');

        setValidationErrors(errors);
    }, [rating, reviewText])



    return (
        <form onSubmit={handleSubmit}>
            <div className='form-header'>
                <img className='form-logo' src='/images/small-logo.png' alt='inkr logo'></img>
                <h4>
                    Add Review
                </h4>
            </div>
            <ul>
                {validationErrors.length > 0 && validationErrors.map((error) => (
                    <li className='error' key={error}>{error}</li>
                ))}
            </ul>
            <div className='form-element'>
                <label className='form-label'>Rating</label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating((e.target.value))}
                />
            </div>
            <div className='form-element form-text-area'>
                <textarea
                    type="text"
                    value={reviewText}
                    onChange={(e) => setReviewText((e.target.value))}
                    placeholder='How was your experience?'
                />
            </div>
            <button
                className='post-button'
                type="submit"
                disabled={validationErrors.length > 0}

            >
                Post Review
            </button>
        </form>
    );
}

export default ReviewForm;
