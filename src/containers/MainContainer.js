import React, {useState} from 'react';
import HomeHeaderTest from '../components/header/HeaderTest';
import HomeContainer from './HomeContainer';
import CryptocurrencyContainer from './CryptocurrencyContainer';
import TrustContainer from '../components/common/TrustContainer';
import {NAVIGATION_CONSTANTS} from '../common/Constants';
import CollectionContainer from './CollectionContainer';


function MainCointainer(props) {
    const {navigation} = props;
    const [message, setMessage] = useState('');
    const [icon, setIcon] = useState(false);
    const renderItem = ({message}) => {
        switch (message) {
            case NAVIGATION_CONSTANTS.HOME:
                return <HomeContainer
                    navigation={navigation}
                    callbackIcon={callbackIcon}/>;
            case NAVIGATION_CONSTANTS.CRYPTO :
                return <CryptocurrencyContainer
                    navigation={navigation}
                    callbackIcon={callbackIcon}/>;
            case NAVIGATION_CONSTANTS.COLLECTION:
                return <CollectionContainer
                    navigation={navigation}
                    callbackIcon={callbackIcon}/>;
            default :
                return <HomeContainer
                    navigation={navigation}
                    callbackIcon={callbackIcon}/>;
        }
    };
    const callbackScreen = (childData) => {
        setMessage(childData);
    };

    const callbackIcon = (childData) => {
        setIcon(childData);
    };

    return (
        <TrustContainer
            hasHeader={false}
            renderContentView={() => {
                return (
                    <>
                        <HomeHeaderTest
                            hasIcon={icon}
                            firstScreen={NAVIGATION_CONSTANTS.HOME}
                            secondScreen={NAVIGATION_CONSTANTS.CRYPTO}
                            navigation={navigation}
                            firstName={'Tiền mã hóa'}
                            secondName={'Tài chính'}
                            duaScreen={true}
                            callbackScreen={callbackScreen}
                        />
                        <>
                            {renderItem({message})}
                        </>
                    </>
                );
            }}
        />
    );
}

export default MainCointainer;

