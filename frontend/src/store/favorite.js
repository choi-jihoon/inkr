import { csrfFetch } from './csrf';

const LOAD_FAVORITES = 'favorites/LOAD_FAVORITES';

const loadFavorites = (favImages) => {
    return {
        type: LOAD_FAVORITES,
        favImages
    }
}

export const getFavImages = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites/${id}`)

    if (response.ok) {
        const favImages = await response.json();
        console.log(favImages);
        dispatch(loadFavorites(favImages));
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

const initialState = {}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_FAVORITES: {
            const allFaves = {};
            action.favImages.forEach((image) => {
                allFaves[image.id] = image;
            });
            return {
                ...allFaves,
                ...state
            }
        }

        default:
            return state;
    }
}

export default favoriteReducer;
