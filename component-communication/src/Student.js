import { useState } from "react";
import StudentList from "./StudentList";
function Student() {
let [sname,setSName]=useState("")
let [students,setStudents]=useState([]);
let addStudent = (event)=> {
    event.preventDefault();
setStudents(previousStudent=> {
    return [...previousStudent,sname]       // append name one by one 
})
setSName("");
}
    return(
        <div>
            <h2>Add Student</h2>
            <form onSubmit={addStudent}>
                <label>SName</label>
                <input type="text" name="sname" onChange={(event)=>setSName(event.target.value)}
                value={sname}/><br/>
                <input type="submit" value="Add Name"/>
            </form>
            <hr/>
            <StudentList students={students}></StudentList>
        </div>
    )
}

export default Student;