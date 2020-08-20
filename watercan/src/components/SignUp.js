import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils.js/axiosWithAuth";


const SignUp = props => {
    console.log('props',props)
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value});
    };


    const loginSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/signup", formState)
        .then((res) => {
            console.log("res: signup success", res);
            props.history.push("/dashboard");
        })
        // .catch((err) => {
        //     console.log("err: login failed", err)
        //     localStorage.removeItem("authToken");
            
        // });
    };



  
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={loginSubmit}> 
                    <label htmlFor="name">
                        Username
                        <input name="username" type="text" placeholder="Enter Username" onChange={handleChanges} value={formState.username}/>
                    </label>
                    <label htmlFor="password">
                        Password
                        <input name="password" type="password" placeholder="Enter Password" onChange={handleChanges} value={formState.password}/>
                    </label>
                    <button type="submit">Sign Up Now!</button>
                </form>
            </div>

        )


    
       
}


    


export default SignUp;