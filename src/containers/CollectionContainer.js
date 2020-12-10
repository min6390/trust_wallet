import React, {useState} from 'react';
import HomeHeaderTest from '../components/header/HeaderTest';
import HomeContainer from './HomeContainer';
import CryptocurrencyContainer from './CryptocurrencyContainer';
import TrustText from '../components/common/TrustText';
import TopTabNavigatorTest from '../components/common/TabNavigatorTest';
import HomeContainerTest from './HomeCointainerTest';


function Collection() {
const [message,setMessage]=useState('')
    const renderItem = ({message}) => {
        switch (message) {
            case 'home':return<HomeContainerTest/>
            case 'crypto' : return <CryptocurrencyContainer/>
            case 'collection': return <><TrustText text={'Collection'}/></>
            default : return <HomeContainerTest/>
        }
    };
    const callbackFunction = (childData) => {
        setMessage(childData);
    };
    return (
        <>
            <HomeHeaderTest
                parentCallBack={callbackFunction}
            />
            <>
                {renderItem({message})}
            </>
        </>
    );
};

export default Collection;

