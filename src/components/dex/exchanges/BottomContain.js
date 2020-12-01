import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import TrustView from '../../common/TrustView';
import TrustText from '../../common/TrustText';
import Dimens from '../../../common/Dimens';

function BottomContain() {
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
                    text={'Các đơn hàng được mở'}
                />
                <TrustText
                    style={{color: 'blue'}}
                    text={'Xem tất cả'}
                />
            </TrustView>
            {showInformation ?
                <TrustView
                    style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
                >
                    <TrustText text={'Các đơn hàng đang được mở sẽ xuất hiện ở đây'}/>
                </TrustView> : <></>}
        </>
    );
}

export default BottomContain;
