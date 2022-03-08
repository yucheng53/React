import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello Dojo!!!
        </h1>
        <label htmlFor='thingsTodo' id='lalala'>Things I neend to do:</label>
        <ul className='thingsToDo'>
          <li>Learn React</li>
          <li>Climb Mt.Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>

      </header>
    </div>
  );
}

export default App;
