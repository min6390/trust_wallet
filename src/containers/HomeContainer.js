import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';
import ServiceApis from '../services/apis/ServiceApis';


function HomeContainer(props) {
    const {navigation} = props;
    const [body, setBody] = useState([]);
    // useEffect(() => {
    //     //     ServiceApis.getService(res => {
    //     //         setBody(res.data.coin);
    //     //         console.log(res.data.coin);
    //     //     }, err => {
    //     //         alert('fail');
    //     //     });
    //     // }, []);
    return (
        <TrustContainer
            renderContentView={() => {
                return (
                    <ScrollView>
                        <Information/>
                    </ScrollView>
                );
            }}
        />
    );
}

export default HomeContainer;
