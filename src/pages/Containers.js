import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { isEmpty } from '../components/Utils';

const Containers = () => {
    const [containers, setContainers] = useState({});
    const [selectedContainer, setSelectedContainer] = useState('');
    const [alert, setAlert] = useState("");

    useEffect(()=> {
        axios
        .get(`${process.env.REACT_APP_API_URL}container.dao.php?function=getAllContainersFromBdd`)
        .then(res => {
            if(res.status === 200 ) { 
                console.log(res);
                setContainers(res.data); 
            } else {
                setAlert("Un problème est survenu")
            }
            
        })
        .catch(err => alert(err))
    }, [])
    return (
        <div className='container'>
            <div className='titre'>
                <h1>LISTE DES CONTAINERS</h1>
                <button>Ajuter un container</button>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor="containerList">Numéro container :</label>
                        <select 
                            id="containersList" 
                            className="" 
                            name = 'containersList'  
                            value={selectedContainer}
                            onChange={e => setSelectedContainer(e.target.value)}
                            >
                                <option value="0">Sélectionner un container</option>
                                {!isEmpty(containers) && containers && containers.map((container, key=container.id) => (
                                    <option value={container.id} key={container.id} >{container.id} </option>
                                ))}                         
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Containers;