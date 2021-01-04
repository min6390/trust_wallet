import {REDUX_CONSTANTS} from '../../common/Constants';

const setVerifyData = (data) => ({
    type: REDUX_CONSTANTS.ADD_TO_VERIFY,
    data: data,
});


export {
    setVerifyData,
}
