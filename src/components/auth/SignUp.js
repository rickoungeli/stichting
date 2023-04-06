import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useRef, useState } from "react";
import {useNavigate} from "react-router-dom";
import { auth } from '../../firebase';

const SignUp = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [validation, setValidation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: form.current[0].value,
            password: form.current[1].value
        }

        createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => { 
            alert(error)
        })
    }

    return (
        <>
            <div className="position-fixed top-0 vw-100 vh-100">
                <div onClick={()=>{}} className="w-100 h-100 bg-dark bg-opacity-75">
                    <div className="position-absolute top-50 start-50 translate-middle bg-light p-3" style={{ minWidth: "400px" }} >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Ajout d'un utilisateur</h5>
                                    <button onClick={()=>{}} className="btn-close"></button>
                                </div>
            
                                <div className="modal-body">
                                    <form className="sign-up-form" ref={form} onSubmit={e => handleSubmit(e)}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor='email1'>Email </label>
                                            <input className="form-control" type="email"  name="email" id="email1" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor='password1'>Mot de passe</label>
                                            <input className="form-control" type="password" name="password" id="password1" required />
                                            <i className="fas fa-eye d-none"></i>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor='passwordConfirm'>Confirmer mot de passe </label>
                                            <input className="form-control" type="password" name="passwordConfirm" id="passwordConfirm" required />
                                            <i className="fas fa-eye d-none"></i>
                                        </div>
                                        <p className="text-danger mt-1">{validation}</p>
                                        <button className="btn btn-primary">Enregistrer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;