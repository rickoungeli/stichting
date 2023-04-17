import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_USER } from '../../redux/actions/user.action';
import { isEmpty } from '../Utils';

const Navbar = () => {
    const user = useSelector((state) => state.userReducer);
    const [showMenu, setShowMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const dispatch = useDispatch()

    const toggleMenu = ()=> { 
        setShowMenu(!showMenu) ;
        console.log(user);
    }

    const handleLogout = () => {
        dispatch({type:GET_USER, payload:{}})
    }
    /*
    const changeWidth = () => {
        setLargeur(window.innerWidth);
        if(window.innerWidth > 750) { setShowMenu(false)} else {setShowMenu(true)}
    }
    
    window.addEventListener('resize', () => changeWidth());
    */

    return (
        <nav className="navbar">
            { (showMenu || largeur>750) && 
                <ul className="navlinks">
                    <li className="navlink" onClick={toggleMenu} >
                        <Link to='/'>Stichting</Link>
                    </li>
                    {!isEmpty(user) && user &&
                    <div className='navlinks'>
                        <li className="navlink" onClick={toggleMenu} >
                            <Link to='/colis' className="" >Colis</Link>
                        </li>

                        <li className="navlink" onClick={toggleMenu} >
                            <Link to='/clients' className="">Clients</Link>
                        </li>
                        <li className="navlink" onClick={toggleMenu} >
                            <Link to='/utilisateurs' className="" aria-current="page" >Utilisateurs</Link>
                        </li>
                    </div>
                    }
                    {(!isEmpty(user) && user) ? 
                    <button onClick={handleLogout()}>Déconnexion</button> :
                    <li className="navlink" onClick={toggleMenu} >
                        <Link to='/login' className="" >Connexion</Link>
                    </li>
                    }
                </ul>
            }
            <button onClick={toggleMenu} className='mobile-menu-icon'>BTN</button>
        </nav>
    );
};

export default Navbar;