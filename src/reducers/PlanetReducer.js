const PlanetReducer = (state = {planet : {}},action) => {
    switch(action.type){
        case 'FETCH_PLANET_INFO_SUCCESS' : return {...state,planet : action.data}
        default: return state;
    }
}

export default PlanetReducer;