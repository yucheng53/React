import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Infor = props => {
    const {_id} = useParams();
    const [information, setInfor] = useState({});
    useEffect(() =>{
        console.log(`${props.id}`)
        axios.get(`http://localhost:8000/product/${_id}`)
            .then(res => {
                console.log(res.data);
                setInfor(res.data);
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h3>{information.title}</h3>
            <p>Price: ${information.price}</p>
            <p>Description: {information.description}</p>
        </div>
    )
}


export default Infor;