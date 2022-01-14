import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteArtistImage } from "../../store/artist";
import { deleteArtistImageFromHome } from "../../store/images";

import './DeletePostForm.css';

function DeletePostForm({ showModal, image }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: image.id
        }

        if (location.pathname === '/my-portfolio'
            || location.pathname === `/artists/${sessionUser.id}`) {
            dispatch(deleteArtistImage(payload));
        } else {
            dispatch(deleteArtistImageFromHome(payload))
        }

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
                    className='delete-button'
                    type="submit"
                >
                    Delete
                </button>
                <button
                    className='cancel-button'
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
