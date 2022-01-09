import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editArtistImage } from "../../store/artist";

import './EditPost.css';

function EditPostForm({ showModal, image }) {
    const dispatch = useDispatch();

    const [tags, setTags] = useState([...image.tags]);
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

        dispatch(editArtistImage(payload));
        showModal(false)
    };

    useEffect(() => {
        const errors = [];
        if (tags.indexOf(' ') >= 0) errors.push('Tags must be separated by commas and have no spaces. e.g. "animal,fox,color"');

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
            <ul>
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
                className='edit-button'
                type="submit"
                disabled={validationErrors.length > 0}
            >
                Edit
            </button>
        </form>
    );
}

export default EditPostForm;
