import NewTxn from './NewTxn';
import TxnRecord from './TxnRecord';
import TxnSummary from './TxnSummary';

import { connect } from 'react-redux';

const TxnList = ({ txns }) => (
    <section className="col-sm-10 mx-auto m-4">
        <h3>Transactions List</h3>

        {txns.length === 0 ?
            <p><strong>No transactions as of now</strong></p> :
            <table className="table table-border table-hover">
                <thead>
                    <tr>
                        <th>Txn#</th>
                        <th>Header</th>
                        <th>Credit</th>
                        <th>Debit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {txns.map(t => (
                        <TxnRecord t={t} key={t.id} />
                    ))}
                </tbody>
                <TxnSummary />
            </table>
        }
    </section>
);

const mapStateToProps = state => ({ txns: state.txns });
const mapDispatchToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(TxnList);