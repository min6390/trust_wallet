import {APP_ACTIONS} from "../../common/Constants";

const setHide = (show) => ({
    type: APP_ACTIONS.HAS_HIDE,
    data: show,
});

export {
    setHide,

}
