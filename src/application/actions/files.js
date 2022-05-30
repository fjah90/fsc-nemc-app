export const LOAD_FILES = '[files] load';
export const LOAD_FILES_SUCCESS = '[files] load success';
export const LOAD_FILES_FAILURE = '[files] load failure';
export const SET_FILES = '[files] set';

export const loadFiles = {
    type: LOAD_FILES,
};

export const loadFilesSuccess = files => ({
    type: LOAD_FILES_SUCCESS,
    payload: files,
});

export const loadFilesFailure = error => ({
    type: LOAD_FILES_FAILURE,
    payload: error,
});

export const setFiles = files => ({
    type: SET_FILES,
    payload: files,
});