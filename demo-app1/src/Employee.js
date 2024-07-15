import React from "react";


class Employee extends React.Component{
    constructor(props){
        super(props);  //it is use to call super class constructor
        this.state={id:100,name:"ravi",age:21}
    }

    render(){

        return(<div>
            <h2>Employee Class Component</h2>
            <h5>Id is {this.state.id} Name is {this.state.name} Age is {this .state.age}</h5>
            <h5>City is {this.props.scity} and company is {this.props.company}</h5>
        </div>)
    }
}

export default Employee;