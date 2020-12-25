import React, {} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../common/Colors';
import TrustText from '../components/common/TrustText';
import TrustView from '../components/common/TrustView';
import Dimens from '../common/Dimens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setDarkMode} from '../redux/actions/ThemeAction';


function SettingContainer() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => {
    return state.myDarMode.darkMode;
  });

  const onToggle = async (value) => {
    try {
        dispatch(setDarkMode(!currentTheme));
      await AsyncStorage.setItem('DarkMode', JSON.stringify(value));
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
