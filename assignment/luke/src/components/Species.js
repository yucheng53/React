import React from "react";

const Species = ({show}) => {

    return(
        <div>
            <h1>{show.name}</h1>
            <h3>Classification: {show.classification}</h3>
            <h3>Designation: {show.designation}</h3>
            <h3>Skin Color: {show.skin_colors}</h3>
            <h3>Hair Color: {show.hair_colors}</h3>
        </div>
    );
}

export default Species;