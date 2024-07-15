import { useState } from "react";
import Customer from "./Customer";
import Employee from "./Employee";

function Header(){ //Child Component 
  return <h2>This is Header component</h2>
}


function Footer(){  //Child Component 
  return <h2>This is Footer component</h2>
}

function App(){ //Parent Component 

  let[city,setCity]=useState("Bangalore");

  return (<div>
    <Header></Header>
    <p>Welcome to My Web Page</p>
    Welcome to React Js
    <p>City in App Component is {city}</p>
    <Employee scity={city} company="IBM"></Employee>
    <hr/>
    <Customer scity={city} company="IBM"></Customer>
    <Footer></Footer>
    </div>)
}

export default App;