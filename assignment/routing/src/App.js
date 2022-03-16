import { Switch } from 'react-router-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import './App.css';
import Num from './components/Num';
import Color from './components/Color';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/home"> 
          <h1>Welcome</h1>
        </Route>
        <Route exact path = "/:num">
          <Num />
        </Route>
        <Route exact path = "/:num/:textColor/:backColor">
          <Color />
        </Route>
      </Switch> 
    
    </BrowserRouter>

  );
}

export default App;
