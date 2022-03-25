import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Main = props => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res);
                setAuthors(res.data);
                console.log(authors);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    },[loaded])

    const onDeleteHandler = (_id, index) => {
        if(window.confirm("Are you sure you want to delete the product?")){
            axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
                .then(res=>{
                    const copyState = [...authors];
                    copyState.splice(index, 1);
                    setAuthors(copyState);
                })
                .catch(err => console.log(err.response))
                
        }
    }
    return (
        <div className="container-sm">
            <Link to="/new">Add an author</Link>
            <h5 className="" >We have quotes by:</h5>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Author</th>
                    <th scope="col">Action available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((item,i)=>{
                            return  loaded && <tr key={i}>                              
                                        <th scope="row">{i+1}</th>
                                        <td><Link to="#">{item.name}</Link></td>
                                        <td><Link to={`/edit/${item._id}`} className="btn btn-info">Edit</Link> <button onClick={()=>onDeleteHandler(item._id, i)} className="btn btn-danger ms-2">Delete</button></td> 
                                    </tr>   
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;