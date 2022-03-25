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
                return res.data})
            .then(res => {
                console.log(res);
                setAuthor(res);
                console.log(author);
                setLoaded(true);
            })
            .catch(err =>
                setError(err.response.data.err.errors))
    },[_id])

    const UpdateAuthor = () => {
        axios.patch("http://localhost:8000/api/authors/update/"+_id, author)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        history.push("/");

    }

    return(
        <div>
            {loaded && <AuthorForm onSubmitProp = {UpdateAuthor} initialAuthor = {author} error = {error}/>}
        </div>
    )
}

export default Edit;