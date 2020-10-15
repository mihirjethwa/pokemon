const defaultState = {
    data:{},
    error:""
}

const PokeSingleReducer = (state = defaultState, action) => {
    switch(action.type){
        case "POKESINGLE_FETCHED":
            return{
                ...state.data,
                data:action.payload,
                error:""
            };
        case "POKESINGLE_ERROR":
            return{
                error:"error fetching the single pokemon"
            }
        default:
            return state;
    }
}

export default PokeSingleReducer;