import React from "react";



const People = ({show}) => {

    return(
        <div>
            <h1>{show.name}</h1>
            <h3>Height: {show.height} cm</h3>
            <h3>Mass: {show.mass} kg</h3>
            <h3>Hair Color: {show.hair_color}</h3>
            <h3>Skin Color: {show.skin_color}</h3>
        </div>
    );
}

export default People;