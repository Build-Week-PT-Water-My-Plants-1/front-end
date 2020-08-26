import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils.js/axiosWithAuth';

const EditForm = props => {

    const [plant, setPlant] = useState({
        id: 20,
        nickname: "",
        species: "",
        h2ofrequency: "",
    });

    const editPlant = props.plants.filter(p => p.id === props.propsid)
    console.log('edit plant', editPlant);

    useEffect(() => {
        // axiosWithAuth()
        // .get(`/plants/${editPlant[0].id}`)
        // .then((res) => {
        //     console.log('edit form "get" req success:', res);
        //     setPlant(res.data);
        // })
        // .catch(err => console.error('edit form "get" req failure:', err));
        setPlant(editPlant[0]);

    }, [editPlant[0].id]);

    const handleChanges = e => {
        e.persist()
        setPlant({...plant, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/plants/${editPlant[0].id}`, plant)
        .then((res) => {
            console.log('edit form "put" req success:', res);
            setPlant(res.data);
            props.getData();
            props.setEdit(false);
        })
        .catch(err => {
            console.error('edit form "put" req failure:',err)
            props.setEdit(false)});
    };

    // const putPlant = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post(`/plants/${plant.id}`, putPlant)
    //     .then(res => {
    //         console.log('post plant success!', res);
    //         props.getData();
    //     })
    //     .catch(err => {
    //         console.err('post plant error!', err)
    //     });
    // };


    return (
        <div  className='edit'>
        <h1>edit:</h1>
        <form onSubmit={handleSubmit} className='input-cont edit-fr'>
            <label htmlFor='nickname'>Nickname</label>
            <input
            name='nickname'
            type='text'
            value={plant.nickname}
            onChange={handleChanges}
            className='input'
            />

            <label htmlFor='species'>Species</label>
            <input
            name='species'
            type='text'
            value={plant.species}
            onChange={handleChanges}
            className='input'
            />

            <label htmlFor='h2ofrequency'>H2oFrequency</label>
            <input
            name='h2ofrequency'
            type='text'
            value={plant.h2ofrequency}
            onChange={handleChanges}
            className='input'
            />
            <button className='btn'>update</button>
        </form>
        </div>
    );
};

export default EditForm;

