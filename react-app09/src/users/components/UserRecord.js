import {connect} from 'react-redux';
import { deleteUserThunk} from '../stateManagement/thunks';

const UserRecord = ({u,remove}) => (
    <tr>
        <td>{u.id}</td>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>
            <button
                onClick={e => remove(u.id)}
                className="btn btn-sm btn-danger">
                DELETE
            </button>
        </td>
    </tr>
);

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
    remove: userId => dispatch(deleteUserThunk(userId))
});

export default connect(mapStateToProps,mapDispatchToProps)(UserRecord);