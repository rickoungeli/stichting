import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../../firebase';

const SignIn = () => {
    const form = useRef();
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: form.current[0].value,
            password: form.current[1].value
        }

        signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => { 
            alert(error)
        })

        //dispatch(getOneUser(userData));
        //form.current.reset();
        
    }

    return (
        <section className="form-container">
            <header>
                <h3 className="form-title">Connexion</h3>
            </header>
            <form ref={form} onSubmit = {e => handleSubmit(e)}>
                <div className="alert"> $alert </div>

                <div className="field-group">
                    <label>Email :</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Votre email" 
                    />
                </div>

                <div className="field-group">
                    <label>Mot de passe :</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Mot de passe" 
                    />
                    <i className="fas fa-eye"></i>
                </div>

                <div className="field-group button">
                    <input 
                        type="submit" 
                        value="Valider" />
                </div>
                <div>{/*<a>J'ai oublié mon mot de passe</a>*/}</div>
            </form>
        </section>
    );
};

export default SignIn;