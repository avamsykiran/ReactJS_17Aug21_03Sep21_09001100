import { ADD_TXN, DELETE_TXN, LOAD_TXNS, UPDATE_TXN,WAIT,ERROR } from './actions';

const compute = txns => {
    let incomes = txns.filter(t => t.type === 'INCOME')
    let totalIncome = incomes.length === 0 ? 0 : incomes.map(t => t.amount).reduce((a1, a2) => a1 + a2);
    let expenses = txns.filter(t => t.type === 'EXPENSE');
    let totalExpense = expenses.length === 0 ? 0 : expenses.map(t => t.amount).reduce((a1, a2) => a1 + a2);
    let balance = totalIncome - totalExpense;

    return { txns, totalIncome, totalExpense, balance };
};

const initialState = () => {
    let txns = [];
    let totalIncome =0;
    let totalExpense=0;
    let balance=0;
    let shallWait=false;
    let errMsg=null;

    return { txns, totalIncome, totalExpense, balance,shallWait,errMsg };
};

const txnsReducer = (state = initialState(), action) => {
    let affectedTxns;
    let shallWait=false;
    let errMsg=null;

    switch (action.type) {
        case LOAD_TXNS:
            affectedTxns = [...action.txns];
            break;
        case ADD_TXN:
            affectedTxns = [...state.txns,action.txn];
            break;
        case DELETE_TXN:
            affectedTxns = state.txns.filter(t => t.id!==action.txnId);
            break;
        case UPDATE_TXN:
            affectedTxns = state.txns.map(t => t.id===action.txn.id?action.txn:t);
            break;
        case WAIT:
            affectedTxns = [...state.txns];
            shallWait=true;
            break;
        case ERROR:
            affectedTxns = [...state.txns];
            errMsg=action.errMsg;
            break;
        default:
            affectedTxns = [...state.txns];
            break;
    }

    return {...compute(affectedTxns),shallWait,errMsg};
};

export default txnsReducer;