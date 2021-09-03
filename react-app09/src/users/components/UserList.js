import { useEffect} from 'react'
import UserRecord from './UserRecord';
import { loadUsersThunk } from '../stateManagement/thunks';

import { connect } from 'react-redux';

const UserList = ({ users, shallWait, errMsg, loadUsers }) => {

    useEffect(loadUsers,[]); //onComponentMount

    return (
        <section className="col-sm-10 mx-auto m-4">
            <h3>Users List</h3>

            {shallWait && <p><strong>Please wait while loading data...</strong></p>}
            
            {errMsg && <p>Error: <strong>{{errMsg}}</strong></p>}

            {users.length === 0 ?
                <p><strong>No users as of now</strong></p> :
                <table className="table table-border table-hover">
                    <thead>
                        <tr>
                            <th>User#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <UserRecord u={u} key={u.id} />
                        ))}
                    </tbody>
                </table>
            }
        </section>
    )
};

const mapStateToProps = state => ({ 
    users: state.users.users,
    shallWait:state.users.shallWait,
    errMsg:state.users.errMsg
});

const mapDispatchToProps = dispatch => ({
    loadUsers : () => dispatch(loadUsersThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);