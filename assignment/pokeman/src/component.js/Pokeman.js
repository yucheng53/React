import React,{useState, useEffect} from "react";
import axios from 'axios';



const Pokeman = (props)=> {
    const [pokemons, setPokemons] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500')
            .then(res=>{setPokemons(res.data.results)})
            .catch(err=>console.log(err));
    },[]);

    const handleSubmit = ()=> {
        setDisplay(true);
}

    return(
        <div>
            <button type="submit" onClick={handleSubmit}>Fetch Pokemon</button>
            <ul>
                {display ? pokemons.map((item,i)=>{
                    return <li key={i}>{item.name}</li>
                }): ""}
            </ul>
        </div>
    )
}

export default Pokeman;