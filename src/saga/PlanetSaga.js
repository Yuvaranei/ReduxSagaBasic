import {all,put,takeLatest,call} from 'redux-saga/effects';
import axios from 'axios';

function* fetchPlanetInfo () {
    
    const planetCall = () => {
        return axios.get('https://api.myjson.com/bins/1biyey')
    }
    let { data } = yield call(planetCall);
    yield put({type:'FETCH_PLANET_INFO_SUCCESS',data : data})
}

function* planetWatcher () {
    yield takeLatest('FETCH_PLANET_INFO',fetchPlanetInfo);
}

export default function* PlanetSaga (){
    yield all([
        planetWatcher()
    ])
}