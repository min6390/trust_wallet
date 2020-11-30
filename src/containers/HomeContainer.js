import React, {} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import Information from '../components/home/Information';


function HomeContainer(props) {
    const {navigation} = props;
    return (
        <TrustContainer
            renderContentView={() => {
                return (
                    <>
                        <Information/>
                    </>
                );
            }}
        />
    );
}

export default HomeContainer;
