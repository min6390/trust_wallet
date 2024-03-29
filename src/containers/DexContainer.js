import React, {useState} from 'react';
import HomeHeaderTest from '../components/header/HeaderTest';
import ConvertContainer from './ConvertContainer';
import ExchangesContainer from './ExchangesContainer';


function DexContainer(props) {
  const {navigation} = props;
  const [message, setMessage] = useState('Convert');
  const renderItem = ({message}) => {
    switch (message) {
      case 'Convert':
        return <ConvertContainer/>;
      case 'Exchange' :
        return <ExchangesContainer/>;
      default :
        return <ConvertContainer/>;
    }
  };
  const callbackScreen = (childData) => {
    setMessage(childData);
  };
  return (
    <>
      <HomeHeaderTest
        firstScreen={'Convert'}
        secondScreen={'Exchange'}
        navigation={navigation}
        firstName={'Chuyển đổi'}
        secondName={'Sàn giao dịch'}
        duaScreen={false}
        callbackScreen={callbackScreen}
      />
      <>
        {renderItem({message})}
      </>
    </>
  );
}

export default DexContainer;

