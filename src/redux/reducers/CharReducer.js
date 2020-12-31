import {createReducer, updateObject} from "../ReduxUtils";
import {REDUX_CONSTANTS} from '../../common/Constants';

const initialState = {
    charData: []
};

function setCharData(state, payload) {
    const newState = updateObject(state, {
        charData: payload.data,
    });

    return newState;
}

const handles = {};
handles[REDUX_CONSTANTS.ADD_TO_CHAR] = setCharData;
const CharReducer = createReducer(initialState, handles);
export default CharReducer;
