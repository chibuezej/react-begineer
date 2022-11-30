import React from "react";

const Employee = (props) => {
  const {firstName, lastName, age: Employeeage} = props;

    return (

<h6>
    {`Who is the employee of the month: ${lastName} ${firstName} ${Employeeage}`}
</h6>
    )
}

export default Employee;
