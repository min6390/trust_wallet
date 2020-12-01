import React,{} from 'react'
import TrustView from '../../common/TrustView';
import Dimens from '../../../common/Dimens';
import StockMarket from './StockMarket';
import TrustTextInput from '../../common/TrustTextInput';
import TrustText from '../../common/TrustText';
import PercentList from '../convert/PercentList';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import ButtonPurchase from './ButtonPurchase';
import {StyleSheet} from 'react-native';

function LeftContain() {
    const purchaseItem = () => {
        return (
            <TrustView flexDirection={'row'}
                       style={{marginVertical: Dimens.scale(5)}}
            >
                <ButtonPurchase
                    style={[styles.btnBuy, {backgroundColor: '#dcdcdc'}]}
                    text={'Mua'}
                />
                <ButtonPurchase
                    style={styles.btnSell}
                    text={'Bán'}
                />
            </TrustView>
        );
    };
 return(
     <TrustView
         style={{width: Dimens.widthScreen / 2}}
     >
         <StockMarket/>
         {purchaseItem()}
         <TrustTextInput
             style={styles.inputText}
         />
         <TrustText
             text={'~0.0043533 $'}/>
         <TrustTextInput
             style={styles.inputText}
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
             text={'Số dư' + ' 0 BNB'}
         />
         <TrustText
             text={'Toàn bộ' + ' 0 BNB'}
         />
         <TrustTouchableOpacity
             style={styles.btnFinish}
         >
             <TrustText
                 text={'Mua'}
             />
         </TrustTouchableOpacity>
     </TrustView>
 );
}
const styles = StyleSheet.create({
    btnBuy: {
        borderTopStartRadius: Dimens.scale(8),
        borderBottomStartRadius: Dimens.scale(8),
    },
    btnSell: {
        borderTopEndRadius: Dimens.scale(8),
        borderBottomEndRadius: Dimens.scale(8),
    },
    inputText: {
        borderRadius: Dimens.scale(5),
        borderWidth: 1,
    },
    btnFinish: {
        height: Dimens.scale(40),
        width: Dimens.widthScreen / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderRadius: Dimens.scale(10),
        marginVertical: Dimens.scale(10),
    },
});
export default LeftContain
