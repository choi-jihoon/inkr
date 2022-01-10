import { csrfFetch } from './csrf';

const LOAD = 'images/LOAD';
const CREATE = 'images/CREATE';
const FAVORITE_UNFAVORITE = 'images/FAVORITE_UNFAVORITE';


export const getAllImages = (state) => Object.values(state.images);

const load = (images) => ({
    type: LOAD,
    images
})

const create = (image) => ({
    type: CREATE,
    image
})

export const favoriteToggle = (image) => {
    return {
        type: FAVORITE_UNFAVORITE,
        image
    }
}



export const getImages = () => async (dispatch) => {
    const response = await csrfFetch(`/api/images`);

    if (response.ok) {
        const images = await response.json();
        dispatch(load(images));
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const postImage = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/images`, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const image = await response.json();
        dispatch(create(image));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const addToFavorites = (data) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}/favorites`, {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        return;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const updateFavoriteCount = (data) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const image = await response.json();
        dispatch(favoriteToggle(image));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}


const initialState = {
    order: []
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allImages = {};
            action.images.forEach((image) => {
                allImages[image.id] = image;
            });
            return {
                ...allImages,
                ...state,
                order: [
                    ...action.images
                ]
            }
        }

        case CREATE: {
            const newState = {
                ...state.images,
                [action.image.id]: action.image,
                order: [
                    action.image,
                    ...state.order
                ]
            };
            return newState;
        }

        case FAVORITE_UNFAVORITE: {
            const favoritedCount = Number(state[action.image.id].favoritedCount);
            const orderedImageIndex = state.order.findIndex(image => image.id === action.image.id);
            const newCount = favoritedCount + 1;
            const newState = {
                ...state,
                [action.image.id]: {
                    ...state[action.image.id],
                    favoritedCount: newCount,
                    Favorites: [
                        ...state[action.image.id].Favorites,
                        action.image
                    ]
                }
            };
            newState.order[orderedImageIndex].favoritedCount = newCount;
            return newState;
        }

        default:
            return state;
    }
}

export default imageReducer;
