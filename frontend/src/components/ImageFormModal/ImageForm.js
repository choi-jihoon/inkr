import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from 'react-router-dom';
import { postImage } from "../../store/images";
import { postNewImageOnArtist } from "../../store/artist";


import './ImageForm.css';

function ImageForm({ showModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();


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

    if (location.pathname === '/my-portfolio' || location.pathname === `/artists/${sessionUser.id}`) {
      await dispatch(postNewImageOnArtist(payload))
    } else {
      await dispatch(postImage(payload));
      history.push('/');
    }

    showModal(false)


  };


  useEffect(() => {
    const errors = [];
    if (!imageUrl.length) errors.push("You can't make a post without a url... obviously.");
    if (tags.indexOf(' ') >= 0) errors.push("I know this sounds crazy, but you can't have spaces in your tags. Separate them by commas.");
    if (!imageUrl.match(/^https?:\/\/.+\/.+$/) && imageUrl.length > 0) errors.push("My spidey senses tell me that's not a valid url.")

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
      <ul className='errors-container'>
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

export default ImageForm;
