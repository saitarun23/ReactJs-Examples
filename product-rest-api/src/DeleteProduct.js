import axios from "axios";
import { useState } from "react";

function DeleteProduct() {
let [id,setId]=useState("");
let deleteProduct = (event)=> {
    event.preventDefault();
    axios.delete("http://localhost:3000/products/"+id).then(result=> {
            console.log(result)
    }).catch(error=> {
        console.log(error)
    })
    setId("");
}
    return(
        <div>
            <h4>Delete Product</h4>
            <form onSubmit={deleteProduct}>
                <label>PId</label>
                <input type="number" name="id" onChange={(event)=>setId(event.target.value)}/><br/>
                <input type="submit" value="delete product"/>

            </form>
        </div>
    )
}

export default DeleteProduct;