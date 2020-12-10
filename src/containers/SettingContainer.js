import React, {useEffect, useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../common/Colors';
import TrustText from '../components/common/TrustText';
import TrustView from '../components/common/TrustView';
import Dimens from '../common/Dimens';
import AsyncStorage from '@react-native-async-storage/async-storage';


function SettingContainer() {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(false);
    const currentTheme = useSelector(state => {
        return state.myDarMode;
    });

    const onToggle = () => {
       setTheme(!theme);
        dispatch({type: 'change_theme', payload: !currentTheme});
        storeData(JSON.stringify(theme));
    };
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value);
        } catch (e) {
            console.log(e);
        }
    };
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
                onToggle={onToggle}
            />
        </TrustView>
    );
}

export default SettingContainer;
