import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
let [parentName,setParentName]=useState("Ajay");
let [child1ReceiveName,setChild1ReceiveName]=useState("");  // receive value from child1
let [child2ReceiveName,setChild2ReceiveName]=useState("");  // receive value from child1

let child1Data = (data)=> {
        //console.log(data)
        setChild1ReceiveName(data);
}
let child2Data = (data)=> {
    //console.log(data)
    setChild2ReceiveName(data);
}
    return(
        <div style={{"backgroundColor":"yellow"}}>
            <h4>Parent Component</h4>
            <p>Parent name in parent component is <b>{parentName}</b></p>
            <p>Child1 name in parent component is <b>{child1ReceiveName}</b></p>
            <p>Child2 name in parent component is <b>{child2ReceiveName}</b></p>
            <hr/>
    <Child1 pname={parentName} handleCallback={child1Data} child2={child2ReceiveName}></Child1>
            <hr/>
    <Child2 pname={parentName} handleName={child2Data} child1={child1ReceiveName}></Child2>
            <hr/>
        </div>
    )
}

export default Parent;