import { CommentAction, CommentActionTypes, CommentState } from './types';

const initialState: CommentState = {
    comments: { byId: {} },
    error: '',
    loadingPostId: null,
};

const commentReducer = (
    state = initialState,
    action: CommentAction,
): CommentState => {
    switch (action.type) {
        case CommentActionTypes.FETCH_COMMENTS_REQUEST:
            return { ...state, loadingPostId: action.payload };
        case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
            const postId = action.payload[0].postId;
            return {
                ...state,
                loadingPostId: null,
                comments: {
                    byId: {
                        ...state.comments.byId,
                        [postId]: action.payload,
                    },
                },
            };
        case CommentActionTypes.FETCH_COMMENTS_ERROR:
            return { ...state, loadingPostId: null, error: action.payload };

        default: {
            return state;
        }
    }
};

export default commentReducer;
