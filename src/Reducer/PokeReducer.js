const defaultState = {
    data: [],
    error: "",
}

const PokeReducer = (state = defaultState, action) => {
    switch(action.type){
        case "POKE_FETCHED":
            return{
                ...state,
                data:action.payload.results,
                error:""
            };
        case "POKE_ERROR":
            return{
                error:"error fetching the pokemon"
            }
        
        case "POKE_DELETE":
            return{
                ...state,
                data: state.data.filter((data, name) => name.name !== data.name)
            }
        default:
            return state;   
    }
}

export default PokeReducer;