
export const ADD_TXN = 'add txn';
export const DELETE_TXN = 'delete txn';
export const UPDATE_TXN = 'update txn';

export const createAddTxnAction = txn => ({
    type:ADD_TXN,txn
});

export const createDeleteTxnAction = txnId => ({
    type:DELETE_TXN,txnId
});

export const createUpdateTxnAction = txn => ({
    type:UPDATE_TXN,txn
});
