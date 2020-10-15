import React, {useState}  from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchPoke,PokeDelete} from "../actions/PokeActions";
import {Link} from "react-router-dom";



const PokeList  = (props) =>{
     const [search, setSearch] = useState("");
     const dispatch = useDispatch();
     const pokeList = useSelector(state => state.PokeList)
     React.useEffect(()=>{
         GetData()
     }, []);
     const GetData=()=>{
         dispatch(FetchPoke())  
     }
     console.log("My obj")
     console.log(pokeList.data)
     const del = (name)=>{
         PokeDelete(name)
     }
    return(
        <diV>   
            <div >
            <input type="text" onChange={e => setSearch(e.target.value)}/>
            <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>
            {pokeList.data.map(val => (
            <li>
            <Link to={`/pokemon/${val.name}`}>
             {val.name}
            </Link>
            <button onClick={()=> del(val)}>delete</button>
            </li>
            
        ))}
        </diV>
    )
};

export default PokeList;
