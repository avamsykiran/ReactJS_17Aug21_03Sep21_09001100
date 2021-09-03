
export const LOAD_USERS = 'load users';
export const ADD_USER = 'add user';
export const DELETE_USER = 'delete user';
export const UPDATE_USER = 'update user';
export const WAIT = 'wait';
export const ERROR = 'error';

export const createLoadUsersAction = users => ({
    type:LOAD_USERS,users
});

export const createAddUserAction = user => ({
    type:ADD_USER,user
});

export const createDeleteUserAction = userId => ({
    type:DELETE_USER,userId
});

export const createUpdateUserAction = user => ({
    type:UPDATE_USER,user
});

export const createWaitAction = () => ({
    type:WAIT
});

export const createErrorAction = errMsg => ({
    type:ERROR,errMsg
});
