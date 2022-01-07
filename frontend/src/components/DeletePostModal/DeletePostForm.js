import React from "react";
import { useDispatch } from "react-redux";
import { deleteArtistImage } from "../../store/artist";

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
            <button
                type="submit"
            >
                Delete
            </button>
            <button type='button' onClick={handleCancelClick}>
                Cancel
            </button>
        </form>
    );
}

export default DeletePostForm;
