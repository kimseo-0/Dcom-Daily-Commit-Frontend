import produce from 'immer';

export const FETCH_USERS = "FETCH_USERS";
export const REFRESH_USERS = "REFRESH_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export const UPDATE_ADD_USER = "UPDATE_ADD_USER";
export const UPDATE_DELETE_USER = "UPDATE_DELETE_USER";
export const UPDATE_USERS = "UPDATE_USERS";

export const ERROR_USERS = "ERROR_USERS"
export const ERROR_SIGN_UP = "ERROR_SIGN_UP"
export const ERROR_DELETE_USER = "ERROR_DELETE_USER"

const initialState = {
    info: {type: null, message: null},
    signUpInfo: {type: null, message: null},
    deleteUserInfo: {type: null, message: null},
    usersLoading: true,
    addUserLoading: false,
    deleteUserLoading: false,
    users: []
}

function users(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return produce(state, draft => {
                draft.usersLoading = true
            });
        case REFRESH_USERS:
            return produce(state, draft => {
                draft.usersLoading = true
            });
        case ADD_USER:
            return produce(state, draft => {
                draft.usersLoading = true
                draft.addUserLoading = true
            });
        case DELETE_USER:
            return produce(state, draft => {
                draft.usersLoading = true
                draft.deleteUserLoading = true
            });
        case UPDATE_ADD_USER:
            return produce(state, draft => {
                draft.info = {type: "success", message: "Success Sign up!"}
                draft.addUserLoading = false
                draft.users.push(action.data.user);
            });
        case UPDATE_DELETE_USER:
            const deleteIndex = state.users.findIndex((user) => {
                return user.id === action.data.githubId
            });
            return produce(state, draft => {
                draft.info = {type: "success", message: "Success Delete user!"}
                draft.deleteUserLoading = false
                draft.users.splice(deleteIndex, 1)
            });
        case UPDATE_USERS:
            return produce(state, draft => {
                draft.usersLoading = false
                draft.users = action.data.users
            });
        case ERROR_USERS:
            return produce(state, draft => {
                draft.info = {type: "error", message: action.data.message}
                draft.usersLoading = false
            });
        case ERROR_SIGN_UP:
            return produce(state, draft => {
                draft.signUpInfo = {type: "error", message: action.data.message}
                draft.usersLoading = false
                draft.addUserLoading = false
            });
        case ERROR_DELETE_USER:
            return produce(state, draft => {
                draft.deleteUserInfo = {type: "error", message: action.data.message}
                draft.usersLoading = false
                draft.deleteUserLoading = false
            });
        default:
            return state;
    }
}

export default users;