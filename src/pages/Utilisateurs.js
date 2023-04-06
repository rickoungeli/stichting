import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../components/users/UserCard';
import { isEmpty } from '../components/Utils'

const Utilisateurs = () => {
    const users = useSelector((state) => state.userReducer)
    console.log(users);
    return (
        <div>
            <h1>LISTE DES UTILISATEURS</h1>
            <div>
                {!isEmpty(users) && users.map((user, key=user.iduser) => <UserCard user={user} />)}
            </div>
        </div>
    );
};

export default Utilisateurs;