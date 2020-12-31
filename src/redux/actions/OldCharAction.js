import {REDUX_CONSTANTS} from '../../common/Constants';

const setOldCharData = (data) => ({
    type: REDUX_CONSTANTS.ADD_TO_OLD_CHAR,
    data: data,
});


export {
    setOldCharData,
}
