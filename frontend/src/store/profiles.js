import { csrfFetch } from './csrf';

const LOAD_MY_PROFILE = 'profile/LOAD_MY_PROFILE';

const loadMyProfile = (profile) => ({
    type: LOAD_MY_PROFILE,
    profile
})

export const getMyProfile = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/profiles/${id}`);

    if (response.ok) {
        const profile = await response.json();
        dispatch(loadMyProfile(profile))
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}


const initialState = [];

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_MY_PROFILE: {
            const currProfile = [action.profile];
            return currProfile;
        }

        default:
            return state;
    }
}

export default profileReducer;
