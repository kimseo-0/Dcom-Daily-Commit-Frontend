import produce from 'immer';

export const FETCH_USERS = "FETCH_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export const UPDATE_ADD_USER = "UPDATE_ADD_USER";
export const UPDATE_DELETE_USER = "UPDATE_DELETE_USER";
export const UPDATE_USERS = "UPDATE_USERS";

export const ERROR_USERS = "ERROR_USERS"
export const ERROR_SIGN_UP = "ERROR_SIGN_UP"
export const ERROR_DELETE_USER = "ERROR_DELETE_USER"

export const CLEAR_INFO = "CLEAR_INFO"

const initialState = {
    info: {type: null, message: null},
    signUpInfo: {type: null, message: null, focus: null},
    deleteUserInfo: {type: null, message: null, focus: null},
    usersLoading: true,
    addUserLoading: false,
    deleteUserLoading: false,
    users: [],

    isLoginAdmin: true
}

function users(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return produce(state, draft => {
                draft.info = {type: null, message: null}
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
                draft.info = {type: "success", message: "Success 사용자 등록!"}
                draft.usersLoading = false
                draft.addUserLoading = false
                draft.users.push(action.data.user);
            });
        case UPDATE_DELETE_USER:
            const deleteIndex = state.users.findIndex((user) => {
                return user.id === action.data.githubId
            });
            return produce(state, draft => {
                draft.info = {type: "success", message: "Success 사용자 삭제!"}
                draft.usersLoading = false
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
                draft.signUpInfo = {type: "error", message: action.data.message, focus: action.data.focus}
                draft.usersLoading = false
                draft.addUserLoading = false
            });
        case ERROR_DELETE_USER:
            return produce(state, draft => {
                draft.deleteUserInfo = {type: "error", message: action.data.message, focus: action.data.focus}
                draft.usersLoading = false
                draft.deleteUserLoading = false
            });
        case CLEAR_INFO:
            return produce(state, draft => {
                draft.signUpInfo = {type: null, message: null, focus: null}
                draft.deleteUserInfo = {type: null, message: null, focus: null}
            });
        default:
            return state;
    }
}

export default users;