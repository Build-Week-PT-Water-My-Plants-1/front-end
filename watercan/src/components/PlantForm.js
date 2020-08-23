import React, { useState } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const PlantForm = (props) => {

    const [addPlants, setAddPlants] = useState({
        id: Date.now(),
        nickname: "",
        species: "",
        h2oFrequency: "",
        image: ""

    });



    const inputHandler = e => {
        setAddPlants({ ...addPlants, [e.target.name]: e.target.value})
    }

    


    const postData = (add) => {
        // axiosWithAuth()
        axios
            .post("api/plants/:id", add)
            .then(res => {
                console.log("res: post data", res)
                props.getData();
            })
            .catch(err => 
                console.log("err: postData no", err))
    }
         
    const submitHandler = e => {
        e.preventDefault();
        postData(addPlants);   
    }


    return (
        <div>
            <form onSubmit={submitHandler}> 
                    <h1>Add Plant</h1>
                        <label htmlFor="name">
                            Name
                            <input name="name" type="text" placeholder="Enter Name" onChange={inputHandler} />
                        </label>
                        <label htmlFor="nickname">
                            Nickname
                            <input name="nickname" type="text" placeholder="Enter Nickname" onChange={inputHandler} />
                        </label>
                        <label htmlFor="species">
                            Species
                            <input name="species" type="text" placeholder="Enter Species" onChange={inputHandler} />
                        </label>
                        <label htmlFor="H2oFrequency">
                            H2oFrequency
                            <input name="h2oFrequency" type="text" placeholder="Enter H2oFrequency" onChange={inputHandler} />
                        </label>
                        <button type="submit">Add Plant</button>
            </form>
            
        </div>
    );
};

export default PlantForm;