import store from '../../redux/store/store';
import {useEffect, useState} from 'react';
import {io} from 'socket.io-client';


function SocketConnect() {

  const [dataSocket, setDataSocket] = useState([]);
  const state = store.getState();
  const [socketData,setSocketData]=useState()
  useEffect(() => {
    const socket = io('https://server-coin-wallet.herokuapp.com',
      {transports: ['websocket', 'polling', 'flashsocket']},
    );
    socket.on('SOCKET_COIN_CHANGE', res => {
      const {socketData} = state.socket;
      socketData.push(res);

      if(socketData.length >1){
        socketData.splice(0,res)
        store.dispatch(setSocketData(socketData));
      }

    });
  }, []);


}




export default SocketConnect;
