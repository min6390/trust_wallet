import {APP_ACTIONS} from "../../common/Constants";

const setDarkMode = (show) => ({
  type: APP_ACTIONS.SET_DARK_MODE,
  data: show,
});

export {
  setDarkMode,

}
