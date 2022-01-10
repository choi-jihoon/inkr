
import lottie from 'lottie-web/build/player/lottie_light';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { addToFavorites, incrementFavoriteCount, deleteFromFavorites, decrementFavoriteCount } from '../../store/images';
import animationData from './favoritestar.json';
import './FavoriteStar.css';


const FavoriteStar = ({ image }) => {
    const dispatch = useDispatch();

    // for lottie animation
    const container = useRef(null);
    const anim = useRef(null);
    const [favorite, setFavorite] = useState(false);

    const [count, setCount] = useState(image.favoritedCount);

    const sessionUser = useSelector(state => state.session.user);
    const sessionImages = useSelector(state => state.images);

    const isFavorite = sessionImages[image.id].Favorites.filter(favorite => favorite.userId === sessionUser.id);


    const handleFavorite = async (e) => {
        e.preventDefault();

        // for lottie animation
        setFavorite(!favorite);
        anim.current?.play();

        setCount(prevState => prevState + 1);

        // post to favorites table
        const payload = {
            userId: sessionUser.id,
            imageId: image.id
        }

        await dispatch(addToFavorites(payload));

        // update favoritedCount for image
        const payload2 = {
            id: image.id,
            userId: image.userId,
            imageUrl: image.imageUrl,
            tags: image.tags,
            favoritedCount: (image.favoritedCount + 1)
        }

        await dispatch(incrementFavoriteCount(payload2, sessionUser.id));

        // change icon render
        setTimeout(() => {
            setIcon(favoritedStarIcon);
        }, 1000)
    }

    const handleUnfavorite = async (e) => {
        e.preventDefault();

        // for lottie animation
        setFavorite(!favorite);

        setCount(prevState => prevState - 1);

        // changes icon to not favorited
        setIcon(notFavoritedIcon);

        const payload = {
            imageId: image.id,
            userId: sessionUser.id
        }

        await dispatch(deleteFromFavorites(payload));

        const payload2 = {
            id: image.id,
            userId: image.userId,
            imageUrl: image.imageUrl,
            tags: image.tags,
            favoritedCount: (image.favoritedCount - 1)
        }


        await dispatch(decrementFavoriteCount(payload2, sessionUser.id))
    }


    const favoritedStarIcon = (
        <>
            <i
                onClick={handleUnfavorite}
                className="fas fa-star favorited-star"
            >
            </i>
        </>
    )

    const notFavoritedIcon = (
        <>
            <button
                onClick={handleFavorite}
                className='favorite-star'
                ref={container}
            >
            </button>
        </>
    )

    const [icon, setIcon] = useState(notFavoritedIcon);

    useEffect(() => {
        if (isFavorite.length) {
            setIcon(favoritedStarIcon)
        } else {
            setIcon(notFavoritedIcon);
        }
    }, []);



    // for lottie animation
    useEffect(() => {
        if (container.current) {
            anim.current = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData,
            })
            anim.current.setSpeed(1);
            // return () => anim.current?.destroy();
        }
    }, [icon]);


    return (
        <>
            <div className={isFavorite.length ? 'favorite-star-container favorited' : 'favorite-star-container not-favorited'}>
                {icon}
            </div>
            <p className='favorites-number'>
                {count}
            </p>
        </>
    )
}

export default FavoriteStar;
