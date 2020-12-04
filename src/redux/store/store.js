import {createStore} from 'redux';
import RootReducer from "../reducers/RootReducer";
import cartItemsReducer from '../reducers/CartItem';

const store = createStore(cartItemsReducer);

export default store;
