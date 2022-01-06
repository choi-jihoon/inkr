import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getImages, getAllImages } from '../../store/images';

import './UserHomePage.css';

function UserHomePage({ user }) {
    const dispatch = useDispatch();
    const imagesArr = useSelector(getAllImages);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    if (!imagesArr) {
        return null;
    }

    return (
        <div>
            <h1>User Home Page</h1>
            {imagesArr.map((image) => {
                return (
                        <img className='grid-image' key={image.id} src={image.imageUrl} alt='hello'></img>
                )
            })}
        </div>
    )
}

export default UserHomePage;
