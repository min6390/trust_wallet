import React, {} from 'react';
import TrustTouchableOpacity from './TrustTouchableOpacity';
import TrustView from './TrustView';
import TrustText from './TrustText';
import Dimens from '../../common/Dimens';
import Colors from '../../common/Colors';
import {styles} from './styles';


const TopTabNavigator = (props) => {
    const {navigation,process,firstScreen,
        secondScreen,thirdScreen,duaScreen,
        firstName,secondName} = props;
    const onPressHome = () => {
        navigation?.navigate(firstScreen);
    };
    const onPressCrypt = () => {
        navigation?.navigate(secondScreen);
    };
    const onPressCollection = () => {
        navigation?.navigate(thirdScreen);
    };
    return (
      <TrustView flexDirection={'row'} style={[styles.container,
          duaScreen?{ width: Dimens.scale(280)}:{  width: Dimens.scale(190),}]}>
            <TrustTouchableOpacity
                style={[styles.txtType,
                    process === 0 ? {backgroundColor: Colors.secondBackground} : {backgroundColor: Colors.thirdBackground}]}
                onPress={onPressHome}>
                <TrustText
                    style={styles.text}
                    text={firstName}
                />
            </TrustTouchableOpacity>
            <TrustTouchableOpacity
                style={[styles.txtType,
                    process === 1 ? {backgroundColor: Colors.secondBackground} : {backgroundColor: Colors.thirdBackground}]}
                onPress={onPressCrypt}
            >
                <TrustText
                    style={styles.text}
                    text={secondName}/>
            </TrustTouchableOpacity>
            {duaScreen?<TrustTouchableOpacity
                style={[styles.txtType,
                    process ===2 ? {backgroundColor:  Colors.secondBackground} : {backgroundColor: Colors.thirdBackground}]}
                onPress={onPressCollection}
            >
                <TrustText
                    style={styles.text}
                    text={'COLLECTION'}/>
            </TrustTouchableOpacity>:<TrustView/>}
        </TrustView>
    );
};



export default TopTabNavigator;
