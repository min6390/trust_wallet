import {APP_ACTIONS} from "../../common/Constants";

const showAppLoading = (show) => ({
    type: APP_ACTIONS.SHOW_APP_LOADING,
    data: show,
});

export {
    showAppLoading,
}
