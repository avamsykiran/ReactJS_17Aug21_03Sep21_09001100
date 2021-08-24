import axios from 'axios';

const TXN_API = "http://localhost:9090/txns";

const TxnService = {
    addTxn: txn => axios.post(TXN_API,txn),
    removeTxn: txnId => axios.delete(`${TXN_API}/${txnId}`),
    getAll: () => axios.get(TXN_API),
    getById: txnId => axios.get(`${TXN_API}/${txnId}`)
};

export default TxnService;