import {createReducer, updateObject} from '../ReduxUtils';

const initialState = {
    switchData: ''
};

function setCryptData(state, payload) {
    return updateObject(state, {
        switchData: payload.data,
    });
}

const handles = {};
handles['ADD_TO_DATA'] = setCryptData;

const SwitchReducer = createReducer(initialState, handles);
export default SwitchReducer;
