import React, {useEffect, useState} from 'react';

import ServiceSocket from '../services/socket/ServiceSocket';


function CollectionContainer() {
    const [test,setTest] = useState()
    console.log('data================', test);
    useEffect(() => {
        const params= {'verify_string': 'theirwithdigitalaccessglobalmarketingtowithpremiumstrategybrandsor'}
      //  handles();
        setTest( ServiceSocket({service:'get_nws',params:params} ))

    }, []);

    // const handles = async () => {
    //     const socket = io('https://app.vinawallet.net/',
    //         {transports: ['websocket', 'polling', 'flashsocket']},
    //     );
    //     await socket.emit('/socketVnaWallet', {'api_passer': {'key_passer': 'get_coi_lst'}});
    //     await socket.on('get_coi_lst', res => {
    //         setImg(res);
    //     });
    //     socket.on('SOCKET_COIN_CHANGE', (res) => {
    //         setData(res);
    //         console.log(res)
    //     })
    //     setTimeout(f,10000)
    // };
    // function f() {
    //     img.forEach(item => {
    //         data.forEach(data => {
    //             if (item.coin == data.symbol) {
    //                 data.img = item.img;
    //             }
    //         });
    //     })
    //     setNewData(data)
    // }

    return (
        <>

        </>
    );
}

export default CollectionContainer;

