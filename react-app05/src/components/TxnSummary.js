
const TxnSummary = ({txns}) => {

    let incomes = txns.filter(t=>t.type==='INCOME')
    let totalIncome = incomes.length===0?0:incomes.map(t => t.amount).reduce((a1,a2)=>a1+a2);
    let expenses = txns.filter(t=>t.type==='EXPENSE');
    let totalExpense = expenses.length===0?0:expenses.map(t => t.amount).reduce((a1,a2)=>a1+a2);
    let balance = totalIncome-totalExpense;

    return (
        <tfoot>
            <tr>
                <th colSpan="2">Total</th>
                <th className="text-right">{totalIncome}</th>
                <th className="text-right">{totalExpense}</th>
            </tr>
            <tr>
                <th colSpan="3">Balance</th>
                <th className="text-right">{balance}</th>
            </tr>
        </tfoot>
    );
};

export default TxnSummary;