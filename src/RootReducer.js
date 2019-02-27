import {combineReducers} from 'redux';
import personReducer from './reducers/PersonReducer'
import planetReducer from './reducers/PlanetReducer'

const rootReducer = combineReducers({
    personReducer,
    planetReducer
})

export default rootReducer;