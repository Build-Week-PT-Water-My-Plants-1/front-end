import React, { createContext, useState } from "react";
import { axiosWithAuth } from "../utils.js/axiosWithAuth";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";



const PlantForm = (props) => {
   
    const [addPlants, setAddPlants] = useState({
        // id: 1,
        user_id: 1,
        nickname: "",
        species: "",
        h2ofrequency: "",
        // image: ""

    });

    // const { id } = useParams();
    // const { goBack } = useHistory();



    // useEffect(() => {
    //     axios
    //         .get(`/plants`)
    //         .then((res) => {
    //             console.log("API Response", res);
    //             setAddPlants( res.data )
    //         })
    //         .catch((err) => 
    //         console.log("API Error", err))
    // }, [id])



    const inputHandler = e => {
        e.persist();
        setAddPlants({ ...addPlants, [e.target.name]: e.target.value})
    }

    


    const postData = (add) => {
        axiosWithAuth()
            .post(`/plants/${addPlants.user_id}`, add)
            .then(res => {
                console.log("res: post data", res)
                props.getData();
            })
            .catch(err => 
                console.log("err: postData no", err))
    }

    


        
         
    const submitHandler = e => {
        e.preventDefault();
        console.log(addPlants);
        postData(addPlants); 
    //     axios
    //     .put(`/plants/${addPlants.user_id}`, addPlants)  
    //     .then((res) => {
    //         console.log("Submit Success", res);
    //         setAddPlants(res.data)
    //         postData(addPlants)
    //     props.getData();
    //     goBack();
    // })
    // .catch((err) => 
    // console.log("Submit Error", err))   
    }


    return (
        <div>
            
            <form onSubmit={submitHandler}> 
                    <h1>Add Plant</h1>
                        {/* <label htmlFor="name">
                            Name
                            <input name="name" type="text" placeholder="Enter Name" onChange={inputHandler} value={addPlants.nickname} />
                        </label> */}
                        <label htmlFor="nickname">
                            Nickname
                            <input name="nickname" type="text" placeholder="Enter Nickname" onChange={inputHandler} value={addPlants.nickname}/>
                        </label>
                        <label htmlFor="species">
                            Species
                            <input name="species" type="text" placeholder="Enter Species" onChange={inputHandler} value={addPlants.species}/>
                        </label>
                        <label htmlFor="h2ofrequency">
                            H2oFrequency
                            <input name="h2ofrequency" type="text" placeholder="Enter H2oFrequency" onChange={inputHandler} value={addPlants.h2ofrequency}/>
                        </label>
                        <button type="submit">Add Plant</button>
            </form>
            
        </div>
    );
};

export default PlantForm;