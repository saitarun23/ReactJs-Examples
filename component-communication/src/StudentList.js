function StudentList(props) {

    return(
        <div>
            <h2>All Student are</h2>
            {props.students.map(s=><li>{s}</li>)}
        </div>
    )

}

export default StudentList;