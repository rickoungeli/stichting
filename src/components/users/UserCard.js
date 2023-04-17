import React from 'react';

const UserCard = (props) => {
    return (
            <tr>
                <td>{props.user.iduser}</td>
                <td>{props.user.name}</td>
                <td>{props.user.firstname}</td>
                <td>{props.user.email}</td>
                <td>{props.user.codePays+props.user.phone}</td>
                <td>{props.user.statut}</td>
                <td>{props.user.isAdmin}</td>

            </tr>
    );
};

export default UserCard;