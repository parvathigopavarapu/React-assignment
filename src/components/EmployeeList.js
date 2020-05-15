import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmployeeList } from '../redux/index';
import Employee from './Employee';

const EmployeeList = ({ employees, fetchEmployeeList }) => {
    useEffect(() => {
        fetchEmployeeList()
    }, [0])

    return (
        <React.Fragment>
            <h1>EmployeeList</h1>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>phoneNo</th>
                    </tr>
                </thead>
                <tbody>

                    {employees ? employees.map(employee => {
                        return (
                            <Employee
                                key={employee.id}
                                employee={employee} />
                        );

                    }) : null
                    }

                </tbody>
            </table>
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return {
        employees : state.employees
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchEmployeeList : () => dispatch(fetchEmployeeList())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList);