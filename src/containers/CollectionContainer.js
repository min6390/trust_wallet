import React, {useState} from 'react';
import HomeHeader from '../components/header/HomeHeader';
import TrustText from '../components/common/TrustText';
import TrustView from '../components/common/TrustView';


function CollectionContainer(props) {
    const {navigation} = props;
    const [mode, setMode] = useState();
    const onPress1 = () => {
        setMode('home');
    };
    const onPress2 = () => {
        setMode('setting');
    };
    const onPress3 = () => {
        setMode('option');
    };
    const renderItem=(mode)=>{
        switch (mode) {
            case 'home' :  return  <HomeHeader/>;
            case 'setting' :
                return  <><TrustText text={'ahihi1'}/></>;
            case 'option' :
                return  <><TrustText text={'ahihi2'}/></>;
            default:return <TrustView/>
        }
    };


    return (

        <TrustView style={{justifyContent: 'space-between', margin: 10}}>
            <TrustView style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <TrustText
                    onPress={onPress1}
                    text={'Button 1'}
                />
                <TrustText
                    onPress={onPress2}
                    text={'Button 2'}
                />
                <TrustText
                    onPress={onPress3}
                    text={'Button 3'}
                />
            </TrustView>
            {renderItem}
            <TrustView>
                {renderItem(mode)}
            </TrustView>
        </TrustView>
    );
}

export default CollectionContainer;
