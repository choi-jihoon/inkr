import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageDetail from "../ImageDetail";
import { getFavImages } from '../../store/images';

import './FavoritesPage.css';

function FavoritesPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const favImagesObject = useSelector((state) => state.images.favoritesPage);
    const favImages = Object.values(favImagesObject);


    useEffect(() => {
        dispatch(getFavImages(sessionUser.id))
    }, [dispatch]);

    return (
        <div className='main-container'>
            <h2>Favorites</h2>
            <div className='all-images-container'>
                {favImages?.map((image) => {
                    let tagString;
                    if (image.tags) {
                        tagString = image.tags;
                        tagString = tagString.map((tag) => `#${tag}`);
                        tagString = tagString.join(', ');
                    }

                    return <ImageDetail key={image.id} image={image} tagString={tagString} />
                })}
            </div>
        </div>
    )



}

export default FavoritesPage;
