import { useEffect} from 'react'
import TxnRecord from './TxnRecord';
import TxnSummary from './TxnSummary';
import { loadTxnsThunk } from '../stateManagement/thunks';

import { connect } from 'react-redux';

const TxnList = ({ txns, shallWait, errMsg, loadTxns }) => {

    useEffect(loadTxns,[]); //onComponentMount

    return (
        <section className="col-sm-10 mx-auto m-4">
            <h3>Transactions List</h3>

            {shallWait && <p><strong>Please wait while loading data...</strong></p>}
            
            {errMsg && <p>Error: <strong>{{errMsg}}</strong></p>}

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
    )
};

const mapStateToProps = state => ({ 
    txns: state.txns.txns,
    shallWait:state.txns.shallWait,
    errMsg:state.txns.errMsg
});

const mapDispatchToProps = dispatch => ({
    loadTxns : () => dispatch(loadTxnsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(TxnList);