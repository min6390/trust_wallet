import React, {} from 'react';
import {ScrollView} from 'react-native';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';


function HomeContainer(props) {
    const {navigation} = props;
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
