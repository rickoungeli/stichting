import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { isEmpty } from '../components/Utils';

const Home = () => {
    const [dataAccueil, setDataAccueil] = useState({});
    const [alert, setAlert] = useState("");

    useEffect(()=> {
        axios
        .get(`${process.env.REACT_APP_API_URL}accueil.dao.php?function=getDataAccueil`)
        .then(res => {
            if(res.status === 200 ) { 
                console.log(res.data[0]);
                setDataAccueil(res.data[0]); 
            } else {
                setAlert("Un problème est survenu");
            }           
        })
        .catch(err => alert(err))
    }, [])

    return (
        <div className='home'>
            <h1>BIENVENUS SUR STICHTING</h1>
            <section className='la-une'>
                <h2>{dataAccueil.titre_1}</h2>
                <div className='picture'><img src={`http://localhost/stichting/models/images/${dataAccueil.picture_1}`} alt="fff" /></div>
                

            </section>
            <section>

            </section>
        </div>
    );
};

export default Home;