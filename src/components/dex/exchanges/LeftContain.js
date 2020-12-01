import React,{} from 'react'
import TrustView from '../../common/TrustView';
import Dimens from '../../../common/Dimens';
import StockMarket from './StockMarket';
import TrustTextInput from '../../common/TrustTextInput';
import TrustText from '../../common/TrustText';
import PercentList from '../convert/PercentList';
import TrustTouchableOpacity from '../../common/TrustTouchableOpacity';
import ButtonPurchase from './ButtonPurchase';
import {styles} from './styles';

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

export default LeftContain
