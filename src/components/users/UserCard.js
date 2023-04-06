import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <div>{props.user.id}</div>
            <div>{props.user.name}</div>
        </div>
    );
};

export default UserCard;