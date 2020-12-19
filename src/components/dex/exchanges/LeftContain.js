import React, {useState} from 'react';
import TrustView from '../../common/TrustView';
import Dimens from '../../../common/Dimens';
import StockMarket from './StockMarket';
import TrustTextInput from '../../common/TrustTextInput';
import TrustText from '../../common/TrustText';
import PercentList from '../convert/PercentList';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import ButtonPurchase from './ButtonPurchase';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';

function LeftContain() {
    const {colors}=useTheme();
    const [purchase, setPurchase] = useState(true);
    const onPressBuy = () => {
        if (purchase !== true) {
            setPurchase(!purchase);
        }
    };
    const onPressSell = () => {
        if (purchase === true) {
            setPurchase(!purchase);
        }
    };
    const purchaseItem = () => {
        return (
            <TrustView flexDirection={'row'}
                       style={{marginVertical: Dimens.scale(8)}}
            >
                <ButtonPurchase
                    onPress={onPressBuy}
                    style={[styles.btnBuy, purchase ? {backgroundColor: '#5f9ea0'} : {backgroundColor: '#dcdcdc'}]}
                    text={'Mua'}
                />
                <ButtonPurchase
                    onPress={onPressSell}
                    style={[styles.btnSell, purchase ? {backgroundColor: '#dcdcdc'} : {backgroundColor: '#a52a2a'}]}
                    text={'Bán'}
                />
            </TrustView>
        );
    };
    return (
        <TrustView
            style={{width: Dimens.widthScreen / 2}}
        >
            <StockMarket/>
            {purchaseItem()}
            <TrustTextInput
                label={'Giá BNB'}
                style={[styles.inputText,{color:colors.textColor,borderColor:colors.inactiveTintColor}]}
            />
            <TrustText
                style={{color:colors.textColor,marginVertical:Dimens.verticalScale(7)}}
                text={'~0.0043533 $'}/>
            <TrustTextInput
                label={'Số lượng ANKR'}
                style={[styles.inputText,{color:colors.textColor,borderColor:colors.inactiveTintColor}]}
            />
            <PercentList
                style={{
                    marginVertical: Dimens.scale(10),
                    marginHorizontal: Dimens.scale(5),
                    height: Dimens.scale(20),
                    width: Dimens.scale(36),
                }}
            />
            <TrustText
                style={{color:colors.textColor}}
                text={'Số dư' + ' 0 BNB'}
            />
            <TrustText
                style={{color:colors.textColor}}
                text={'Toàn bộ' + ' 0 BNB'}
            />
            <TrustTouchableOpacity
                style={[styles.btnFinish, purchase ? {backgroundColor:'#5f9ea0' } : {backgroundColor: '#a52a2a'}]}
            >
                <TrustText
                   style={{color:'white'}}
                    text={purchase?'Mua':'Bán'}
                />
            </TrustTouchableOpacity>
        </TrustView>
    );
}

export default LeftContain;
