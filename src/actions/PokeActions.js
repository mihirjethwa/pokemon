import axios from "axios";

export const FetchPoke = () =>async dispatch =>{
    try{
    const fetch = await axios.get('https://pokeapi.co/api/v2/pokemon') ;
    dispatch({
        type: "POKE_FETCHED",
        payload: fetch.data
    })

    }
    catch(e){
        dispatch({
            type: "POKE_ERROR"
        })
    }
} 


export const FetchSinglePoke = (pokemon) =>async dispatch =>{
    try{
    const fetch = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) ;
    dispatch({
        type: "POKESINGLE_FETCHED",
        payload: fetch.data
    })

    }
    catch(e){
        dispatch({
            type: "POKESINGLE_ERROR"
        })
    }
} 

export const PokeDelete = (name) => async dispatch =>{
    dispatch({
        type: "POKE_DELETE",
        name: name,
    })
}