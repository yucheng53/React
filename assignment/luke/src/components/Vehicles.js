import React from "react";



const Vehicles = ({show}) => {

    return(
        <div>
            <h1>{show.name}</h1>
            <h3>Model: {show.model}</h3>
            <h3>Manufacturer: {show.manufacturer}</h3>
            <h3>Cost In Credits: {show.cost_in_credits}</h3>
            <h3>Length: {show.length}</h3>
        </div>
    );
}

export default Vehicles;