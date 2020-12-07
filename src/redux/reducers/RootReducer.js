import {combineReducers} from 'redux';
import LoadingReducer from './LoadingReducer';
import {ThemeReducer} from './ThemeReducer';
import CryptReducer from './CryptReducer';

const RootReducer = combineReducers({
    loading: LoadingReducer,
    myDarMode: ThemeReducer,
    crypt: CryptReducer,
});

export default RootReducer;
