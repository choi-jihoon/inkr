import { csrfFetch } from './csrf';

const LOAD = 'images/LOAD';
const CREATE = 'images/CREATE';
const FAVORITE = 'images/FAVORITE';
const UNFAVORITE = 'images/UNFAVORITE'

const EDIT_POST = 'images/EDIT_POST';
const DELETE = 'images/DELETE'

export const getAllImages = (state) => Object.values(state.images);

const load = (images) => ({
    type: LOAD,
    images
})

const create = (image) => ({
    type: CREATE,
    image
})

const edit = (image) => ({
    type: EDIT_POST,
    image
})

const deleteImage = (imageId) => ({
    type: DELETE,
    imageId
})

const favorite = (image, userId) => {
    return {
        type: FAVORITE,
        image,
        userId
    }
}

const unfavorite = (image, userId) => {
    return {
        type: UNFAVORITE,
        image,
        userId
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
    const response = await csrfFetch(`/api/images/${data.imageId}/favorites`, {
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

export const deleteFromFavorites = (data) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.imageId}/favorites`, {
        method: 'DELETE',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        return;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const decrementFavoriteCount = (data, userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}/favorites`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const image = await response.json();
        dispatch(unfavorite(image, userId));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const incrementFavoriteCount = (data, userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}/favorites`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const image = await response.json();
        dispatch(favorite(image, userId));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const editArtistImageFromHome = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const image = await response.json();
        dispatch(edit(image));
        return image;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const deleteArtistImageFromHome = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteImage(data.id));
        return;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}




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
        dispatch(loadFavorites(favImages));
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}



const initialState = {
    order: [],
    favoritesPage: {},
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const loadImages = {};
            action.images.forEach((image) => {
                loadImages[image.id] = image;
            });
            return {
                ...state,
                ...loadImages,
                order: [
                    ...action.images
                ]
            }
        }


        case LOAD_FAVORITES: {
            const allFaves = {};
            action.favImages.forEach((image) => {
                allFaves[image.id] = image;
            })
            const newState = {
                ...state,
                favoritesPage: {
                    ...allFaves
                }
            }
            return newState;
        }

        case CREATE: {
            const newState = {
                ...state,
                [action.image.id]: action.image,
                order: [
                    action.image,
                    ...state.order
                ]
            };
            return newState;
        }

        case FAVORITE: {
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
                        {userId: action.userId, imageId: action.image.id}
                    ]
                }
            };
            newState.order[orderedImageIndex].favoritedCount = newCount;
            return newState;
        }

        case UNFAVORITE: {
            const oldFavoritedCount = Number(state[action.image.id].favoritedCount);
            const favoriteIndex = state[action.image.id].Favorites.findIndex(favorite => favorite.userId === action.userId);
            const newCount = oldFavoritedCount - 1;
            const newState = {
                ...state,
                [action.imageId]: {
                    ...state[action.image.id],
                    favoritedCount: newCount,
                    Favorites: [
                        ...state[action.image.id].Favorites
                    ]
                }
            }
            newState[action.image.id].Favorites.splice(favoriteIndex, 1);
            return newState;
        }

        case EDIT_POST: {
            const orderedImageIndex = state.order.findIndex(image => image.id === action.image.id);
            const newState = {
                ...state,
                [action.image.id]: action.image
            }
            newState.order[orderedImageIndex] = action.image;
            return newState;
        }

        case DELETE: {
            const newState = { ...state };
            const deleteIndex = state.order.findIndex(image => image.id === action.imageId);
            delete newState[action.imageId];
            newState.order.splice(deleteIndex, 1);
            return newState;
        }

        default:
            return state;
    }
}

export default imageReducer;
