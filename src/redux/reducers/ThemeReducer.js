
import {createReducer, updateObject} from '../ReduxUtils';
import {APP_ACTIONS} from '../../common/Constants';

const initialState = {
    darkMode: false
};

function setDarkMode(state, payload) {
    return updateObject(state, {
        darkMode: payload.data,
    });
}

const handles = {};
handles[APP_ACTIONS.SET_DARK_MODE] = setDarkMode;

const ThemeReducer = createReducer(initialState, handles);
export default ThemeReducer;
