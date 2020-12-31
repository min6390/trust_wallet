import {createReducer, updateObject} from '../ReduxUtils';
import {REDUX_CONSTANTS} from '../../common/Constants';

const initialState = {
  socketData: [],
};

function setSocketData(state, payload) {
  const newState = updateObject(state, {
    socketData: payload.data,

  });
  return {...newState}
}

const handles = {};
handles[REDUX_CONSTANTS.ADD_TO_SOCKET] = setSocketData;

const SocketReducer = createReducer(initialState, handles);
export default SocketReducer;
