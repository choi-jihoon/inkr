import React from "react";
import { NavLink } from "react-router-dom";

import './ImageZoom.css';

function ImageZoom({ image, tagString }) {

  return (
    <div className='zoomed-container'>
      <img className='zoomed-image' src={image.imageUrl} alt={`Tattoo by ${image.User.username}`} />
      <div className='zoomed-image-info'>
        <NavLink className='zoomed-artist-container' to={`/artists/${image?.userId}`}>
          <p className='zoomed-artist-name'>{image?.User.username}</p>
        </NavLink>
        <div className='zoomed-favorites-container'>
          <p className='zoomed-favorites-count'><i class="far fa-star"></i> {image?.favoritedCount}</p>
        </div>
        <div className='zoomed-all-tags' key={image}>
          {tagString ? tagString.split(',').map(tag => <p className='single-tag'>{`${tag}`}</p>) : <p className='no-tags'>No tags available</p>}
        </div>
      </div>
    </div>
  );
}

export default ImageZoom;
