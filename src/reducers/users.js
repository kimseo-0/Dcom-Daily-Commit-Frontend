import produce from 'immer';

export const FETCH_USERS = "FETCH_USERS";
export const REFRESH_USERS = "REFRESH_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export const UPDATE_ADD_USER = "UPDATE_ADD_USER";
export const UPDATE_DELETE_USER = "UPDATE_DELETE_USER";
export const UPDATE_USERS = "UPDATE_USERS";

const initialState = {
    usersLoading: true,
    users: []
}

function users(state = initialState, action) {
    switch (action.type) {
        case REFRESH_USERS:
            return {
                usersLoading: true
            }
        case FETCH_USERS:
            return {
                usersLoading: true
            }
        case UPDATE_ADD_USER:
            return produce(state, draft => {
                draft.users.push(action.data.user);
            });
        case UPDATE_DELETE_USER:
            const deleteIndex = state.users.findIndex((user) => {
                return user.id === action.data.githubId
            });
            return produce(state, draft => {
                draft.users.splice(deleteIndex, 1)
            });
        case UPDATE_USERS:
            return {
                usersLoading : false,
                users : action.data.users
            }
        default:
            return state;
    }
}

export default users;