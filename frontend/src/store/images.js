import { csrfFetch } from './csrf';

const LOAD = 'images/LOAD';
const CREATE = 'images/CREATE';


export const getAllImages = (state) => Object.values(state.images);

const load = (images) => ({
    type: LOAD,
    images
})

const create = (image) => ({
    type: CREATE,
    image
})



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


const initialState = {};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allImages = {};
            action.images.images.forEach((image) => {
                allImages[image.id] = image;
            });
            return {
                ...allImages,
                ...state
            }
        }

        case CREATE: {
            console.log(action.image)
            const newState = {
                ...state,
                [action.image.id]: action.image
            };
            return newState;
        }

        default:
            return state;
    }
}

export default imageReducer;
