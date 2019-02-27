const PersonReducer = (state = {person : {}},action) => {
    switch(action.type){
        case 'FETCH_PERSON_INFO_SUCCESS' :
            return {...state,person : action.data}
        default: return state
    }
}

export default PersonReducer;
