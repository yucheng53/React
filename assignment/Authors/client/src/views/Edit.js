import React, { useState } from "react";
import AuthorForm from "../components/AuthorForm";
import { useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Edit = props => {
    const [author, setAuthor] = useState({});             
    const {_id} = useParams();
    const history = useHistory();
    const [error, setError] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get(`http://localhost:8000/author/${_id}`)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
                console.log(author);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
                setError(err.response.data.err.errors)
            })
                
    },[_id])

    const UpdateAuthor = (author) => {
        axios.patch("http://localhost:8000/api/authors/update/"+_id, author)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            setError(err.response.data.err.errors);
        })
        history.push("/");
    }

    return( 
        <div>
            {loaded && <AuthorForm onSubmitProp = {UpdateAuthor} initialAuthor = {author} error = {error} />}
        </div>
        )
}

export default Edit;