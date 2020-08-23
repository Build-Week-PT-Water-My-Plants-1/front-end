import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils.js/axiosWithAuth';
import PlantForm from './PlantForm';
import GhostLoad from './GhostLoad';
// import EditForm from './EditForm';
import axios from "axios";

const PlantList = () => {
    const [plants, setPlants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(123);

    const toggleAdd = () => {
        setAdd(!add);
    }

    useEffect(()=> {
        getData()
    }, [])

    const getData = () => {
        setIsLoading(true);
        setTimeout(()=>{
        axiosWithAuth()
        .get(`/plants/${id}`)
        .then(res => {
            console.log('axios.get plants success! res:', res);
            setPlants(res.data);
            setIsLoading(false);
          })
        .catch(err => {
          console.error('axios.get plants error', err)
          setIsLoading(false)
        })
        }, 2000) 
    }

    return (
    <>
    {isLoading ? <GhostLoad/> :
    <div className='f-cont'>
        <div className='user-card'>
            <i class="fas fa-user-circle usr"></i>
            <p><span className='span'>User:</span> Plant God</p>
            <p><span className='span'>Total Plants:</span>{'  '}{plants.length}</p>
            <p className='add-plant' onClick={() => toggleAdd()}> Add a Plant {' '} 
                {add ? <i class="fas fa-chevron-up"></i> :
                <i class="fas fa-chevron-down"></i>}
                </p>
                {add ? <PlantForm getData = {getData}/> : null}
        </div>
        <div className='card-cont'>
        {
            plants.map(plant => {
                return(
                    <div className='plant-card' key={plant.id}>
                        <div>
                            <i class="far fa-user-circle fnd"></i>
                        </div>
                        <span className='content'>
                            <i class="fas fa-ellipsis-h" 
                            onClick={() => {setEdit(true); setId(plant.id);}}></i>
                            <h1 className='plant-h1'>{plant.name}</h1>
                            <p> Age: {plant.age}</p>
                            <p> Species: {plant.species}</p>
                        </span>
                    </div>
                );
            })
        }
         </div>

         {/* <div className='edit-form'>
            {edit ? <EditForm setEdit={setEdit} plants={plants} setPlants={setPlants} propsid={id}/> : null}
         </div> */}
         
    </div> }
    </>
    );
};

export default PlantList;







