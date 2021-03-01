import logo from './logo.svg';
import './App.css';

function App() {
  var elonMask = {com:"spaceX", age:50, job:"tesla", status:"reach"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>my first react app</p>
        <h3>My heading : {elonMask.com+" "+elonMask.job}</h3>
      </header>
    </div>
  );
}

export default App;
