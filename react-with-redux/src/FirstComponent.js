import { useState } from "react";
import { useSelector } from "react-redux";

function FirstComponent(){
let [name,setName]=useState("Ravi")
let fname=useSelector(gs=>gs.name)  // to access the value from global variable

    return(
        <div>
            <h3>First Component</h3>
            <p>Name is First Component as local variable {name}</p>
            <p>Name is First Component as global variable {fname}</p>
        </div>
    )
}
export default FirstComponent;