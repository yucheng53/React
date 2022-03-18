import React from "react";

const Films = ({show}) => {

    return(
        <div>
            <h1>{show.title}</h1>
            <h3>Episode Id: {show.episode_id}</h3>
            <h3>Director: {show.director}</h3>
            <h3>Producer: {show.producer}</h3>
            <h3>Release Date: {show.releas_date}</h3>
        </div>
    );
}

export default Films;