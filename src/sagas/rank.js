import { FETCH_USERS, UPDATE_USERS } from '../reducers/rank'
import {call, takeEvery, all, fork, put} from "redux-saga/effects";
import axios from "axios";

function getUsersAPI(data) {
    console.log('saga')
    // return axios.get('/api/fetch-user');
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
        }
    ]
    return {data: {users : testUsers}}
}

function* getUsers(action) {
    try {
        const data = action.data;
        const res = yield call(getUsersAPI, data);
        const {users} = res.data;
        yield put({type: UPDATE_USERS, data: {users : users}})
    } catch (e) {
        console.error(e);
    }
}

function* rankWatch() {
    yield takeEvery(FETCH_USERS, getUsers);
}

export default function* rankSaga() {
    yield all([
        fork(rankWatch)
    ])
}