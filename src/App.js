import logo from './logo.svg';
import './App.css';

function App() {
  var elonMask = { com: "spaceX", age: 50, job: "tesla", status: "rich" }
  var gates = { com: "microsoft", age: 60, job: "ibm", status: "rich" }
  var coustom = {
    color: "red",
    backgroundColor: "blue"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>my first react app</p>
        <h3 style={{color:"green"}}>Top Company : {elonMask.com + " " + elonMask.job}</h3>
        <h3 style={coustom}>Windows Operating system Provider: {gates.com}</h3>
      </header>
    </div>
  );
}

export default App;
