import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { editArtistImage } from "../../store/artist";
import { editArtistImageFromHome } from "../../store/images";

import './EditPost.css';

function EditPostForm({ showModal, image }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const sessionUser = useSelector(state => state.session.user);

    const [tags, setTags] = useState([image.tags]);
    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let tagsArr;
        if (tags.length) {
            tagsArr = tags.split(',');
            setTags(tagsArr);
        };

        const payload = {
            id: image.id,
            userId: image.userId,
            imageUrl: image.imageUrl,
            tags: tagsArr
        }

        if (location.pathname === '/my-portfolio'
            || location.pathname === `/artists/${sessionUser.id}`) {
            dispatch(editArtistImage(payload));
        } else {
            dispatch(editArtistImageFromHome(payload))
        }

        showModal(false)
    };

    useEffect(() => {
        const errors = [];
        if (tags.indexOf(' ') >= 0) errors.push("I know this sounds crazy, but you can't have spaces in your tags. Separate them by commas.");

        setValidationErrors(errors);
    }, [tags])


    return (
        <form onSubmit={handleSubmit}>
            <div className='form-header'>
                <img className='form-logo' src='/images/small-logo.png' alt='inkr logo'></img>
                <h4>
                    Edit Tags
                </h4>
            </div>
            <ul className='errors-container'>
                {validationErrors.length > 0 && validationErrors.map((error) => (
                    <li className='error' key={error}>{error}</li>
                ))}
            </ul>
            <div className='form-element'>
                <label className='form-label'>Tags (Optional)</label>
                <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags((e.target.value))}
                    placeholder='e.g. "animal,fox,color"'
                />
            </div>
            <button
                className='minty-button'
                type="submit"
                disabled={validationErrors.length > 0}
            >
                Edit
            </button>
        </form>
    );
}

export default EditPostForm;
