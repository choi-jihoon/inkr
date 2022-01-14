import { csrfFetch } from './csrf';

const LOAD_SEARCH = 'search/LOAD_SEARCH';

const load = (results) => ({
    type: LOAD_SEARCH,
    images: results
})

export const loadSearchResults = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/search/${data.searchQuery}`);

    if (response.ok) {
        const results = await response.json();
        console.log(results)
        dispatch(load(results));
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

const initialState = {};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SEARCH: {
            const loadImages = {};
            action.images.forEach(image => {
                loadImages[image.id] = image;
            });
            return {
                ...loadImages
            }
        }

        default:
            return state;
    }
}

export default searchReducer;
