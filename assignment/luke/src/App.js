import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Route, useHistory, Switch} from 'react-router-dom';
import './App.css';
import axios from "axios";
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import Error from './components/Error'

function App() {

  const [character, setChar] = useState({catagory:"people",id:""});
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/${character.catagory}/${character.id}/`)
        .then(response=>{
            console.log(response);
            setData(response.data);
        })
}, [character.catagory, character.id]);

  const handleChange = (e) => {
    setChar({
      ...character,
      [e.target.name]: e.target.value
    });
    console.log(character)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      history.push(`/${character.catagory}/${character.id}/`)
    
  }  
  
  return (
    <>
      <form onSubmit={handleSubmit} className ="row g-10">
            <div className ="col-auto">
              <label htmlFor="catagory" className ="col-form-label">Search for:</label>
              <select className="col-form-control" name="catagory" onChange={handleChange}>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="films">films</option>
                <option value="species">species</option>
                <option value="vehicles">vehicles</option>
                <option value="starships">starships</option>
              </select>
            </div>
            <div className ="col-auto">
              <label htmlFor="id" className ="col-form-label">ID:</label>
              <input type="number" name="id" className ="col-form-control" onChange={handleChange}/> 
            </div>
            <div className ="col-auto">
            <button type="submit" className ="btn btn-primary mb-3">Search</button>
            </div>
          </form>

      <Switch>
        <Route exact path = "/people/:id">
          <People show={data}/>
        </Route>
        <Route exact path = "/planets/:id">
          <Planets show={data}/>
        </Route>
        <Route exact path = "/films/:id">
          <Films show={data}/>
        </Route>
        <Route exact path = "/species/:id">
          <Species show={data}/>
        </Route>
        <Route exact path = "/vehicles/:id">
          <Vehicles show={data}/>
        </Route>
        <Route exact path = "/starships/:id">
          <Starships show={data}/>
        </Route>
        <Route exact path = "/error">
          <Error />
        </Route>

      </Switch>
      </>
  );
}

export default App;
