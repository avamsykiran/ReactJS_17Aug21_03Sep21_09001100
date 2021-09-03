import axios from 'axios';
import { createWaitAction, createLoadUsersAction, createErrorAction, createAddUserAction, 
    createUpdateUserAction, createDeleteUserAction } from './actions';

const USERS_API = "http://localhost:9090/users";

const handleError = (err,dispatch,errMsg) => {
    console.log(err);
    dispatch(createErrorAction(errMsg));
}

export const loadUsersThunk = () => (dispatch) => {
    dispatch(createWaitAction());
    axios.get(USERS_API).then(
        resp => dispatch(createLoadUsersAction(resp.data)),
        err => handleError(err,dispatch,"Loading users failed!")
    );
}

export const addUserThunk = (user) => (dispatch) => {
    dispatch(createWaitAction());
    axios.post(USERS_API,user).then(
        resp => dispatch(createAddUserAction(resp.data)),
        err => handleError(err,dispatch,"Saving user failed!")
    );
}

export const updateUserThunk = (user) => (dispatch) => {
    dispatch(createWaitAction());
    axios.put(`${USERS_API}/${user.id}`,user).then(
        resp => dispatch(createUpdateUserAction(resp.data)),
        err => handleError(err,dispatch,"Modifing user failed!")
    );
}

export const deleteUserThunk = (userId) => (dispatch) => {
    dispatch(createWaitAction());
    axios.delete(`${USERS_API}/${userId}`).then(
        resp => dispatch(createDeleteUserAction(userId)),
        err => handleError(err,dispatch,"Removing user failed!")
    );
}
