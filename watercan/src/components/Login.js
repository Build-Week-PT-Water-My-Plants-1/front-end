import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils.js/axiosWithAuth";
import { UserContext } from "../contexts/UserContext";


const Login = props => {
    console.log('props',props)
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    const { userId, setUserId} = useContext(UserContext);

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value});
    };


    const loginSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/auth/login", formState)
        .then((res) => {
            console.log("res: login success", res);
            setUserId(res.data.user.id);
            localStorage.setItem("authToken", res.data.jwt);
            console.log('user id', userId);
            props.history.push("/protected");
        })
        .catch((err) => {
            console.log("err: login failed", err)
            localStorage.removeItem("authToken");
            
        });
    };



  
        return (
            <div className="login">
                <h1>Login</h1>
                <form className="form" onSubmit={loginSubmit}> 
                    <label htmlFor="name">
                        Username
                        <input name="username" type="text" placeholder="Enter Username" onChange={handleChanges} value={formState.username}/>
                    </label>
                    <label htmlFor="password">
                        Password
                        <input name="password" type="password" placeholder="Enter Password" onChange={handleChanges} value={formState.password}/>
                    </label>
                    <button className='btn'>Submit</button>
                </form>
                <Link className="signup-link" to='/signup'>Not a User? Click Here!</Link>
            </div>

        )


    
       
}


    


export default Login;
