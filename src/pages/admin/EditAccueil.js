import axios from 'axios';
import React, { useState } from 'react';


const Admin = () => {
    const [titre_1, setTitre_1] = useState('');
    const [image_1, setImage_1] = useState('');
    const [alert, setAlert] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(image_1);
        const formData = new FormData();
        formData.append('id', 1);
        formData.append('titre_1', titre_1);
        formData.append('function', 'editAccueil');
        formData.append('image_1', image_1);
        
        axios.post(`${process.env.REACT_APP_API_URL}accueil.dao.php`, formData)
        .then(res => {
            if(res.data.statut === 200) {
                
            } else {
                
            }
            console.log(res)
            setAlert(res.data.message)
            
        })
        .catch(err => console.log(err))
        
    }

    return (
        <div className='home-admin'>
            <h1>Page d'administration du site</h1>
            { alert && <p>{ alert }</p> }

            <form 
                className='photo-accueil' 
                encType='multipart/form-data'  
                onSubmit={(e) => handleSubmit(e)}
                >

                <div>
                    <h3>Image à la une</h3>
                    <label htmlFor="">Photo d'accueil :</label>
                    <input 
                        type="file" 
                        onChange={(e) => setImage_1(e.target.files[0])} 
                    />
                </div>

                <div>
                    <h3>Les communiqués</h3>
                    <label htmlFor="">Titre à la une</label>
                    <input 
                        type="text"
                        value = {titre_1} 
                        onChange={(e) => setTitre_1(e.target.value)} 
                    />
                </div>
                
                <input type="submit" value="Enregister" />
            </form>            
        </div>
    );
};

export default Admin;