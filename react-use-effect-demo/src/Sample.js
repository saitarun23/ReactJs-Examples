import { useEffect, useState } from "react";

function Sample() {
let [a,setA]=useState(0);
let [b,setB]=useState(0)
let fun1 = (event)=> {
    console.log("fun1 user defined function called..")
}
//fun1();
useEffect(()=> {
    console.log("this useEffectfunction called...")
    
},[a,b])
let changeValue=(event)=> {
    setB(1);
}
    return(
        <div>
            <h2>Sample Component</h2>
            <p>Value of a is {a} and b is {b}</p>
            <input type="button" value="Click Here" onClick={changeValue}/>
        </div>
    )
}

export default Sample;