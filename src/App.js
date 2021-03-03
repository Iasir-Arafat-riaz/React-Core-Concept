import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const array = ["army", "freedom Fighter", "movement leader", "political leader",]
  const products = [{ name: "TV", price: 1000 }, { name: "mobile", price: 500 }, { name: "fridge", price: 1200 }, { name: "laptop", price: 1500 }]
  const displayArray = array.map(content => content)
  console.log(displayArray)

  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
        <ul>
          {array.map(position => <li>{position}</li>)}
        </ul>
        <ul>
          {products.map(product => <div>{product.price}</div>)}
        </ul>
        
        {products.map(prod => <Product des={prod.name} prize={prod.price}></Product>)}

        
        <Product des={products[0].name} prize={products[0].price}></Product>
        <Product des={products[1].name} prize={products[1].price}></Product>
        <Product des={products[2].name} prize={products[2].price}></Product>
        <Product des={products[3].name} prize={products[3].price}></Product>

        <Product2 item={products[0]}></Product2>
        <Product2 item={products[1]}></Product2>


        <Character name="mohammad mahmudur" desc="my university friend"></Character>
        <Character name={array[0]} desc="our country hero"></Character>
        <Character name="toki" desc="classmate + crime partner"></Character>
        <Character name="anjan" desc="school friend forever"></Character>

      </header>
    </div>
  );
}
function Counter() {
  const [set, setCount]= useState(10);
  const addHandler =()=>setCount(set+1); 
  
  return (<div>
    <h1>count: {set}</h1>
    <button onClick={()=>setCount(set-1)}>decrease</button>
    <button onClick={addHandler}>increase</button>
  </div>)
}

function Product2(props) {
  const productStyle = { color: "red", backgroundColor: "silver", margin: "10px", borderRadius: "10px", padding: "10px", float: "left", width: "300px", fontSize: "30px", height: "300px" }
  const { name, price } = props.item;
  return (<div style={productStyle} >

    <h2>{name}</h2>
    <h1>{price}</h1>
    <button> buy Now</button>
  </div>)
}

function Product(props) {
  const proStyle = { color: "silver", backgroundColor: "gray", margin: "10px", borderRadius: "10px", padding: "10px", float: "left", width: "300px" }
  console.log(props)
  return (
    <div style={proStyle}>
      <h2>Product : {props.des}</h2>
      <h1>$:{props.prize}</h1>
      <button>buy Now</button>
    </div>
  )

}

function Character(props) {
  let style = { color: "red", margin: "10px" }
  return (
    <div style={{ border: "2px solid gold", margin: "10px", borderRadius: "10px", padding: "10px" }}>
      <h2 style={style}>{props.name}</h2>
      <p>{props.desc}</p>
    </div>)
}


export default App;
