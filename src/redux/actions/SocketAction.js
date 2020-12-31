import {REDUX_CONSTANTS} from '../../common/Constants';

const setSocketData = (data) => ({
  type: REDUX_CONSTANTS.ADD_TO_SOCKET,
  data: data,
});

export {
  setSocketData,
}
