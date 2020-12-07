import React, {useEffect, useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../common/Colors';
import TrustText from '../components/common/TrustText';
import TrustView from '../components/common/TrustView';
import Dimens from '../common/Dimens';
import {io} from 'socket.io-client';

function SettingContainer() {
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => {
        return state.myDarMode;
    });
    const [data, setData] = useState();
    // useEffect(() => {
    //     const socket = io('https://server-coin-wallet.herokuapp.com',
    //         {transports: ['websocket', 'polling', 'flashsocket']},
    //     );
    //     socket.on('SOCKET_COIN_CHANGE', res => {
    //         console.log('res', res);
    //     });
    // }, []);
    return (

        <TrustView flexDirection={'row'}
                   style={{
                       justifyContent: 'space-between',
                       paddingHorizontal: Dimens.scale(10),
                   }}>
            <TrustText
                style={currentTheme ? {color: 'white'} : {color: 'black'}}
                text={'Dark mode'}
            />
            <ToggleSwitch
                isOn={currentTheme}
                onColor={Colors.secondBackground}
                offColor="#dcdcdc"
                size="small"
                onToggle={() => dispatch({type: 'change_theme', payload: !currentTheme})}
            />
        </TrustView>
    );
}

export default SettingContainer;
