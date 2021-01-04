import {REDUX_CONSTANTS} from '../../common/Constants';

const setLogin = (data) => ({
    type: REDUX_CONSTANTS.IS_LOGIN,
    data: data,
});


export {
    setLogin,
}
