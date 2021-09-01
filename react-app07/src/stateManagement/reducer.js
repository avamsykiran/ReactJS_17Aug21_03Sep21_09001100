import { ADD_TXN, DELETE_TXN, UPDATE_TXN } from './actions';

const compute = txns => {
    let incomes = txns.filter(t => t.type === 'INCOME')
    let totalIncome = incomes.length === 0 ? 0 : incomes.map(t => t.amount).reduce((a1, a2) => a1 + a2);
    let expenses = txns.filter(t => t.type === 'EXPENSE');
    let totalExpense = expenses.length === 0 ? 0 : expenses.map(t => t.amount).reduce((a1, a2) => a1 + a2);
    let balance = totalIncome - totalExpense;

    return { txns, totalIncome, totalExpense, balance };
};

const initialState = () => {
    let txns = [
        { id: 1, header: 'Salary', amount: 55000, type: 'INCOME' },
        { id: 2, header: 'Shares Dividant', amount: 35000, type: 'INCOME' },
        { id: 3, header: 'Rent', amount: 5000, type: 'EXPENSE' },
        { id: 4, header: 'Fuel', amount: 4500, type: 'EXPENSE' },
        { id: 5, header: 'Grocessaries', amount: 5000, type: 'EXPENSE' }
    ];

    return compute(txns);
};

const txnsReducer = (state = initialState(), action) => {
    let affectedTxns;

    switch (action.type) {
        case ADD_TXN:
            affectedTxns = [...state.txns,action.txn];
            break;
        case DELETE_TXN:
            affectedTxns = state.txns.filter(t => t.id!==action.txnId);
            break;
        case UPDATE_TXN:
            affectedTxns = state.txns.map(t => t.id===action.txn.id?action.txn:t);
            break;
        default:
            affectedTxns = [...state.txns];
            break;
    }

    return compute(affectedTxns);
};

export default txnsReducer;