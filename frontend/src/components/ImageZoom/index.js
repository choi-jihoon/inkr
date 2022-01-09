import React from "react";

import './ImageZoom.css';

function ImageZoom({ image }) {

  return (
    <>
        <img className='zoomed-image' src={image.imageUrl} alt={`Tattoo by ${image.User.username}`} />
    </>
  );
}

export default ImageZoom;
