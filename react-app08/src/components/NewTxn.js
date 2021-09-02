import { isValidElement, useState} from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { addTxnThunk } from '../stateManagement/thunks';

const NewTxn = ({ shallWait,errMsg,addTxn }) => {

    let [id, setId] = useState(0);
    let [header, setHeader] = useState('');
    let [amount, setAmount] = useState(0);
    let [type, setType] = useState('');
    let [isSaveAttempted,setSaveAttempted] = useState(false);

    const add = () => {
        addTxn({ id, header, amount, type });
        setSaveAttempted(true);
    };

    return isSaveAttempted && (!shallWait && !errMsg) ?  <Redirect to="/" /> : (
        <section className="col-sm-5 mx-auto m-4">
            <h3>New Transaction</h3>

            {shallWait && <p><strong>Please wait while saving data...</strong></p>}
            
            {errMsg && <p>Error: <strong>{{errMsg}}</strong></p>}

            <form className="form" onSubmit={e => { e.preventDefault(); add(); }}>
                <div class="form-group">
                    <label>Txn Id:</label>
                    <input type="number" className="form-control" value={id}
                        onChange={e => setId(parseInt(e.target.value.lrngth === 0 ? 0 : e.target.value))} />
                </div>
                <div class="form-group">
                    <label>Header:</label>
                    <input type="text" className="form-control" value={header}
                        onChange={e => setHeader(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Amount:</label>
                    <input type="decimal" className="form-control" value={amount}
                        onChange={e => setAmount(parseFloat(e.target.value.length === 0 ? 0 : e.target.value))} />
                </div>
                <div class="form-group">
                    <label>Type:</label>
                    <select className="form-control" value={type}
                        onChange={e => setType(e.target.value)}>
                        <option>--SELECT-----</option>
                        <option value="INCOME">INCOME</option>
                        <option value="EXPENSE">EXPENSE</option>
                    </select>
                </div>
                <button className="btn btn-block btn-info">ADD</button>
            </form>
        </section>
    );
}

const mapStateToProps = state => ({
    shallWait:state.shallWait,
    errMsg:state.errMsg
});

const mapDispatchToProps = dispatch => ({
    addTxn: txn => dispatch(addTxnThunk(txn))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTxn);