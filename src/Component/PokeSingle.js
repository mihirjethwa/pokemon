import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchSinglePoke} from "../actions/PokeActions";

const PokeSingle  = (props) =>{
    const pok = props.match.params.pokemon;
    const dispatch = useDispatch();
     const pokeSingle = useSelector(state => state.PokeSingle)
     React.useEffect(()=>{
        dispatch(FetchSinglePoke(pok))
    });

    return(
        <diV>
            <h1>IMAGES</h1>
            <img src ={pokeSingle.sprites ? pokeSingle.sprites.front_default : ''} alt=""/>
            <img src ={pokeSingle.sprites ? pokeSingle.sprites.back_default : ''}alt=""/>
            <img src ={pokeSingle.sprites ? pokeSingle.sprites.front_shiny : ''}alt=""/>
            <img src ={pokeSingle.sprites ? pokeSingle.sprites.back_shiny : ''}alt=""/>
            <div><h2>Pokemon name: {pokeSingle.name}</h2></div>
            <div><h2>Pokemon Height: {pokeSingle.height}</h2></div>
        </diV>
       
    )
};

export default PokeSingle;
