import React from 'react'
import NewTxn from './NewTxn';
import TxnRecord from './TxnRecord';
import TxnSummary from './TxnSummary';
import TxnService from '../service/TxnService';

class TxnList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txns: null,
            errMsg: null
        };
    }

    componentDidMount() {
        TxnService.getAll().then(
            resp => this.setState({ txns: resp.data }),
            err => { console.log(err); this.setState({ errMsg: "Unable to laod data" }) }
        );
    }

    add = txn => {
        TxnService.addTxn(txn).then(
            resp => this.setState({ txns: [...this.state.txns, resp.data] }),
            err => { console.log(err); this.setState({ errMsg: "Unable to save data" }) }
        );
    }

    remove = (id) => {
        if (global.confirm("Are you sure of deleting?")) {
            TxnService.removeTxn(id).then(
                resp => this.setState({ txns: this.state.txns.filter(t => t.id !== id) }),
                err => { console.log(err); this.setState({ errMsg: "Unable to remove data" }) }
            );
        }
    }

    render() {
        return (
            <section className="col-sm-10 mx-auto m-4">
                <h3>Transactions List</h3>

                <NewTxn addTxn={e => this.add(e)} />

                {this.state.errMsg && <p><strong>{this.state.errMsg}</strong></p>}

                {!this.state.txns && !this.state.errMsg && <p>Please wait while laoding data...</p> }

                {this.state.txns && this.state.txns.length===0 && <p><strong>No transactions as of now</strong></p>}

                {this.state.txns && this.state.txns.length > 0 &&
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
                            {this.state.txns.map(t => (
                                <TxnRecord t={t} key={t.id} remove={e => this.remove(e)} />
                            ))}
                        </tbody>
                        <TxnSummary txns={this.state.txns} />
                    </table>
                }
                
            </section>
        );
    }
}

export default TxnList;