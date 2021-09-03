import {connect} from 'react-redux'

const TxnSummary = ({ totalIncome, totalExpense, balance }) => (
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

const mapStateToProps = state => ({
    totalIncome:state.txns.totalIncome,
    totalExpense:state.txns.totalExpense,
    balance:state.txns.balance
});

const mapDispatchToProps = undefined;

export default connect(mapStateToProps,mapDispatchToProps)(TxnSummary);