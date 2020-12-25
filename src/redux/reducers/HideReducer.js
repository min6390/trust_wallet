import {createReducer, updateObject} from '../ReduxUtils';
import {APP_ACTIONS} from '../../common/Constants';

const initialState = {
    hideMoney: false
};

function setHide(state, payload) {
    return updateObject(state, {
        hideMoney: payload.data,
    });
}

const handles = {};
handles[APP_ACTIONS.HAS_HIDE] = setHide;

const HideReducer = createReducer(initialState, handles);
export default HideReducer;
