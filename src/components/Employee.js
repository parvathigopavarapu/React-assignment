import React from 'react'

const Employee = (props) => {
    const { id, name, age, gender, email, phoneNo } = props.employee;
    return (<React.Fragment>
        <tr key = {id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{email} </td>
            <td>{phoneNo}</td>
        </tr>
    
    </React.Fragment>);
}

export default Employee;