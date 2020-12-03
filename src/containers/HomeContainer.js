import React, {} from 'react';
import {ScrollView} from 'react-native';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';

function HomeContainer(props) {
    const {navigation,} = props;

    return (
        <TrustContainer
            firstScreen={'Home'}
            secondScreen={'Cryt'}
            firstName={'Home'}
            secondName={'Crypt'}
            duaScreen={true}
            leftIcon={true}
            rightIcon={true}
            process={0}
            navigation={navigation}
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
