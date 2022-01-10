
import lottie from 'lottie-web/build/player/lottie_light';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { addToFavorites, updateFavoriteCount } from '../../store/images';
import animationData from './favoritestar.json';
import './FavoriteStar.css';


const FavoriteStar = ({ image, tagString }) => {
    const dispatch = useDispatch();
    const container = useRef(null);
    const anim = useRef(null);
    const [favorite, setFavorite] = useState(false);
    const [count, setCount] = useState(image.favoritedCount);
    const sessionUser = useSelector(state => state.session.user);

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
            userId: image.userId,
            imageUrl: image.imageUrl,
            tags: image.tags,
            favoritedCount: (count + 1)
        }

        await dispatch(updateFavoriteCount(payload2));
    }

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
                <button
                    onClick={handleFavorite}
                    className='favorite-star'
                    ref={container}
                >
                </button>
            </div>
            <p className='favorites-number'>
                {count}
            </p>
        </>
    )
}

export default FavoriteStar;
