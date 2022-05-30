import { loadFilesFailure, loadFilesSuccess, LOAD_FILES, PUT_FILE, setFiles } from "../actions/files";
import * as uiActions from '../actions/ui';

const loadFilesFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_FILES) {
        try {
            dispatch(uiActions.setLoading(true));
            const files = await api.files.getAll();
            dispatch(loadFilesSuccess(files));
            dispatch(uiActions.setLoading(false));
        } catch (error) {
            dispatch(loadFilesFailure(error));
        }
    }
}

export default [
    loadFilesFlow,
]