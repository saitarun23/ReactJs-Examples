import axios from "axios";
import { useState } from "react";

function AddProduct() {
let [id,setId]=useState("");
let [pname,setPname]=useState("");
let [price,setPrice]=useState("");
let [msg,setMessage]=useState("")
let storeProduct=(event)=> {
    console.log(event)
    event.preventDefault();     // disable default form action 
    let product = {"id":id,"pname":pname,"price":price}
    //console.log(product)
    if(id.length==0 || pname.length==0 || price.length==0){
            //alert("plz enter all product info")
            setMessage("Plz enter all information")
    }else {
        axios.post("http://localhost:3000/products",product).then(result=> {
            console.log(result)
        }).catch(error=>console.log(error))
        setMessage("")
    }
 
    reset();
}
let reset = (event)=> {
    setId("")
    setPname("")
    setPrice("")
}
    return(
        <div>
            <span style={{"color":"red"}}>{msg}</span>
            <h4>Add Product</h4>
            <form onSubmit={storeProduct}>
                <label>PId</label>
    <input type="number" name="id" onChange={(event)=>setId(event.target.value)} value={id}/><br/>
                <label>PName</label>
    <input type="text" name="pname" onChange={(event)=>setPname(event.target.value)} value={pname}/><br/>
                <label>Price</label>
    <input type="number" name="price" onChange={(event)=>setPrice(event.target.value)} value={price}/><br/>
                <input type="submit" value="Add Product"/>
                <input type="reset" value="reset" onClick={reset}/>
            </form>
        </div>
    )
}
export default AddProduct;