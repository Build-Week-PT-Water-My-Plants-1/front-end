import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils.js/axiosWithAuth";


const SignUp = props => {
    console.log('props',props)
    const [formState, setFormState] = useState({
        username: "",
        password: "",
        phonenumber: ""
    });

    // const [user, setUser] = useState({
    //     username: "",
    //     phonenumber: ""
    // });

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value});
        console.log("e.target.value", e.target.value)
    };

    const loginSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/auth/register", formState)
        .then((res) => {
            console.log("res: signup success", res);
            props.history.push("/dashboard");
            // setUser({username, phonenumber} = formState);
        })
        .catch((err) => {
            console.log("err: signup failed", err)
            localStorage.removeItem("authToken");
            
        });
    };



  
        return (
            <div>
                <h1>Sign Up</h1>
                <form className="form" onSubmit={loginSubmit}> 
                    <label htmlFor="name">
                        Username
                        <input name="username" type="text" placeholder="Enter Username" onChange={handleChanges} value={formState.username}/>
                    </label>
                    <label htmlFor="password">
                        Password
                        <input name="password" type="password" placeholder="Enter Password" onChange={handleChanges} value={formState.password}/>
                    </label>
                    <label htmlFor="phonenumber">
                        Phone Number
                        <input name="phonenumber" type="text" placeholder="Enter Password" onChange={handleChanges} value={formState.phonenumber}/>
                    </label>
                    <button type="submit">Sign Up Now!</button>
                </form>
            </div>

        )


    
       
}


    


export default SignUp;