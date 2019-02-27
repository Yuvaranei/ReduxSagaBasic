import {fork} from 'redux-saga/effects';
import PersonSaga from './saga/PersonSaga'
import PlanetSaga from './saga/PlanetSaga'

export default function* () {
    yield fork(PersonSaga);
    yield fork(PlanetSaga);
}