import {createReducer, updateObject} from '../ReduxUtils';
import {REDUX_CONSTANTS} from '../../common/Constants';

const initialState = {
    verifyData: [],
};

function setVerifyData(state, payload) {
    const newState = updateObject(state, {
        verifyData: payload.data,
    });
    return {...newState}
}

const handles = {};
handles[REDUX_CONSTANTS.ADD_TO_VERIFY] = setVerifyData;

const VerifyReducer = createReducer(initialState, handles);
export default VerifyReducer;
