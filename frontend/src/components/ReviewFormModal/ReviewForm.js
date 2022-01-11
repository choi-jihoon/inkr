import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { postImage } from "../../store/images";

import './ReviewForm.css';

function ReviewForm({ showModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState('');
  const [tags, setTags] = useState([])
  const [validationErrors, setValidationErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let tagsArr;
    if (tags.length) {
      tagsArr = (tags.split(','));
      setTags(tagsArr);
    };

    const payload = {
      userId: sessionUser.id,
      imageUrl,
      tags: tagsArr
    }

    dispatch(postImage(payload))

    history.push('/');
    showModal(false)
  };


  useEffect(() => {
    const errors = [];
    if (!imageUrl.length) errors.push('Please provide an image url.');
    if (tags.indexOf(' ') >= 0) errors.push('Tags must be separated by commas and have no spaces. e.g. "animal,fox,color"');

    setValidationErrors(errors);
  }, [tags, imageUrl])



  return (
    <form onSubmit={handleSubmit}>
      <div className='form-header'>
        <img className='form-logo' src='/images/small-logo.png' alt='inkr logo'></img>
        <h4>
          Create New Post
        </h4>
      </div>
      <ul>
        {validationErrors.length > 0 && validationErrors.map((error) => (
          <li className='error' key={error}>{error}</li>
        ))}
      </ul>
      <div className='form-element'>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder='Image URL'
          required
        />
      </div>
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
        className='post-button'
        type="submit"
      disabled={validationErrors.length > 0}

      >
        Post
      </button>
    </form>
  );
}

export default ReviewForm;
