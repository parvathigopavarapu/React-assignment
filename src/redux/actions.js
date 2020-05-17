
export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const USER_DETAILS = "USER_DETAILS"

function fetchEmployees(employees){
    return {
        type : FETCH_EMPLOYEES,
        playload : employees
    }
}
function userDetails(is_valid){
    return {
        type : USER_DETAILS,
        playload : is_valid
    }
}

export const fetchEmployeeList = () => {
    return (dispatch) => {
        fetch("db.json")
        .then(res => res.json())
        .then(data => {
            const employees = data.user;
            dispatch(fetchEmployees(employees))
        })
    }
}

export const handleSubmit = (username, password) => {
    return (dispatch) => {
        if(username === "hruday@gmail.com" && password === "hruday123")
        {
            const is_valid = true;
            dispatch(userDetails(is_valid))
        }
        else {
            const is_valid = false;
            dispatch(userDetails(is_valid))
        }
       
    }
}