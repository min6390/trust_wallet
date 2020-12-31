import {REDUX_CONSTANTS} from '../../common/Constants';

const setCharData = (data) => ({
    type: REDUX_CONSTANTS.ADD_TO_CHAR,
    data: data,
});


export {
    setCharData,
}
