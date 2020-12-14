import {combineReducers} from 'redux';
import LoadingReducer from './LoadingReducer';
import {ThemeReducer} from './ThemeReducer';
import CryptReducer from './CryptReducer';
import SwitchReducer from './SwitchReducer';
import SocketReducer from './SocketReducer';

const RootReducer = combineReducers({
    loading: LoadingReducer,
    myDarMode: ThemeReducer,
    crypt: CryptReducer,
    switchItem:SwitchReducer,
    socket: SocketReducer
});

export default RootReducer;
