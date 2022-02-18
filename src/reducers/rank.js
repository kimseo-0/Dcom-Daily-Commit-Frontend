// const FETCH_USERS = 'rank/FetchUsers';
// const UPDATE = 'rank/UPDATE';
// const DELETE = 'rank/DELETE';

export const FETCH_USERS = "FETCH_USERS";
export const UPDATE_USERS = "UPDATE_USERS";
export const DELETE_USERS = "DELETE_USERS";
// export const fetchRank = (data) => ({ type: FETCH_USERS, data: data});
// export const updateRank = () => ({ type: UPDATE });
// export const deleteRank = () => ({ type: DELETE });

const initialState = {
    users: []

}

function rank(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return{
                ...state
            };
        case UPDATE_USERS:
            const {users} = action.data
            return {
                users: users
            };
        case DELETE_USERS:
            return {
                users: [state.users[1]]
            };
        default:
            return state;
    }
}

export default rank;