const defaultState = {
    isLoading : false,
    data: [],
    error: "",
}

const PokeReducer = (state = defaultState, action) => {
    switch(action.type){
        case "POKE_FETCHED":
            return{
                ...state,
                isloading: false,
                data:action.payload.results,
                error:""
            };
        case "POKE_ERROR":
            return{
                error:"error fetching the pokemon"
            }
        
        default:
            return state;
    }
}

export default PokeReducer;