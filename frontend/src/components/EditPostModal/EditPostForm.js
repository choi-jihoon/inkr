import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editArtistImage } from "../../store/artist";

function EditPostForm({ showModal, image }) {
    const dispatch = useDispatch();

    const [tags, setTags] = useState(image.tags);
    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: image.id,
            userId: image.userId,
            imageUrl: image.imageUrl,
            tags: tags.split(',')
        }
        dispatch(editArtistImage(payload));
        showModal(false)
    };

    useEffect(() => {
        const errors = [];
        if (tags.indexOf(' ') >= 0) errors.push('Please make sure tags are separated by commas and have no spaces. e.g. "color,animal"');

        setValidationErrors(errors);
    }, [tags])


    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {validationErrors.length > 0 && validationErrors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
            <label>
                Tags
                <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags((e.target.value))}
                    placeholder="Separate tags by commas, no spaces. e.g. 'color,animal'"
                />
            </label>
            <button
                type="submit"
                disabled={validationErrors.length > 0}
            >
                Edit
            </button>
        </form>
    );
}

export default EditPostForm;
