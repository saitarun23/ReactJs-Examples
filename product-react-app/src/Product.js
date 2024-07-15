import { useState } from "react";
import './App.css';

function Product(){
let [pid,setPid]=useState(0);
let [pname,setPname]=useState("");
let [price,setPrice]=useState(0.0);
let [url,setUrl]=useState("");
let [buttonValue,setButtonValue]=useState("Add Product");

let [products,setProducts]=useState([
    {pid:100,pname:"TV",price:54000,url:"data:image/jpeg;base64,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"},
    {pid:200,pname:"Computer",price:45000,url:"data:image/jpeg;base64,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"}

])
//let fun1 = (event)=> setPid(event.target.value) 
let storeProduct = (event)=> {
    event.preventDefault();
    //console.log(pid+" "+pname+" "+price+" "+url)
    let tempProduct = {"pid":pid,"pname":pname,"price":price,"url":url}
    //console.log(tempProduct)
    //setProducts(tempProduct);// previous product remove and add new tempProduct. 
    
    if(buttonValue=="Add Product"){

    let result = products.find(p=>p.pid==pid);  // if record present it return that record 
                                    // else it return undefined 
    if(result==undefined){
    setProducts(previousProduct=>{
        return [...previousProduct,tempProduct]
    });
}else {
        alert("product id must be unique")
}
    }else {
        // button value update product this code execute 
        console.log(tempProduct);
        let updateProducts = [...products]; // copy all product values and store in updateProducts variables 
        let index = updateProducts.findIndex(p=>p.pid==pid);    // find the index 
        //1st parameter index, 2nd parameter number of record delete, 3rd parameter add new record. 
        updateProducts.splice(index,1,tempProduct); // using index remove that record and add tempProduct record 
        //alert("ready to update the product");
        setProducts(updateProducts);    // update new product in setProducts variables. 
        setButtonValue("Add Product");
    }
    reset();
}
let reset = (event)=> {
    setPid("")
    setPname("")
    setPrice("")
    setUrl("")
}

let updateProduct = (event,product)=> {
    console.log(product);
    setPid(product.pid)
    setPname(product.pname)
    setPrice(product.price)
    setUrl(product.url)
    setButtonValue("Update Product");
}

let deleteProduct = (event,index)=> {
    console.log(index)
    let tempProduct = [...products];   // copy all product in tempProdut variable only values
    tempProduct.splice(index,1) // index 0 and remove 1 record 
    setProducts(tempProduct);// update new array product  
}
    return(
        <div className="container">
            <h4 className="headingTag">Add Product</h4>
            <form onSubmit={storeProduct}>
                <label>PId</label>
    <input type="number" name="pid" onChange={(event)=>setPid(event.target.value)}
    value={pid} className="form-control"/><br/>
                <label>PName</label>
    <input type="text" name="pname" onChange={(event)=>setPname(event.target.value)}
    value={pname} className="form-control"/><br/>
                <label>Price</label>
    <input type="number" name="price" onChange={(event)=>setPrice(event.target.value)}
    value={price} className="form-control"/><br/>
                <label>Url</label>
    <input type="url" name="url" onChange={(event)=>setUrl(event.target.value)}
    value={url} className="form-control"/><br/>
    <input type="submit" value={buttonValue} className="btn btn-success"/>
    <input type="reset" value="reset" className="btn btn-info"/>
            </form>
            <hr/>
            <table className="table">
                <thead>
                <tr>
                    <th>SrNo</th>
                    <th>PId</th>
                    <th>PName</th>
                    <th>Price</th>
                    <th>URL</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((p,index)=><tr key={index}>
                        <td>{index+1}</td>
                        <td>{p.pid}</td>
                        <td>{p.pname}</td>
                        <td>{p.price}</td>
                        <td><img src={p.url} width="100px" height="100px"/></td>
        <td>
        <a onClick={(event)=>deleteProduct(event,index)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAbFBMVEX////8AAX8AAD9XV3/7e79hIX/7+/9amv8ICH8MDH/4eH8Ky3+sLH9gYH/9vb9U1T8SEj9d3f8FRX9iYr+1NT+wMH+qar9lJX8Ozz/29v8YWH9bm/9WFj9T1D8JSb+paX9nJz+t7j+zMz8QULb0Oj7AAAEJUlEQVR4nO3c7XKqQAwGYI2IiigtoOJXS9v7v8cjojhnCsmS5ATOzL6/Hfu0Sjcky04m3OTvMO0VeM/ZP4ydeAp9mTCNrZVh2hN5h6ahMfPAUN6cB2PmnMecGzM3PObGMz3TMz3TM0fOZMWamS3XjCwzY2YQsRIYM318fHx8/s42irO5cbI42vZChnHBW7OlKeIed/LHE/Rtaejk9mNPR1dlPhDyAXXsNEWcvosiNI1clNvzoMqb8+xyIe2G+8QfTNg5MJOBlTdn4sAc+o9Z/Tlp5ffgypuTvti/xsD8IpnxGJh089szPdMzPdMz+zJHEJq5S2aDJ6EruW0wgvS7wfTx8fHx6ZXDxXLpuZRMJnPgxw13Vw1vEw+7LNozmXtbJnfLl21nwanB1ZadJdO5/foruWXXC4A7HY5smdwic2vLZCqNmSmXadqRhRWbubRkvrGZhSXzwmZeLZlnNnNGMx9lg+AFz9fx9/7QW8YhnX3GWdHNACiyuEzowR18spkZ9ebwca8Xgs7fB2B+H+nuyavRYSzQFbJEaoqvroutuX7Lf8ikSqTXytE1TYJm7Ex9PeGbzaRKJFg8Xxm0KyBt6gnivwaA8xz9V6iJ22sbe9j+3YNVs9lgQTGdxtOtORKflCbTbYreGqqS02Su+ZsRLZlvAuaHHfPEb70GP3ZMp50T7QkvdswNn0ntTtFkCnYdb4naQ5NZ8pnUw0uaTG5rpgrRRRoL89OK6TJY6w5RySkyU24HyZa5ljwqGuOrpSJzJWHu8HsYRWbBL5BuBSe+qCsyBZXHZJKvrJiJZOgb4X0PReZMoKRKpLEwQ/xGS5G5aAc4Bq/kFJmyZ5jxLpIiU/ZE+MmKye8gVcELTkWm7LgCvNmlyJRUHlSHSpEpWSupglORKXuyEd8xp8iUHVGBN7vUmPwRW53IiilSTgIj5lLGDI2Y/BHbPfjYUo95lTHxlrkekz+7qoMOSvSY0rNo1jbMUsh8s2FKWjNV0EpOj8mfXdVBT5zQY/JnV3XQEkmPKT3FCy2RtJiSEVsdtERSYwpmV3XQsaUaU9RBqpKbMC/S8z5smCfpwW3odFWNuZA+3YA+Xq3GfBczsdahGlN8Yk6ANbvUmKWUGWKL+oiY6NtrMWUdpAkxtlRiwlRaIOFdJC2maHZVBxtbajGX0joOr+S0mKIRmx1zJa08qrEl8v5KzEJ+FusXslpqMfn7dZvskDv1ETGxsaUW0+UcDyI50lDQYspmV/dgJZIWU+HkwxAZW2oxNU4+RNozWszy/2BKO0hVkBN94PR8Ueem3YaJfXfkSzra7Hp19rs2S7+mZ9hiJu15VEELzmc9K9pQLhyx1UELTiirT/XY/cWAWWUID+h9tMbhoeg+OYDroZxjnW/4yMrDFX9qQ+MMAmqfHPVgiMMLaMQf8xBgnzFj8FsAAAAASUVORK5CYII="
            width="50px"
            height="50px"
            />
        </a>
        </td>

        <td>
        <a onClick={(event)=>updateProduct(event,p)}>
            <img src="data:image/png;base64,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"
            width="50px"
            height="50px"
            />
        </a>
        </td>
                        </tr>)
                }
        
                </tbody>
            </table>
        </div>
    )
}

export default Product;