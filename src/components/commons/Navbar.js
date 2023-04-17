import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
//import { GET_USER } from '../../redux/actions/user.action';
import { PUSH_USER, selectUser } from '../../features/usersReducer';
import { isEmpty } from '../Utils';

const Navbar = () => {
    const user = useSelector(selectUser);
    const [showPrivateMenu, setShowPrivateMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const togglePrivateMenu = ()=> { 
        setShowPrivateMenu(!showPrivateMenu) ;
    }

    const handleLogout = () => {
        dispatch({type:PUSH_USER, payload:{}})
        navigate('/')
    }
    
    const changeWidth = () => {
        setLargeur(window.innerWidth);
        if(window.innerWidth > 750) { setShowPrivateMenu(false)} else {setShowPrivateMenu(true)}
    }
    
    window.addEventListener('resize', () => changeWidth());

    return (
        <nav className="navbar">
            {largeur>750 ? (
            <div className="large-screen">
                <div className="navlinks">
                    <li className="navlink">
                        <Link to='/'>Stichting</Link>
                    </li>

                    {!isEmpty(user) &&
                    <ul className="navlinks-menu">
                        <li className="navlink">
                            <Link to='/containers' className="" >Containers</Link>
                        </li>
                        <li className="navlink">
                            <Link to='/colis' className="" >Colis</Link>
                        </li>

                        <li className="navlink">
                            <Link to='/clients' className="">Clients</Link>
                        </li>
                        <li className="navlink">
                            <Link to='/utilisateurs' className="" aria-current="page" >Utilisateurs</Link>
                        </li>
                        <li className="navlink">
                            <Link to='/edit-accueil' className="" aria-current="page" >Editer accueil</Link>
                        </li>
                    </ul>}
                </div>
                <div className="usermenu">
                    {!isEmpty(user) && user? 
                    <button onClick={() =>handleLogout()}>Déconnexion</button> : (
                    <li className="navlink" onClick={() => setShowPrivateMenu(false)} >
                        <Link to='/login' className="" >Connexion</Link>
                    </li>)}
                </div>
            </div>
            
            ):(
            <div className='mobile-screen'>
                <ul className="navlinks">
                    <li className="navlink" onClick={() => setShowPrivateMenu(false)} >
                            <Link to='/'>Stichting</Link>
                    </li>
                    <div><button onClick={() => togglePrivateMenu()} className='mobile-menu-icon'>BTN</button></div>
                </ul>
                <div className="navlinks">
                    
                    <div className='usermenu'>
                    
                        <div className="logout-icon">
                        {showPrivateMenu?( 
                            !isEmpty(user) ? 
                            <button onClick={() =>handleLogout()}>Déconnexion</button> :
                            <li className="navlink" onClick={() => setShowPrivateMenu(false)} >
                                <Link to='/login' className="" >Connexion</Link>
                            </li>
                            ):null}
                        </div>
                    </div>
                </div>
                {showPrivateMenu && (
                    !isEmpty(user) && 
                    <ul className="navlinks-menu">
                        <li className="navlink" onClick={() => setShowPrivateMenu(false)}>
                            <Link to='/containers' className="" >Containers</Link>
                        </li>
                        
                        <li className="navlink" onClick={() => setShowPrivateMenu(false)} >
                            <Link to='/colis' className="" >Colis</Link>
                        </li>

                        <li className="navlink" onClick={() => setShowPrivateMenu(false)} >
                            <Link to='/clients' className="">Clients</Link>
                        </li>
                        <li className="navlink" onClick={() => setShowPrivateMenu(false)} >
                            <Link to='/utilisateurs' className="" aria-current="page" >Utilisateurs</Link>
                        </li>
                        <li className="navlink" onClick={() => setShowPrivateMenu(false)} >
                            <Link to='/edit-accueil' className="" aria-current="page" >Editer accueil</Link>
                        </li>
                    </ul>)}
            </div>
            )}
        </nav>
    );
};

export default Navbar;