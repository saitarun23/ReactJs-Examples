import { useContext } from "react";
import Child4 from "./Child4";
import MyContext from "./Context";

function Child1() {

let data = useContext(MyContext);   // access context reference 

    return(
        <div>
            <h4>Child1 Component</h4>
            <p>Name in Child1 component is {data.name} </p>
            <Child4></Child4>
        </div>
    )
}

export default Child1;