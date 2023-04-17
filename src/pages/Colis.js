import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../components/Utils';

const Colis = () => {
    const user = useSelector((state) => state.userReducer);
    !isEmpty(user) && console.log(user);


    return (
        <div>
            <h1 className='display-3 text-light text-center'>LISTE DES COLIS</h1>
            
        </div>
    );
};

export default Colis;