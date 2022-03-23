import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

const Main = (props) => {
    const [form, setForm] = useState({});

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res);
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
    }

    return (
        <div>
            <h1>Product Manager</h1>           
            <Switch>
                <Route exact path = "/">
                    <form onSubmit={onSubmitHandler} className="d-flex flex-column justify-content-center form">
                        <div className="form-group">
                            <label for="title">Title:</label>
                            <input type="text" className="form-control" name="title" placeholder="Enter title" onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label for="price">Price:</label>
                            <input type="number" className="form-control" name="price" placeholder="Enter price" onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label for="description">Description:</label>
                            <input type="text" className="form-control" name="description" placeholder="Enter description" onChange={onChangeHandler} />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Create</button>
                    </form>
                </Route>
            </Switch>
        </div>
    )
}
export default Main;