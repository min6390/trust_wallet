import {combineReducers} from 'redux';
import LoadingReducer from './LoadingReducer';
import ThemeReducer from './ThemeReducer';
import CryptReducer from './CryptReducer';
import SwitchReducer from './SwitchReducer';
import SocketReducer from './SocketReducer';
import HideReducer from './HideReducer';
import CharReducer from './CharReducer';
import OldCharReducer from './OldCharReducer';

const RootReducer = combineReducers({
    loading: LoadingReducer,
    myDarMode: ThemeReducer,
    crypt: CryptReducer,
    switchItem: SwitchReducer,
    socket: SocketReducer,
    hasHide: HideReducer,
   // posts: Dual
    charData:CharReducer,
    oldCharData:OldCharReducer,
});

export default RootReducer;
