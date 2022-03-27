import {
    FETCH_USERS, UPDATE_USERS,
    ADD_USER, UPDATE_ADD_USER, UPDATE_DELETE_USER,
    ERROR_USERS, ERROR_SIGN_UP, ERROR_DELETE_USER
} from '../reducers/users'
import {call, takeEvery, all, fork, put} from "redux-saga/effects";
import axios from "axios";
axios.defaults.withCredentials = true;

function fetchUsersAPI() {
    return axios.get('http://49.247.146.181:8080/api/fetch-user',
        {withCredentials: true});
}

function addUsersAPI(data) {
    return axios.post('http://49.247.146.181:8080/api/register-user', null,
         {
            params: {
                githubId: data.githubId,
                korName: data.korName,
                accessCode: data.accessCode,
                userCode: data.userCode,
            },
             withCredentials: true
         });
}

function deleteUsersAPI(data) {
    return axios.post('http://49.247.146.181:8080/api/delete-user', null,
         {
            params: {
                githubId: data.githubId,
                userCode: data.userCode
            },
             withCredentials: true
         },
        );
}


function* fetchUsers(action) {
    try {
        const res = yield call(fetchUsersAPI);
        const users = res.data;
        yield put({type: UPDATE_USERS, data: {users : users}})
    } catch (e) {
        console.error(e);
        yield put({type: ERROR_USERS, data: {message : 'Error : server error.'}})
    }
}

function* addUser(action) {
    try {
        const data = action.data;
        const res = yield call(addUsersAPI, data);
        const user = res.data;

        console.log(user)
        yield put({type: UPDATE_ADD_USER, data: {user : user}})
    } catch (e) {
        console.error(e);
        const data = e.response.data;
        if (data.code === 'REG-001') {
            yield put({type: ERROR_SIGN_UP, data: {message : '존재 하지 않는 Github Id 입니다.', focus: 'githubId'}});
        } else if (data.code === 'REG-002') {
            yield put({type: ERROR_SIGN_UP, data: {message : '잘못된 Access Code 입니다.', focus: 'accessCode'}});
        } else if (data.code === 'REG-003') {
            yield put({type: ERROR_SIGN_UP, data: {message : '이미 존재하는 Github Id 입니다.', focus: 'githubId'}});
        } else if (data.code === 'COM-001') {
            yield put({type: ERROR_SIGN_UP, data: {message : '잘못된 입력 입니다.', focus: 'userCode'}});
        } else {
            yield put({type: ERROR_SIGN_UP, data: {message : 'Error : server error.', focus: ''}});
        }
    }
}

function* deleteUser(action) {
    try {
        const data = action.data;
        const res = yield call(deleteUsersAPI, data);
        const githubId = res.data;
        yield put({type: UPDATE_DELETE_USER, data: {githubId : githubId}})
    } catch (e) {
        console.error(e);
        const data = e.response.data;
        if (data.code === 'DEL-001') {
            yield put({type: ERROR_DELETE_USER, data: {message : '존재 하지 않는 Github Id 입니다.', focus: 'githubId'}});
        } else if (data.code === 'DEL-002') {
            yield put({type: ERROR_DELETE_USER, data: {message : '잘못된 User Code 입니다.', focus: 'userCode'}});
        } else if (data.code === 'COM-001') {
            yield put({type: ERROR_DELETE_USER, data: {message : '잘못된 입력 입니다.', focus: 'userCode'}});
        } else {
            yield put({type: ERROR_DELETE_USER, data: {message : 'Error : server error.', focus: ''}});
        }
    }
}


function* fetchUsersWatch() {
    yield takeEvery("FETCH_USERS", fetchUsers);
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
        fork(addUserWatch),
        fork(deleteUserWatch)
    ])
}