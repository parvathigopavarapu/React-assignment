
import React, { useState } from "react";
import { connect } from "react-redux";
import { handleSubmit } from "../redux/index";

const Login = ({ is_userValid, handleSubmit }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (

        <div className="login">
            <h1>Login</h1>
            <form onSubmit = {() => handleSubmit(username, password)}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
                <br />
                <button type="submit"
                    className="btn-primary login-btn"
                > Login
                </button>
                {(username == "" || password == ""  ||  is_userValid) ? null : 
                <textarea className="bg-danger">
                    Sorry, Wrong Combination of Username and Passwordd 
                    </textarea>
                }
            </form>
        </div>

    );

};

const mapStateToProps = state => {
    return {
      is_userValid : state.is_valid_user
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit : (username, password) =>
            dispatch(handleSubmit(username, password))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login);
