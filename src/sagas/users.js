import {FETCH_USERS, UPDATE_USERS,
        ADD_USER, UPDATE_ADD_USER,
        UPDATE_DELETE_USER} from '../reducers/users'
import {call, takeEvery, all, fork, put} from "redux-saga/effects";
import axios from "axios";


function fetchUsersAPI() {
    return axios.get('/api/fetch-user',
        {withCredentials: true});
}

function refreshUsersAPI() {
    return axios.get('/api/refresh-user',
        {withCredentials: true});
}

function addUsersAPI(data) {
    return axios.post('/api/register-user', null,
         {
            params: {
                githubId: data.githubId,
                korName: data.korName
            },
             withCredentials: true
         });
}

function deleteUsersAPI(data) {
    return axios.post('/api/delete-user', null,
         {
            params: {githubId: data.githubId},
             withCredentials: true
         },
        );
}


function* fetchUsers(action) {
    try {
        const res = yield call(fetchUsersAPI);
        const users = res.data;
        console.log(res.data)
        yield put({type: UPDATE_USERS, data: {users : users}})
    } catch (e) {
        console.error(e);
        // yield put({type: UPDATE_USERS, data: {message : ''}})
    }
}

function* refreshUsers(action) {
    try {
        const res = yield call(refreshUsersAPI);
        const users = res.data;
        console.log(users)
        yield put({type: UPDATE_USERS, data: {users : users}})
    } catch (e) {
        console.error(e);
        // yield put({type: UPDATE_USERS, data: {message : ''}})
    }
}

function* addUser(action) {
    try {
        const data = action.data;
        const res = yield call(addUsersAPI, data);
        const user = res.data;
        yield put({type: UPDATE_ADD_USER, data: {user : user}})
    } catch (e) {
        console.error(e);
    }
}

function* deleteUser(action) {
    try {
        const data = action.data;
        console.log(data)
        const res = yield call(deleteUsersAPI, data);
        console.log(res)
        const githubId = res.data;
        yield put({type: UPDATE_DELETE_USER, data: {githubId : githubId}})
    } catch (e) {
        console.error(e);
    }
}


function* fetchUsersWatch() {
    yield takeEvery("FETCH_USERS", fetchUsers);
}

function* refreshUsersWatch() {
    yield takeEvery("REFRESH_USERS", refreshUsers);
}

function* addUserWatch() {
    yield takeEvery("ADD_USER", addUser);
}

function* deleteUserWatch() {
    yield takeEvery("DELETE_USER", deleteUser);
}


export default function* userSaga() {
    yield all([
        fork(fetchUsersWatch),
        fork(refreshUsersWatch),
        fork(addUserWatch),
        fork(deleteUserWatch)
    ])
}