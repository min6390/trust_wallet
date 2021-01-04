
function ServiceSocket(service, params, socket) {
    params.key_passer = service;
    const data = {'api_passer': params};
    socket.emit('/socketVnaWallet', data);

    return new Promise(function (resolve, reject) {
        socket.once(service, function (response) {
            resolve(response);
        });
    });
}

export default ServiceSocket;
