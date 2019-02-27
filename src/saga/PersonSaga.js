import {all,put,takeLatest,call} from 'redux-saga/effects';
import axios from 'axios';

function* fetchPersonInfo () {
    const personCall = () => {
        return axios.get('https://api.myjson.com/bins/17cx6i')
    }
       
    let { data } = yield call(personCall)
   yield put({type:'FETCH_PERSON_INFO_SUCCESS',data : data})
}

function* personWatcher () {
    yield takeLatest('FETCH_PERSON_INFO',fetchPersonInfo);
}

export default function* PersonSaga (){
    yield all([
        personWatcher(),
    ])
}