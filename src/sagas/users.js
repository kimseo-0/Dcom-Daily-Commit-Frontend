import {FETCH_USERS, UPDATE_USERS,
        ADD_USER, UPDATE_ADD_USER,
        UPDATE_DELETE_USER} from '../reducers/users'
import {call, takeEvery, all, fork, put} from "redux-saga/effects";
import axios from "axios";


function fetchUsersAPI() {
    // return axios.get('http://bambookim.iptime.org:8080/api/fetch-user',
    //     {withCredentials: true});
    const testUsers = [
        {
            "id": "justkode",
            "name": "김수한무",
            "paidFine": 0,
            "startedAt": 1636785193000,
            "unpaidFine": 46000,
            "commitsInARow": 43,
            "totalCommits": 131,
            "participationRate": "67 / 92",
            "rankPower": 896,
            "rank": 1,
            "userImg": "https://avatars.githubusercontent.com/u/28499550?v=4",
            "commitDayCount": 67
        },
        {
            "id": "codeisneverodd",
            "name": "김경현",
            "paidFine": 0,
            "startedAt": 1639317384000,
            "unpaidFine": 31500,
            "commitsInARow": 0,
            "totalCommits": 79,
            "participationRate": "43 / 63",
            "rankPower": 294,
            "rank": 2,
            "userImg": "https://avatars.githubusercontent.com/u/54318460?v=4",
            "commitDayCount": 43
        },
    ]
    return {data: {users : testUsers}}
}

function getUsersAPI() {
    // return axios.get('http://bambookim.iptime.org:8080/api/refresh-user',
    //     {withCredentials: true});
    const testUsers = [
        {
            "id": "justkode",
            "name": "김수한무",
            "paidFine": 0,
            "startedAt": 1636785193000,
            "unpaidFine": 46000,
            "commitsInARow": 43,
            "totalCommits": 131,
            "participationRate": "67 / 92",
            "rankPower": 896,
            "rank": 1,
            "userImg": "https://avatars.githubusercontent.com/u/28499550?v=4",
            "commitDayCount": 67
        },
        {
            "id": "codeisneverodd",
            "name": "김경현",
            "paidFine": 0,
            "startedAt": 1639317384000,
            "unpaidFine": 31500,
            "commitsInARow": 0,
            "totalCommits": 79,
            "participationRate": "43 / 63",
            "rankPower": 294,
            "rank": 2,
            "userImg": "https://avatars.githubusercontent.com/u/54318460?v=4",
            "commitDayCount": 43
        },
    ]
    return {data: {users : testUsers}}
}

function addUsersAPI(data) {
    // return axios.post('http://bambookim.iptime.org:8080/api/register-user',
    //      {
    //         githubId: {date.githubId}
    //         korName: {data.korName}
    //      },
    //     {withCredentials: true});
    const testUser =
        {
            "id": "kimseo-0",
            "name": "김서영",
            "paidFine": 0,
            "startedAt": 1636785193000,
            "unpaidFine": 46000,
            "commitsInARow": 43,
            "totalCommits": 131,
            "participationRate": "67 / 92",
            "rankPower": 896,
            "rank": 4,
            "userImg": "https://avatars.githubusercontent.com/u/28499550?v=4",
            "commitDayCount": 67
        }

    return {data: {user : testUser}}
}

function deleteUsersAPI(data) {
    // return axios.post('http://bambookim.iptime.org:8080/api/fetch-user',
    //      {
    //         githubId: {data.githubId}
    //      },
    //     {withCredentials: true});
    return {data: {githubId : 'justkode'}}
}


function* fetchUsers(action) {
    try {
        const res = yield call(fetchUsersAPI);
        const {users} = res.data;
        console.log(users)
        yield put({type: UPDATE_USERS, data: {users : users}})
    } catch (e) {
        console.error(e);
        // yield put({type: UPDATE_USERS, data: {message : ''}})
    }
}

function* getUsers(action) {
    try {
        const res = yield call(getUsersAPI);
        const {users} = res.data;
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
        const {user} = res.data;
        yield put({type: UPDATE_ADD_USER, data: {user : user}})
    } catch (e) {
        console.error(e);
    }
}

function* deleteUser(action) {
    try {
        const data = action.data;
        const res = yield call(deleteUsersAPI, data);
        const {githubId} = res.data;
        yield put({type: UPDATE_DELETE_USER, data: {githubId : githubId}})
    } catch (e) {
        console.error(e);
    }
}


function* fetchUsersWatch() {
    yield takeEvery("FETCH_USERS", fetchUsers);
}

function* getUsersWatch() {
    yield takeEvery("REFRESH_USERS", getUsers);
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
        fork(getUsersWatch),
        fork(addUserWatch),
        fork(deleteUserWatch)
    ])
}