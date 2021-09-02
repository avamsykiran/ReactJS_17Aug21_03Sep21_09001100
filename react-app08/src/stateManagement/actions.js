
export const LOAD_TXNS = 'load txns';
export const ADD_TXN = 'add txn';
export const DELETE_TXN = 'delete txn';
export const UPDATE_TXN = 'update txn';
export const WAIT = 'wait';
export const ERROR = 'error';

export const createLoadTxnsAction = txns => ({
    type:LOAD_TXNS,txns
});

export const createAddTxnAction = txn => ({
    type:ADD_TXN,txn
});

export const createDeleteTxnAction = txnId => ({
    type:DELETE_TXN,txnId
});

export const createUpdateTxnAction = txn => ({
    type:UPDATE_TXN,txn
});

export const createWaitAction = () => ({
    type:WAIT
});

export const createErrorAction = errMsg => ({
    type:ERROR,errMsg
});
