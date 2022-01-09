import React from "react";
import { useDispatch } from "react-redux";
import { deleteArtistImage } from "../../store/artist";

import './DeletePostForm.css';

function DeletePostForm({ showModal, image }) {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: image.id
        }

        dispatch(deleteArtistImage(payload));
        showModal(false);
    };

    const handleCancelClick = async (e) => {
        e.preventDefault();
        showModal(false);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Are you sure you want to delete this post?
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

export default DeletePostForm;
