import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Infor from "./Infor";
import Edit from "./Edit";

const Main = (props) => {
    const [form, setForm] = useState({});
    const [products, setProducts] = useState([]);


    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res);
                setProducts(res.data);
                console.log(products);
            })
            .catch(err => console.log(err))
    },[products])

    const onChangeHandler = (event) => {
        setForm(
            {...form,
            [event.target.name] : event.target.value}
        )
    }

    const onDeleteHandler = (_id, index) => {
        if(window.confirm("Are you sure you want to delete the product?")){
            axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
                .then(res=>{
                    const copyState = [...products];
                    copyState.splice(index, 1);
                    setProducts(copyState);
                })
                .catch(err => console.log(err.response))
        }
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
                                return <div className="mt-3"><Link to={`/${item._id}`} key={i}>{item.title}</Link><span>  </span><Link to={`/api/products/update/${item._id}`} className="btn btn-primary btn-sm">Edit</Link><span>  </span><button onClick={()=>onDeleteHandler(item._id,i)} className="btn btn-danger btn-sm">Delete</button>  </div>
                            })
                        }                    
                </Route>
                <Route exact path="/:_id">
                    <div>
                        <Infor />
                    </div>                        
                </Route>
                <Route exact path="/api/products/update/:_id">
                    <Edit />
                </Route>
            </Switch>
        </div>
    )
}
export default Main;