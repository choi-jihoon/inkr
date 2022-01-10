
import lottie from 'lottie-web/build/player/lottie_light';
import { useEffect, useRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { addToFavorites, incrementFavoriteCount, deleteFromFavorites, decrementFavoriteCount } from '../../store/images';
import animationData from './favoritestar.json';
import './FavoriteStar.css';


const FavoriteStar = ({ image }) => {
    const dispatch = useDispatch();
    const container = useRef(null);
    const anim = useRef(null);
    const [favorite, setFavorite] = useState(false);
    const [count, setCount] = useState(image.favoritedCount);
    const sessionUser = useSelector(state => state.session.user);
    const sessionImages = useSelector(state => state.images);

    const isFavorite = sessionImages[image.id].Favorites.filter(favorite => favorite.userId === sessionUser.id);

    const handleFavorite = async (e) => {
        e.preventDefault();

        setFavorite(!favorite);
        anim.current?.play();

        setCount(prevState => prevState + 1);

        const payload = {
            userId: sessionUser.id,
            imageId: image.id
        }

        await dispatch(addToFavorites(payload));

        const payload2 = {
            id: image.id,
            userId: sessionUser.id,
            imageUrl: image.imageUrl,
            tags: image.tags,
            favoritedCount: (count + 1)
        }

        await dispatch(incrementFavoriteCount(payload2));

        setIcon(favoritedStarIcon)
    }

    const handleUnfavorite = async (e) => {
        e.preventDefault();

        setFavorite(!favorite);
        setCount(prevState => prevState - 1);
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
            favoritedCount: (count - 1)
        }

        await dispatch(decrementFavoriteCount(payload2, sessionUser.id))
    }


    const favoritedStarIcon =  (
        <>
            <i
                onClick={handleUnfavorite}
                className="fas fa-star favorited-star"
                ></i>
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


    useEffect(() => {
        if (container.current) {
            anim.current = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData,
            })
            anim.current.setSpeed(3);

            return () => anim.current?.destroy();
        }
    }, []);


    return (
        <>
            <div className='favorite-star-container'>
                {icon}
            </div>
            <p className='favorites-number'>
                {count}
            </p>
        </>
    )
}

export default FavoriteStar;
