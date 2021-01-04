import {combineReducers} from 'redux';
import LoadingReducer from './LoadingReducer';
import ThemeReducer from './ThemeReducer';
import CryptReducer from './CryptReducer';
import SwitchReducer from './SwitchReducer';
import SocketReducer from './SocketReducer';
import HideReducer from './HideReducer';
import CharReducer from './CharReducer';
import OldCharReducer from './OldCharReducer';
import VerifyReducer from './VerifyReducer';
import LoginReducer from './LoginReducer';

const RootReducer = combineReducers({
    loading: LoadingReducer,
    myDarMode: ThemeReducer,
    crypt: CryptReducer,
    switchItem: SwitchReducer,
    socket: SocketReducer,
    hasHide: HideReducer,
    charData:CharReducer,
    oldCharData:OldCharReducer,
    verifyList:VerifyReducer,
    login:LoginReducer,
});

export default RootReducer;
