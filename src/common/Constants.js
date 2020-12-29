const LOCAL_DB_KEYS = {
    TOKEN: 'TOKEN',
};

const NAVIGATION_CONSTANTS = {
    LOGIN: 'LOGIN',
    BOTTOM_TAB: 'BOTTOM_TAB',
    HOME: 'HOME',
    CRYPTO: 'CRYPTO',
    DETAIL: 'DETAIL',
    CONVERT: 'CONVERT',
    SEND_COIN: 'SEND_COIN',
    NOTIFICATION: 'NOTIFICATION',
    MORE: 'MORE',
    MAIN: 'MAIN',
    EXCHANGES: 'EXCHANGES',
    DEX: 'DEX',
    COLLECTION: 'COLLECTION',
    SHOW_ALL: 'SHOW_ALL',
    SCAN_QR:'SCAN_QR',
    RECEIVE_COIN : 'RECEIVE_COIN',
    VERIFY_LOGIN:'VERIFY_LOGIN',
    QR_CODE:'QR_CODE'
};

const REDUX_CONSTANTS = {
    SET_TOKEN: 'SET_TOKEN',
    FETCH_COIN_CHANGE:'FETCH_COIN_CHANGE',
    FETCH_COIN_AMOUNT:'FETCH_COIN_AMOUNT',
    FETCH_EXAMPLE_SUCCESS:'FETCH_EXAMPLE_SUCCESS',
    FETCH_EXAMPLE_ERROR:'FETCH_EXAMPLE_ERROR',
    FETCH_EXAMPLE_REQUEST:'FETCH_EXAMPLE_REQUEST',
};

const HEADER_MODE = {
    HOME: 'HOME',
    DETAIL: 'DETAIL',
    SEARCH: 'SEARCH',
    COLLECTION: 'COLLECTION',
    MORE: 'MORE',
    EXCHANGES: 'EXCHANGES',
    TEST: 'TEST',
};

export const APP_ACTIONS = {
    SHOW_APP_LOADING: 'SHOW_APP_LOADING',
    ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_FROM_CART: 'REMOVE_PRODUCT_FROM_CART',
    SET_DARK_MODE: 'SET_DARK_MODE',
    HAS_HIDE:'HAS_HIDE',
};


export {
    LOCAL_DB_KEYS,
    NAVIGATION_CONSTANTS,
    REDUX_CONSTANTS,
    HEADER_MODE,
};
