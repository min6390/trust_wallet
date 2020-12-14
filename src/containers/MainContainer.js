import React, {useState} from 'react';
import HomeHeaderTest from '../components/header/HeaderTest';
import HomeContainer from './HomeContainer';
import CryptocurrencyContainer from './CryptocurrencyContainer';
import TrustText from '../components/common/TrustText';


function MainCointainer(props) {
  const {navigation, } = props;
  const [message, setMessage] = useState('');
  const [icon, setIcon] = useState(false);
  const renderItem = ({message}) => {
    switch (message) {
      case 'Home':
        return <HomeContainer callbackIcon={callbackIcon}/>;
      case 'Crypto' :
        return <CryptocurrencyContainer callbackIcon={callbackIcon}/>;
      case 'Collection':
        return <><TrustText text={'Collection'} callbackIcon={callbackIcon}/></>;
      default :
        return <HomeContainer callbackIcon={callbackIcon}/>;
    }
  };
  const callbackScreen = (childData) => {
    setMessage(childData);
  };

  const callbackIcon = (childData) => {
    setIcon(childData);
  };

  return (
    <>
      <HomeHeaderTest
        leftIcon={icon}
        rightIcon={icon}
        firstScreen={'Home'}
        secondScreen={'Crypto'}
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
}

export default MainCointainer;

