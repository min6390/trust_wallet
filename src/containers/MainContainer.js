import React, {useState} from 'react';
import HomeHeaderTest from '../components/header/HeaderTest';
import HomeContainer from './HomeContainer';
import CryptocurrencyContainer from './CryptocurrencyContainer';
import TrustText from '../components/common/TrustText';


function MainCointainer(props) {
  const {navigation} = props;
  const [message, setMessage] = useState('');
  const renderItem = ({message}) => {
    switch (message) {
      case 'Home':
        return <HomeContainer/>;
      case 'Crypto' :
        return <CryptocurrencyContainer/>;
      case 'Collection':
        return <><TrustText text={'Collection'}/></>;
      default :
        return <HomeContainer/>;
    }
  };
  const callbackFunction = (childData) => {
    setMessage(childData);
  };
  return (
    <>
      <HomeHeaderTest
        firstScreen={'Home'}
        secondScreen={'Crypto'}
        navigation={navigation}
        firstName={'Tiền mã hóa'}
        secondName={'Tài chính'}
        duaScreen={true}
        parentCallBack={callbackFunction}
      />
      <>
        {renderItem({message})}
      </>
    </>
  );
}

export default MainCointainer;

