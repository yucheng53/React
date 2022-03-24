import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Edit = props => {
    const {_id} = useParams();
    const [Product, setProduct] = useState({});
    const history = useHistory();
    useEffect(() =>{
        axios.get(`http://localhost:8000/product/${_id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    },[_id])

    const onChangeHandler = (event) => {
        setProduct(
            {...Product,
            [event.target.name] : event.target.value}
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:8000/api/products/update/"+_id, Product)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        history.push("/");
    console.log("submit form");        
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="d-flex flex-column justify-content-center form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" value = {Product.title} className="form-control" name="title" placeholder="Enter title" onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" value = {Product.price} className="form-control" name="price" placeholder="Enter price" onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" value = {Product.description} className="form-control" name="description" placeholder="Enter description" onChange={onChangeHandler} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>



            {/* <h3>{information.title}</h3>
            <p>Price: ${information.price}</p>
            <p>Description: {information.description}</p> */}
        </div>
    )
}


export default Edit;