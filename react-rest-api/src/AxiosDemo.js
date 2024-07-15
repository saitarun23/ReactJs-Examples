import axios from "axios";
import { useState } from "react";
function AxiosDemo() {
let [products,setProducts]=useState([{}])

    let productData= (event)=> {
        //alert("Hi")
        // fetch("https://dummyjson.com/products").then(res=>res.json()).then(data=>{
        //     setProducts(data.products)
        // }).catch(error=>console.log(error));

        axios.get("https://dummyjson.com/products").then(result=> {
           console.log(result)
            console.log(result.data.products)
           setProducts(result.data.products)
        }).catch(error=>console.log(error));
    }
    return(
        <div>
            <h2>Axios Component</h2>
            <input type="button" value="Load Product" onClick={productData}/>
            <br/>
            <ul>
            {products.map(p=><li>Produt Id {p.id} Product Name {p.title} Price : {p.price}</li>)}
            </ul>
        </div>
    ) 
}

export default AxiosDemo;