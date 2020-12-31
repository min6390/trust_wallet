//const params = {'verify_string': 'theirwithdigitalaccessglobalmarketingtowithpremiumstrategybrandsor'};
import {io} from 'socket.io-client';

const ServiceSocket = (props) => {
    const {service, params} = props;
    const socket = io('https://app.vinawallet.net/',
        {transports: ['websocket', 'polling', 'flashsocket']},
    );
    params.key_passer = service;
    const data = {'api_passer': params};
    socket.emit('/socketVnaWallet', data);
    return new Promise((resolve, reject) => {
        socket.on(service, function (response) {
            if (error) {
                console.error('Error sending action: ', error);
                reject(error);
            }
            resolve(response);
        });
    });

};
//const result = socketResponse('get_nws', params);
export default ServiceSocket;
