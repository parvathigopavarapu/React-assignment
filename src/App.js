import React from 'react';
import './App.css';
import Login from './components/Login'
import EmployeeList from './components/EmployeeList';
import {connect} from 'react-redux'

function App({is_loggedIn}) {
  return (
      <div className="App">
        {is_loggedIn ? <EmployeeList /> :  <Login />}
      </div>
  );
}

const mapStateToProps = state => {
  return {
    is_loggedIn : state.is_valid_user
  }
}

export default connect (
  mapStateToProps,
   null)
(App);
