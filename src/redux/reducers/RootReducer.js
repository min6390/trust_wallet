import {combineReducers} from 'redux'
import AppReducer from "./AppReducer";
import CartItems from './CartItem';

const RootReducer = combineReducers({
    app: AppReducer,
   // cartItem:CartItems,
});

export default RootReducer;
