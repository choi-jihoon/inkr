import React from "react";

import './ImageZoom.css';

function ImageZoom({ image }) {

  return (
    <div>
        <img className='zoomed-image' src={image.imageUrl} alt={`Tattoo by ${image.User.username}`} />
    </div>
  );
}

export default ImageZoom;
