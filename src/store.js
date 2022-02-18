import createSagaMiddleware from "redux-saga";
import {compose, applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);
store.sagaTask = sagaMiddleware.run(rootSaga)

export default store;