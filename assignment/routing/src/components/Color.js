import React from "react";
import { useParams } from "react-router-dom";

const Color = (props) => {
    const {num,textColor,backColor} = useParams();

    return(
        <div>
            {
                isNaN(+num) ? <h1 style={{color:textColor,backgroundColor:backColor}}>The word is: {num}</h1> : <h1 style={{color:textColor,backgroundColor:backColor}}>The number is: {num}</h1>
            }

        </div>
    )

}

export default Color;