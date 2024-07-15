import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import MyContext from "./Context";

function Parent() {
let [name,setName]=useState("Akash")
let [city,setCity]=useState("Bangalore")

    return(
        <div>
            <MyContext.Provider value={{name,city}}>
                <h4>Parent Component</h4>
                <p>Name in parent component is {name}</p>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </MyContext.Provider>
        </div>
    )
}

export default Parent;