import React, {useEffect, useState} from 'react';

import ServiceSocket from '../services/socket/ServiceSocket';
import {io} from 'socket.io-client';
import store from '../redux/store/store';
import {showAppLoading} from '../redux/actions/LoadingAction';


function CollectionContainer() {
    const [test,setTest] = useState();
    useEffect(() => {
       store.dispatch(showAppLoading(true));
        a()
      //  handles();

    }, []);
   const a= async ()=>{
       const socket = io('https://app.vinawallet.net/',
           {transports: ['websocket', 'polling', 'flashsocket']},
       );
       const params= {'verify_string': 'theirwithdigitalaccessglobalmarketingtowithpremiumstrategybrandsor'}
       setTest(await ServiceSocket('get_nws',params,socket ))
   };

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

