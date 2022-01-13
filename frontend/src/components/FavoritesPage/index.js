import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageDetail from "../ImageDetail";
import { getFavImages } from '../../store/images';

import './FavoritesPage.css';

function FavoritesPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const favImagesObject = useSelector((state) => state.images);
    const favImages = Object.values(favImagesObject.favoritesPage);


    useEffect(() => {
        dispatch(getFavImages(sessionUser.id))
    }, [dispatch, sessionUser.id]);

    return (
        <div className='main-container'>
            {favImages.length ?
            <div className='title-container'>
                <h2 id='favorites-header'>Favorites</h2>
            </div> : <div className='title-container' id='favorites-title-container'>
                <h2 id='favorites-header'>You haven't favorited any photos!</h2>
                {/* <p id='no-faves-text'>You haven't favorited any photos!</p> */}
            </div>}

            <div className='all-images-container' id='favorites-all-images-container'>
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
