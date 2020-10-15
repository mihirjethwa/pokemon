import {combineReducers} from "redux";
import PokeReducer from "./PokeReducer";
import PokeSingleReducer from "./PokeSingleReducer";

const rootReducer = combineReducers({
    PokeList: PokeReducer,
    PokeSingle : PokeSingleReducer
});

export default rootReducer;