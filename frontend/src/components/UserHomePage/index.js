import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getImages } from '../../store/images';
import ImageFormModal from '../PostImageModal';
import ImageDetail from "../ImageDetail";

import './UserHomePage.css';

function UserHomePage({ user }) {
    const dispatch = useDispatch();

    const imagesObject = useSelector((state) => state.images);
    const images = Object.values(imagesObject);

    useEffect(() => {
        setTimeout(() => {
            dispatch(getImages());
        }, 100)
    }, [dispatch]);


    return (
        <div>
            <h1>User Home Page</h1>
            <ImageFormModal />
            <div>
                {images?.map((image) => (
                    <ImageDetail key={image.id} image={image} />
                ))}
            </div>
        </div>
    )
}

export default UserHomePage;
