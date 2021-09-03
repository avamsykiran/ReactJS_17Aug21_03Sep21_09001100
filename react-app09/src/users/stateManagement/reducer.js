import { ADD_USER,DELETE_USER,LOAD_USERS,UPDATE_USER,WAIT,ERROR } from './actions';

const usersReducer = (state = {users:[],shallWait:false,errMsg:null}, action) => {
    let affectedUsers;
    let shallWait=false;
    let errMsg=null;

    switch (action.type) {
        case LOAD_USERS:
            affectedUsers = [...action.users];
            break;
        case ADD_USER:
            affectedUsers = [...state.users,action.user];
            break;
        case DELETE_USER:
            affectedUsers = state.users.filter(u => u.id!==action.userId);
            break;
        case UPDATE_USER:
            affectedUsers = state.users.map(u => u.id===action.user.id?action.user:u);
            break;
        case WAIT:
            affectedUsers = [...state.users];
            shallWait=true;
            break;
        case ERROR:
            affectedUsers = [...state.users];
            errMsg=action.errMsg;
            break;
        default:
            affectedUsers = [...state.users];
            break;
    }

    return {users:affectedUsers,shallWait,errMsg};
};

export default usersReducer;