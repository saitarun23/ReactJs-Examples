import { useState } from "react";

function Customer(props){
    let[id,setId]=useState(100); // In function component to declare state variable
    let[name,setName]=useState("Ajay");
    let[age,setAge]=useState(23);

    return(<div>
        <h2>Customer Function Component</h2>
        <p>Id is {id} Name is {name} age is {age}</p>
        <p>City is {props.scity} Company is {props.company}</p>
    </div>)

}
export default Customer;