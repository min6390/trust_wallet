import React, {} from 'react';
import TrustTouchableOpacity from './TrustTouchableOpacity';
import TrustView from './TrustView';
import TrustText from './TrustText';
import Dimens from '../../common/Dimens';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';


const TopTabNavigator = (props) => {
    const {colors} = useTheme();
    const {navigation,process,firstScreen,
        secondScreen,duaScreen,firstName,secondName} = props;
    const onPressHome = () => {
        navigation?.navigate(firstScreen);
    };
    const onPressCrypt = () => {
        navigation?.navigate(secondScreen);
    };
    const onPressCollection = () => {
        navigation?.navigate('Collection');
    };
    return (
      <TrustView flexDirection={'row'} style={[styles.container,
          duaScreen?{ width: Dimens.scale(280),backgroundColor:colors.backgroundTop}:{ backgroundColor:colors.backgroundTop, width: Dimens.scale(190),}]}>
            <TrustTouchableOpacity
                style={[styles.txtType,
                    process === 0 ? {backgroundColor: colors.primary} : {backgroundColor:colors.backgroundTop}]}
                onPress={onPressHome}>
                <TrustText
                    style={styles.text}
                    text={firstName}
                />
            </TrustTouchableOpacity>
            <TrustTouchableOpacity
                style={[styles.txtType,
                    process === 1 ?{backgroundColor: colors.primary} : {backgroundColor:colors.backgroundTop}]}
                onPress={onPressCrypt}
            >
                <TrustText
                    style={styles.text}
                    text={secondName}/>
            </TrustTouchableOpacity>
            {duaScreen?<TrustTouchableOpacity
                style={[styles.txtType,
                    process ===2 ? {backgroundColor: colors.primary} : {backgroundColor:colors.backgroundTop}]}
                onPress={onPressCollection}
            >
                <TrustText
                    style={styles.text}
                    text={'Bộ sưu tập'}/>
            </TrustTouchableOpacity>:<TrustView/>}
        </TrustView>
    );
};



export default TopTabNavigator;
