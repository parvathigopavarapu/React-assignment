import {FETCH_EMPLOYEES, USER_DETAILS} from "./actionTypes";

let initialState = {
    employees : [],
    is_valid_user : false

}

function employeesReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEES : 
        return {
            ...state,
            employees : action.playload
        }
        case USER_DETAILS :
            return {
                ...state,
                is_valid_user : action.playload

            }
        default : return state;
    }
}
export default employeesReducer