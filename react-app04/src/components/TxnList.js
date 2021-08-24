import React from 'react'
import NewTxn from './NewTxn';
import TxnRecord from './TxnRecord';
import TxnSummary from './TxnSummary';

class TxnList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            txns:[
                {id:1,header:'Salary',amount:55000,type:'INCOME'},
                {id:2,header:'Shares Dividant',amount:35000,type:'INCOME'},
                {id:3,header:'Rent',amount:5000,type:'EXPENSE'},
                {id:4,header:'Fuel',amount:4500,type:'EXPENSE'},
                {id:5,header:'Grocessaries',amount:5000,type:'EXPENSE'}
            ]
        };
    }

    add = txn => {
        let txns = [...this.state.txns,txn];
        this.setState({txns});
    }

    remove = (id) => {
        if(global.confirm("Are you sure of deleting?")) {
            let txns = this.state.txns.filter(t => t.id!==id);
            this.setState({txns});
        }        
    }

    componentDidMount(){
        console.log("TxnList Component first time rendering is complete");
    }

    componentDidUpdate(){
        console.log("TxnList Component re-rendering done jsut now");
    }

    render(){
        return (
            <section className="col-sm-10 mx-auto m-4">
                <h3>Transactions List</h3>

                <NewTxn addTxn={e => this.add(e)} />

                {this.state.txns.length===0?
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
                            {this.state.txns.map( t => (
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