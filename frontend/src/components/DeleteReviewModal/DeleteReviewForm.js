import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteArtistReview, getArtistReviews } from '../../store/artist';

function DeleteReviewForm({ showModal, review }) {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: review.id
        }

        dispatch(deleteArtistReview(payload));

        showModal(false);
    };

    const handleCancelClick = async (e) => {
        e.preventDefault();
        showModal(false);
    }

    // useEffect(() => {
    //     dispatch(getArtistReviews(review.artistId));
    // }, [dispatch, review.artistId])


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Are you sure you want to delete this review?
            </label>
            <div className='button-container'>
                <button
                    className='delete-post-button'
                    type="submit"
                >
                    Delete
                </button>
                <button
                    className='cancel-delete-button'
                    type='button'
                    onClick={handleCancelClick}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default DeleteReviewForm;
