import React, {useState} from 'react';
import HomeHeader from '../components/header/HomeHeader';
import TrustText from '../components/common/TrustText';
import TrustView from '../components/common/TrustView';
import TrustContainer from '../components/common/TrustContainer';
import {HEADER_MODE} from '../common/Constants';
import HomeContainer from './HomeContainer';
import CryptocurrencyContainer from './CryptocurrencyContainer';
import {useSelector} from 'react-redux';


function CollectionContainer(props) {
    const {navigation} = props;
    const [mode, setMode] = useState();
    const {switchData} = useSelector(state => state.switchItem);
    console.log(switchData)
    const renderItem = (switchData) => {
        switch (switchData) {
            case 'home' :
                return <HomeContainer/>;
            case 'setting' :
                return <CryptocurrencyContainer/>;
            case 'option' :
                return <><TrustText text={'ahihi2'}/></>;
            default:
                return <TrustView/>;
        }
    };


    return (
        <TrustContainer
            duaScreen={true}
            process={0}
            headerMode={HEADER_MODE.TEST}
            renderContentView={() => {
                return (
                    <>
                        {renderItem(switchData)}
                    </>
                );
            }
            }

        />

    );
}

export default CollectionContainer;
