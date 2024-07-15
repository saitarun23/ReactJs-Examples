import { useState } from "react";

function Child1(props) {
let [child1Name,setChild1Name]=useState("Ravi");    // state 

    return(
        <div style={{"backgroundColor":"orange"}}>
            <h4>Child1 Component</h4>
            <p>Parent name in child1 component is <b>{props.pname}</b></p>
            <p>Child name in child1 component is <b>{child1Name}</b></p>
            <p>{props.handleCallback(child1Name)}</p>
            <p>Child2 name in Child1 component is <b>{props.child2}</b></p>
        </div>
    )
}

export default Child1;