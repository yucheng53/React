import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

const Infor = props => {
    const {_id} = useParams();
    const [information, setInfor] = useState({});
    const history = useHistory();
    useEffect(() =>{
        console.log(`${props.id}`)
        axios.get(`http://localhost:8000/product/${_id}`)
            .then(res => {
                console.log(res.data);
                setInfor(res.data);
            })
            .catch(err => console.log(err))
    },[])

    const onDeleteHandler = () => {
        if(window.confirm("Are you sure you want to delete the product?")){
            axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
                .then(res=>{
                    history.push("/")
                })
                .catch(err => console.log(err.response))
        }
    }

    return (
        <div>
            <h3>{information.title}</h3>
            <Link to={`/api/products/update/${information._id}`} className="btn btn-primary btn-sm">Edit</Link><span>  </span><button onClick={onDeleteHandler} className="btn btn-danger btn-sm">Delete</button>
            <p>Price: ${information.price}</p>
            <p>Description: {information.description}</p>
        </div>
    )
}


export default Infor;