import {createReducer, updateObject} from '../ReduxUtils';

const initialState = {
    switchData: ''
};

function setSwitchData(state, payload) {
    return updateObject(state, {
        switchData: payload.data,
    });
}

const handles = {};
handles['ADD_TO_DATA'] = setSwitchData;

const SwitchReducer = createReducer(initialState, handles);
export default SwitchReducer;
