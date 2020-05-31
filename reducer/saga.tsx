
import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import {_userCall,_login} from './actions'
// function* userCall(){
//     console.log("saga")
//     yield put(_userCall());
// }
function* userCall3(){
    console.log("saga 3")
    // yield put(_userCall());
}
function* userCall(stage : any){
    console.log("saga 2",stage)
    // yield put(_userCall());
    // yield takeLatest('CALL_USER')
}
// function* fetchDataSaga() {
//     yield put(USER_INTERACTED_WITH_UI, data);
// }

// function* mySaga() {
//     yield takeEvery(FETCH_DATA, fetchDataSaga);
// }

function* login(){
    
}

function* watchUserCall(){
    console.log("saga")
    yield takeEvery("CALL_USER", userCall);
}
export default function* rootSaga() {
    yield all([watchUserCall()])
    // yield takeLatest("CALL_USER", userCall);
  }