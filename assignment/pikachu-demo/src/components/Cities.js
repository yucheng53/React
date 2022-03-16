import { useParams } from "react-router";
import React from "react";
    
const Cities = (props) => {
    const { cities } = useParams();
    
    return (
        <h1>Welcome to { cities }!</h1>
    );
}

export default Cities;