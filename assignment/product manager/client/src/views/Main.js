import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import Infor from "./Infor";

const Main = (props) => {
    const [form, setForm] = useState({});
    const [products, setProducts] = useState([]);
    const {_id} = useParams();

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res);
                setProducts(res.data);
                console.log(products);
            })
            .catch(err => console.log(err))
    },[])

    const onChangeHandler = (event) => {
        setForm(
            {...form,
            [event.target.name] : event.target.value}
        )
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/product/new", form)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        console.log("submit form");
        setForm({});
    }

    return (
        <div>
            <h2>Product Manager</h2>           
            <Switch>
                <Route exact path = "/">
                    <form onSubmit={onSubmitHandler} className="d-flex flex-column justify-content-center form">
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" value = {form.title} className="form-control" name="title" placeholder="Enter title" onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="number" value = {form.price} className="form-control" name="price" placeholder="Enter price" onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" value = {form.description} className="form-control" name="description" placeholder="Enter description" onChange={onChangeHandler} />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Create</button>
                    </form>
                    <hr></hr>
                    <h1>All Products:</h1>
                        {
                            products.map((item,i) => {
                                return <div><Link to={`/${item._id}`} key={i}>{item.title}</Link></div>
                            })
                        }                    
                </Route>
                <Route exact path="/:_id">
                    <div>
                        <Infor />
                    </div>
                        
                </Route>
            </Switch>
        </div>
    )
}
export default Main;