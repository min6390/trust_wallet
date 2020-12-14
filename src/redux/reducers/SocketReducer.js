import {createReducer, updateObject} from '../ReduxUtils';

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
handles['ADD_TO_DATA'] = setSocketData;

const SocketReducer = createReducer(initialState, handles);
export default SocketReducer;
