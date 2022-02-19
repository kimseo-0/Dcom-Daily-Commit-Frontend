import {all, fork} from "redux-saga/effects";
import userSaga from "./users";

export default function* rootSaga() {
    yield all([fork(userSaga)])
}