import React, {useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from '../utils.js/axiosWithAuth';
import PlantForm from './PlantForm';
import GhostLoad from './GhostLoad';
import { PlantContext } from "../contexts/PlantContext";


import EditForm from '../components/PlantUpdate';


const PlantList = (props) => {

    const { plants, setPlants, isLoading, setIsLoading } = useContext(PlantContext);
    // const { userId, setUserId} = useContext(UserContext);

    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(1);

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
        .get(`/plants`)
        .then(res => {
            console.log('axios.get plants success! res:', res);
            setPlants(res.data);
            setIsLoading(false);
          })
        .catch(err => {
          console.error('axios.get plants error', err)
          setIsLoading(false)
        })
        }, 500) 
    }

    return (
    <>
    {isLoading ? <GhostLoad/> :
    <div className='f-cont'>
        <div className='user-card'>
            <i className="fas fa-user-circle usr"></i>
            <p><span className='span'>User:</span>Plant God</p>
            <p><span className='span'>Total Plants:</span>{'  '}{plants.length}</p>
            <p className='add-plant' onClick={() => toggleAdd()}> Add a Plant {' '} 
                {add ? <i class="fas fa-chevron-up"></i> :
                <i className="fas fa-chevron-down"></i>}
                </p>
                {add ? <PlantForm getData = {getData}/> : null}
        </div>
        <div className='card-cont'>
        {
            plants ? plants.map(plant => {
                return(
                    <div className='plant-card' key={plant.id}>
                        <div>
                        <i className="fas fa-seedling fnd"></i>
                        </div>
                        <span className='content'>
                            <i className="fas fa-ellipsis-h" 
                            onClick={() => {setEdit(true); setId(plant.id);}}></i>
                            <h1 className='plant-h1'>{plant.nickname}</h1>
                            <p> Species: {plant.species}</p>
                            <p> Frequency: {plant.h2ofrequency}</p>
                        </span>
                    </div>
                )
            }) : null
        }
         </div>

         <div className='edit-form'>
            {edit ? <EditForm setEdit={setEdit} getData={getData} plants={plants} setPlants={setPlants} propsid={id} setEdit={setEdit} /> : null}
         </div>
         
    </div> }
    </>
    );
};

export default PlantList;





