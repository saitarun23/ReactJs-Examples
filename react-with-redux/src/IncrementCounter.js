import { useDispatch, useSelector } from "react-redux";

function IncrementCounter() {
let n = useSelector(gs=>gs.counter);
let dispatch = useDispatch(); // it use to pass the action and payload to reducer.

let increment = (event)=> {
    //dispatch({type:"INCREMENT"});   // only we are passing action not payload 
    dispatch({type:"INCREMENT",payload:100});   // only we are passing action and data
}
    return(
        <div>
            <h3>Increment Component</h3>
            <p>Counter value {n}</p>
            <br/>
<input type="button" value="Increment" onClick={increment}/>
        </div>
    )
}


export default IncrementCounter;