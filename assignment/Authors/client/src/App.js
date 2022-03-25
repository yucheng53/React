import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main'
import Edit from './views/Edit'
import Infor from './views/Infor'
import Create from './views/Create';

function App() {
  return (
    <div className="container-sm">
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path = "/">
          <Main />
        </Route>
        <Route exact path = "/new">
          <Create />
        </Route>
        <Route exact path = "/edit/:_id">
          <Edit />
        </Route>
        <Route exact path = "/author/:_id">
          <Infor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
