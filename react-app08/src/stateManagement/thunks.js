import axios from 'axios';
import { createWaitAction, createLoadTxnsAction, createErrorAction, createAddTxnAction, createUpdateTxnAction, createDeleteTxnAction } from './actions';

const TXNS_API = "http://localhost:9090/txns";

const handleError = (err,dispatch,errMsg) => {
    console.log(err);
    dispatch(createErrorAction(errMsg));
}

export const loadTxnsThunk = () => (dispatch) => {
    dispatch(createWaitAction());
    axios.get(TXNS_API).then(
        resp => dispatch(createLoadTxnsAction(resp.data)),
        err => handleError(err,dispatch,"Loading transaction failed!")
    );
}

export const addTxnThunk = (txn) => (dispatch) => {
    dispatch(createWaitAction());
    axios.post(TXNS_API,txn).then(
        resp => dispatch(createAddTxnAction(resp.data)),
        err => handleError(err,dispatch,"Saving transaction failed!")
    );
}

export const updateTxnThunk = (txn) => (dispatch) => {
    dispatch(createWaitAction());
    axios.put(`${TXNS_API}/${txn.id}`,txn).then(
        resp => dispatch(createUpdateTxnAction(resp.data)),
        err => handleError(err,dispatch,"Modifing transaction failed!")
    );
}

export const deleteTxnThunk = (txnId) => (dispatch) => {
    dispatch(createWaitAction());
    axios.delete(`${TXNS_API}/${txnId}`).then(
        resp => dispatch(createDeleteTxnAction(txnId)),
        err => handleError(err,dispatch,"Removing transaction failed!")
    );
}


