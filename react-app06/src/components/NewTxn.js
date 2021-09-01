import { useState } from 'react'
import {connect} from 'react-redux';
import { createAddTxnAction } from '../stateManagement/actions';

const NewTxn = ({addTxn}) => {

    let [id,setId] = useState(0);
    let [header,setHeader]=useState('');
    let [amount,setAmount]=useState(0);
    let [type,setType]=useState('');

    const add = () => {
        addTxn({id,header,amount,type});
        setId(0);
        setHeader('');
        setAmount(0);
        setType('');
    };

    return (
        <form className="form-inline mb-2" onSubmit={e => { e.preventDefault(); add(); }}>
            <label>Txn Id:</label>
            <input type="number" className="form-control mr-2" value={id}
                onChange={e => setId(parseInt(e.target.value.lrngth===0?0:e.target.value))} />

            <label>Header:</label>
            <input type="text" className="form-control mr-2" value={header}
                onChange={e => setHeader(e.target.value)} />

            <label>Amount:</label>
            <input type="decimal" className="form-control mr-2" value={amount}
                onChange={e => setAmount(parseFloat(e.target.value.length===0?0:e.target.value))} />

            <label>Type:</label>
            <select className="form-controll mr-2" value={type}
                onChange={e => setType(e.target.value)}>
                <option>--SELECT-----</option>
                <option value="INCOME">INCOME</option>
                <option value="EXPENSE">EXPENSE</option>
            </select>
            <button className="btn btn-sm btn-info">ADD</button>
        </form>
    );
}

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
    addTxn: txn => dispatch(createAddTxnAction(txn))
});

export default connect(mapStateToProps,mapDispatchToProps)(NewTxn);