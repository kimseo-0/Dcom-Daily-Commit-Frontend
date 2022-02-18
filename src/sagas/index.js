
import {all, fork} from "redux-saga/effects";
import rankSaga from "./rank";

export default function* rootSaga() {
    yield all([fork(rankSaga)])
}