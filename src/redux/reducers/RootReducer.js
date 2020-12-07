import {combineReducers} from 'redux';
import LoadingReducer from './LoadingReducer';
import {ThemeReducer} from './ThemeReducer';
import CryptReducer from './CryptReducer';
import SwitchReducer from './SwitchReducer';

const RootReducer = combineReducers({
    loading: LoadingReducer,
    myDarMode: ThemeReducer,
    crypt: CryptReducer,
    switchItem:SwitchReducer
});

export default RootReducer;
