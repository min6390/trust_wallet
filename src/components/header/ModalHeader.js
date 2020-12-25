import React, {} from 'react';
import {styles} from './styles';
import TrustView from '../common/TrustView';
import TrustImage from '../common/TrustImage';
import Images from '../../common/Images';
import TrustText from '../common/TrustText';
import FontSizes from '../../common/FontSizes';
import Colors from '../../common/Colors';
import {useTheme} from '@react-navigation/native';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';

const ModalHeader = (props) => {
    const {onPressBack, onPressSetting, title, hasSetting} = props;
    const {colors} = useTheme();

    return (
        <TrustView style={styles.modalContainer}>
            <TrustTouchableOpacity
                onPress={onPressBack}>
                <TrustImage
                    tintColor={Colors.secondBackground}
                    style={styles.image}
                    localSource={Images.im_left_arrow}
                />
            </TrustTouchableOpacity>
            <TrustText
                style={{fontSize: FontSizes.size35, color: colors.textColor}}
                text={title}
            />
            {hasSetting ?
                <TrustTouchableOpacity
                onPress={onPressSetting}>
                <TrustImage
                    tintColor={Colors.secondBackground}
                    style={styles.image}
                    localSource={Images.im_setting}
                />
            </TrustTouchableOpacity> : <TrustView/>
            }
        </TrustView>
    );
};


export default ModalHeader;
