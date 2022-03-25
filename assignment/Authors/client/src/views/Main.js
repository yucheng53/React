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
    },[])

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
                                        <td><Link to={`/edit/${item._id}`} className="btn btn-info">Edit</Link> <Link to="#" className="btn btn-danger ms-2">Delete</Link></td> 
                                    </tr>   
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;