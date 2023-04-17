import React, { useRef, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
//import { LOGIN_USER } from '../redux/actions/user.action';
import { PUSH_USER } from '../features/usersReducer';
import axios from 'axios';

const Login = () => {
    const form = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alert, setAlert] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData() ;
        formData.append('email', form.current[0].value)   
        formData.append('password', form.current[1].value)
        formData.append('function', 'loginUser')
        
        //dispatch(loginUser(userData));
        axios.post(`${process.env.REACT_APP_API_URL}user.dao.php}`, formData)
        .then(res => {
            if(res.data.status === 200) {
                dispatch({type:PUSH_USER, payload:res.data})
                form.current.reset();
                navigate('/', { replace: true })
            } else {
                setAlert(res.data.message)
            }
            
        })
        .catch(err => alert(err))
        
    }

     
 
    return (
        <div className="form-container">
            <header>
                <h3>Connexion</h3>
            </header>
            
            <form ref={form} onSubmit = {e => handleSubmit(e)}>

                <p className="text-danger mt-1">{alert}</p>
                <div className="field-group">
                    <label className="form-label">Email :</label>
                    <input
                        className="form-control" 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Votre email" 
                    />
                </div>

                <div className="field-group">
                    <label className="form-label">Mot de passe :</label>
                    <input
                        className="form-control" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Mot de passe" 
                    />
                    <i className="fas fa-eye"></i>
                </div>

                <div className="button">
                    <button>Enregistrer</button>
                </div>
                <div><>J'ai oublié mon mot de passe</></div>
            </form>
        </div>
    );
};

export default Login;