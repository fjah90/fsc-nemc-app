import { LOAD_FILES_SUCCESS, SET_FILES } from "../actions/files";

const initialState = {
    allFiles: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FILES_SUCCESS:
            return { allFiles: action.payload, error: null };
        case SET_FILES:
            return { allFiles: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;