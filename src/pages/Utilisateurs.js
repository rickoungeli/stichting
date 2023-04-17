import React, { useState, useEffect } from 'react';
import UserCard from '../components/users/UserCard';
import { isEmpty } from '../components/Utils'
import axios from 'axios';

const Utilisateurs = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios
        .get(`${process.env.REACT_APP_API_URL}user.dao.php?function=getAllUsersFromBdd`)
        .then(res => {
            console.log(res);
            setUsers(res.data);
        })
        .catch(err => alert(err))

    },[])

    return (
        <div>
            <h1>LISTE DES UTILISATEURS</h1>
            <table className=''>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>prénom</th>
                    <th>email</th>
                    <th>téléphone</th>
                    <th></th>
                    <th>Admin?</th>
                    <th></th>
                </tr>
                {
                !isEmpty(users) && users && users.map((user, key=user.iduser) => (
                    <UserCard user={user} />
                ))}
            </table>
        </div>
    );
};

export default Utilisateurs;