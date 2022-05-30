import { PAGE_LOADED } from "../actions/ui";
import * as filesActions from '../actions/files';

const pageLoadedFlow = ({ log }) => ({ dispatch }) => next => action => {
    next(action);

    if (action.type === PAGE_LOADED) {
        log('page loaded');
        dispatch(filesActions.loadFiles);
    }
}

export default [
    pageLoadedFlow
]