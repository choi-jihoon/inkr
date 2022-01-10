import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageDetail from "../ImageDetail";
import { getFavImages } from '../../store/favorite';

import './FavoritesPage.css';

function FavoritesPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    // const imagesObject = useSelector((state) => state.images);
    // const images = Object.values(imagesObject);
    // const favoritesArray = images.map(image => image.Favorites);
    // const allFavorites = favoritesArray.filter(fave => fave.length > 0)
    // const userFavorites = allFavorites.filter(fave => fave[0].userId === sessionUser.id);

    const favImagesObject = useSelector((state) => state.favorites);
    const favImages = Object.values(favImagesObject);

    console.log(favImages)

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
