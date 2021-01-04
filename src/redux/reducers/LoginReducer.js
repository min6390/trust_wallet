import {createReducer, updateObject} from '../ReduxUtils';
import { REDUX_CONSTANTS} from '../../common/Constants';

const initialState = {
    isLogin: false
};

function setLogin(state, payload) {
    return updateObject(state, {
        isLogin: payload.data,
    });
}

const handles = {};
handles[REDUX_CONSTANTS.IS_LOGIN] = setLogin;

const LoginReducer = createReducer(initialState, handles);

export default LoginReducer;
