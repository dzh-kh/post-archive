import { UserAction, UserActionTypes, UserState } from './types';

const initialState: UserState = {
    user: null,
    error: '',
    isLoading: true,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_REQUEST:
            return { ...state, isLoading: true };
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };
        case UserActionTypes.FETCH_USER_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default: {
            return state;
        }
    }
};

export default userReducer;
