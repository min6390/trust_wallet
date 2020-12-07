import {createReducer, updateObject} from "../ReduxUtils";

const initialState = {
    cryptData: []
};

function setCryptData(state, payload) {
    const newState = updateObject(state, {
        cryptData: payload.data,
    });
    return newState;
}

const handles = {};
handles['ADD_TO_DATA'] = setCryptData;

const CryptReducer = createReducer(initialState, handles);
export default CryptReducer;
