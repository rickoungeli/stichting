import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light px-4">
            <Link to='/' className='navbar-brand'>STICHTING</Link>
            <div>
                <button className="btn btn-primary">créer un utilisateur</button>
                <button className="btn btn-primary">Espace utilisateur</button>
                <button className="btn btn-danger">déconnexion</button>
            </div>
        </nav>
    );
};

export default Navbar;