import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react";
import ColorForm from './components/ColorForm';

function App() {
  const [currentColor, setCurrentColor] = useState([]);
    
  const gotColor = ( newColor ) => {
      setCurrentColor([...currentColor,newColor]);
  }
  return (
    <div className='container'>
      <ColorForm onNewColor={gotColor}/> 
      <ul className='list-group list-group-horizontal'>
        {currentColor.map((item,i)=>
          <li className="list-group-item" key={i}><div className="block" style={{backgroundColor:item}}></div></li>
        )}
      </ul>
    </div>
  );
}


export default App;
