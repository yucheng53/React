import React from "react";



const Planets = ({show}) => {

    return(
        <div>
            <h1>{show.name}</h1>
            <h3>Climate: {show.climate}</h3>
            <h3>Terrin: {show.terrain}</h3>
            <h3>Surface Water: {show.surface_water}</h3>
            <h3>Population: {show.population}</h3>
        </div>
    );
}

export default Planets;