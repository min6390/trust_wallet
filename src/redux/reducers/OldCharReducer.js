import {createReducer, updateObject} from "../ReduxUtils";
import {REDUX_CONSTANTS} from '../../common/Constants';

const initialState = {
    oldCharData: []
};

function setOldCharData(state, payload) {
    const newState = updateObject(state, {
        oldCharData: payload.data,
    });
    return newState;
}

const handles = {};
handles[REDUX_CONSTANTS.ADD_TO_OLD_CHAR] = setOldCharData;
const OldCharReducer = createReducer(initialState, handles);
export default OldCharReducer;
