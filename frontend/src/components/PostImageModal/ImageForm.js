import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postImage } from "../../store/images";

function ImageForm({showModal}) {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        userId: sessionUser.id,
        imageUrl
    }
    dispatch(postImage(payload));
    showModal(false)
  };


  useEffect(() => {
    const errors = [];
    if (!imageUrl.length) errors.push('Please provide an image url.');

    setValidationErrors(errors);
  }, [imageUrl])

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {validationErrors.length > 0 && validationErrors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <label>
        Image Url
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <button
      type="submit"
      disabled={validationErrors.length > 0}
      >Post</button>
    </form>
  );
}

export default ImageForm;
