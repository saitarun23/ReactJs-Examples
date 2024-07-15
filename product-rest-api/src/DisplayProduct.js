import axios from "axios";
import { useState } from "react";

function DisplayProduct(){
let [products,setProducts]=useState([{}]);

let loadProductInfo=(event)=>{
    axios.get("http://localhost:3000/products").then(result=>{
        // console.log(result.data)
        setProducts(result.data);
    }).catch(error=>console.log(error))
}

    return(
        <div>
            <h4>All Products</h4>
            <input type="button" value="Load Product" onClick={loadProductInfo}/>
            <br/>
            <table border="1">
                <thead>
                    <tr>
                        <th>PID</th>
                        <th>PName</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p=>
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.pname}</td>
                            <td>{p.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default DisplayProduct;