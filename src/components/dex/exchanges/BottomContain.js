import React, {useState} from 'react';
import TrustView from '../../common/TrustView';
import TrustText from '../../common/TrustText';
import Dimens from '../../../common/Dimens';
import {useTheme} from '@react-navigation/native';

function BottomContain() {
    const {colors}=useTheme();
    const [showInformation, setShowInformation] = useState(true);
    return (
        <>
            <TrustView flexDirection={'row'}
                       style={{
                           justifyContent: 'space-between',
                           padding: Dimens.scale(5),
                       }}
            >
                <TrustText
                    style={{color:colors.textColor}}
                    text={'Các đơn hàng được mở'}
                />
                <TrustText
                    style={{color: '#078266'}}
                    text={'Xem tất cả'}
                />
            </TrustView>
            {showInformation ?
                <TrustView
                    style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
                >
                    <TrustText
                        style={{color:colors.content}}
                        text={'Các đơn hàng đang được mở sẽ xuất hiện ở đây'}/>
                </TrustView> : <></>}
        </>
    );
}

export default BottomContain;
