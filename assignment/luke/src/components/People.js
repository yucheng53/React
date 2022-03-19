import React, { useEffect } from "react";
import { useParams } from "react-router-dom";



const People = ({show}) => {
    const {id} = useParams();

    // useEffect(()=>{
    //     console.log("this is where I put the axios call to get people id " + id);
    // })

    return(
        <div>
            <h1>you are searching for id: {id}</h1>
            <h1>{show.name}</h1>
            <h3>Height: {show.height} cm</h3>
            <h3>Mass: {show.mass} kg</h3>
            <h3>Hair Color: {show.hair_color}</h3>
            <h3>Skin Color: {show.skin_color}</h3>
        </div>
    );
}

export default People;