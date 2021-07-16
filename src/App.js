import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
//import reducer from
import reducer from './reducers';
import { createStore } from 'redux';

const initialState = 'Redux';
const store = createStore(reducer, initialState);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div><HelloWorld tech={store.getState()}/></div>

      </header>
    </div>
  );
}

export default App;
