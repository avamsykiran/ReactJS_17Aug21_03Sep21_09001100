import {connect} from 'react-redux';
import { deleteTxnThunk} from '../stateManagement/thunks';

const TxnRecord = ({t,remove}) => (
    <tr>
        <td>{t.id}</td>
        <td>{t.header}</td>
        <td className="text-right">{t.type === 'INCOME' ? t.amount : ''}</td>
        <td className="text-right">{t.type === 'EXPENSE' ? t.amount : ''}</td>
        <td>
            <button
                onClick={e => remove(t.id)}
                className="btn btn-sm btn-danger">
                DELETE
            </button>
        </td>
    </tr>
);

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
    remove: txnId => dispatch(deleteTxnThunk(txnId))
});

export default connect(mapStateToProps,mapDispatchToProps)(TxnRecord);