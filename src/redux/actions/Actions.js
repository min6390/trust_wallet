import {APP_ACTIONS} from "../../common/Constants";

const showAppLoading = (show) => ({
    type: APP_ACTIONS.SHOW_APP_LOADING,
    data: show,
});

const addProductToCart = product => {
    return {
        type: APP_ACTIONS.ADD_PRODUCT_TO_CART,
        item
    };
};

const removeProductFromCart = index => {
    return {
        type: APP_ACTIONS.REMOVE_PRODUCT_FROM_CART,
        index
    };
};
export {
    showAppLoading,
    addProductToCart,
    removeProductFromCart
}
