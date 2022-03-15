import React, {useState} from "react";
import App from "../App";

const ColorForm = (props) => {
    const [color, setColor] = useState('');

    const handleChange=(e)=> {
        setColor(e.target.value)
    }
    
    const handleSubmit=(e) => {
        e.preventDefault();
        props.onNewColor(color);
        };


    return (
        <div className="container-sm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="colorInput">Color</label>
                <input className="mx-3" type="text" onChange={handleChange} value={color}/>
                <input type="submit" className="btn btn-primary" value="Add"/>                
            </form>
        </div>
    )
}

export default ColorForm;