import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";


const Create = props => {
    const [error, setError] = useState({})
    
    const createAuthor = (form) => {
        axios.post("http://localhost:8000/api/author/new", form)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                setError(err.response.data.err.errors);
            })
        console.log("submit form");
    }


    return(
        <div>
            <Link to="/">Home</Link>
            <h5>Add a new author</h5>
            <AuthorForm onSubmitProp = {createAuthor} initialAuthor = {{}} error = {error}/>
        </div>
    )
}

export default Create;