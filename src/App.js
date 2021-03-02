import logo from './logo.svg';
import './App.css';

function App() {
  const array=["army","freedom Fighter"]

  return (
    <div className="App">
      <header className="App-header">
       
       <Character name="mohammad mahmudur" desc="my university friend"></Character>
       <Character name={array[0]} desc="our country hero"></Character>
       <Character name = "toki" desc="classmate + crime partner"></Character>
       <Character name="anjan" desc="school friend forever"></Character>
        
      </header>
    </div>
  );
}

function Character(props){
  let style= {color:"red"}
  return (
  <div style={{border:"2px solid gold" , margin:"10px", borderRadius:"10px", padding:"10px"}}>
       <h2 style={style}>{props.name}</h2>
       <p>{props.desc}</p>
  </div>)
}


export default App;
