import React from "react";
import { NavLink } from "react-router-dom";
import './ImageZoom.css';

function ImageZoom({ image, tagString }) {

  return (
    <div className='zoomed-container' key={image.id}>
      <img className='zoomed-image' src={image.imageUrl} alt={`Tattoo by ${image?.User.username}`} />
      <div className='zoomed-image-info'>
        <NavLink className='zoomed-artist-container' to={`/artists/${image?.userId}`}>
          <p className='zoomed-artist-name'>{image?.User.username}</p>
        </NavLink>
        <div className='zoomed-all-tags' key={image}>
          {tagString ?
            tagString.split(',').map(tag => <p key={tag} className='single-tag'>{`${tag}`}</p>)
            : <p key='notag' className='no-tags'>No tags</p>}
        </div>
      </div>
    </div>
  );
}

export default ImageZoom;
