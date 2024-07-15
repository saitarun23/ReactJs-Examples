import { useState } from "react";

function Login(){
    let[emailid,setEmailId]=useState("");
    let[password,setPassword]=useState("");
    let fun1=(event)=>{
        let vemailid=event.target.value; // to get email field value
        setEmailId(vemailid);
    }

    let fun2=(event)=>{
        let vpassword=event.target.value;
        setPassword(vpassword);
    }

    let checkLoginDetails=(event)=>{
        event.preventDefault();
        console.log(emailid)
        console.log(password)
        if(emailid=="akash@gmail.com" && password=="1234"){
            alert("Successfully Login")
        }
        else{
            alert("Failure Try Once Again")
        }
    }


    return(<div>
        <h2>Login Page</h2>

        <form>
            <label>EmailId</label>
            <input type="email" name="emailid" onChange={fun1}/><br/>
            <label>Password</label>
            <input type="password" name="password" onChange={fun2}/><br/>
            <input type="submit" value="SignIn"/>
            <input type="reset" value="reset"/>
        </form>
    </div>)

}

export default Login;