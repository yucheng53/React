import React,{useState, useEffect} from "react";



const Pokeman = (props)=> {
    const [pokemons, setPokemons] = useState([]);



    const handleSubmit = ()=> {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1500")
        .then(res=>res.json())
        .then(res=>{
            setPokemons(res.results);
        })
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <button type="submit" onClick={handleSubmit}>Fetch Pokemon</button>
            <ul>
                {pokemons.map((item,i)=>{
                    return <li key={i}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Pokeman;